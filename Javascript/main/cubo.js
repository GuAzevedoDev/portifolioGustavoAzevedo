import { cuboVideo, tagPython, tagFlutter } from "./ui.js";

// Toca o vídeo do cubo e revela as tags só depois que a animação de entrada
// (CSS) termina, pra tudo aparecer com o cubo já na posição final.
// O play também espera o vídeo ter buffer suficiente: até lá quem aparece é o
// poster, então o hero nunca fica vazio nem engasga no primeiro loop
// O Safari toca webm/VP9 mas descarta o canal alpha, e o que era transparente
// vira preto. Não dá pra perguntar isso ao navegador (canPlayType não fala de
// alpha), então identificamos o WebKit da Apple por dois caminhos:
//   - no desktop, navigator.vendor só é "Apple" no Safari (Chrome e Edge no
//     Mac reportam "Google Inc.")
//   - no iOS/iPadOS a Apple obriga todo navegador a usar WebKit, então Chrome
//     e Firefox de iPhone têm a mesma limitação e também precisam do mp4
function suportaVideoComAlpha() {
  let vendor = navigator.vendor || "";
  let ua = navigator.userAgent;

  // iPadOS 13+ se apresenta como Mac; o toque múltiplo é o que o denuncia
  let ehIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  let ehSafari = /apple/i.test(vendor) && !/chrome|chromium|crios|edg/i.test(ua);

  return !ehIOS && !ehSafari;
}

export function initCubo() {
  if (!cuboVideo) return;

  // Fora do Safari trocamos pelo webm com alpha, que dispensa fundo e assenta
  // direto na página. Como o vídeo é preload="none", nada foi baixado ainda:
  // cada navegador puxa um arquivo só
  let webm = cuboVideo.dataset.webm;
  if (webm && suportaVideoComAlpha()) {
    cuboVideo.querySelectorAll("source").forEach((s) => s.remove());
    cuboVideo.src = webm;
  } else {
    // Sem alpha, o que toca é o mp4 opaco, que carrega o próprio fundo
    // #080E1A. iOS e macOS convertem vídeo (BT.709) e cor CSS (sRGB) por
    // caminhos diferentes, então esse retângulo não fica exatamente igual
    // ao fundo da página. A classe liga um fade nas bordas que dissolve a
    // emenda, qualquer que seja o tamanho da diferença.
    cuboVideo.classList.add("cubo-opaco");
  }
  cuboVideo.load();

  let semAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let mostrarTags = () => {
    if (tagPython) tagPython.classList.add("ativo");
    if (tagFlutter) tagFlutter.classList.add("ativo");
  };

  let animacaoTerminou = new Promise((resolve) => {
    if (semAnimacao) resolve();
    else cuboVideo.addEventListener("animationend", resolve, { once: true });
  });

  // readyState 4 (HAVE_ENOUGH_DATA) = dá pra tocar até o fim sem parar pra
  // bufferizar. Só que "canplaythrough" é um evento notoriamente instável -
  // alguns navegadores não disparam mesmo com o vídeo todo em buffer - então
  // também conferimos o readyState direto, e desistimos de esperar depois de
  // 8s. Em erro resolve na hora: uma falha de vídeo não pode deixar as tags
  // escondidas pra sempre, o poster segura a imagem sozinho
  let videoCarregou = new Promise((resolve) => {
    if (cuboVideo.readyState >= 4) return resolve();

    let pronto = () => {
      clearInterval(sonda);
      clearTimeout(desistir);
      resolve();
    };
    let sonda = setInterval(() => {
      if (cuboVideo.readyState >= 4) pronto();
    }, 250);
    let desistir = setTimeout(pronto, 8000);

    cuboVideo.addEventListener("canplaythrough", pronto, { once: true });
    cuboVideo.addEventListener("error", pronto, { once: true });
  });

  Promise.all([animacaoTerminou, videoCarregou]).then(() => {
    cuboVideo.play().catch(() => {});
    mostrarTags();
  });
}
