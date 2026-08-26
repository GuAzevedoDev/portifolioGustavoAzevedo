import { cuboVideo, tagPython, tagFlutter } from "./ui.js";

// Toca o vídeo do cubo e revela as tags só depois que a animação de entrada
// (CSS) termina, pra tudo aparecer com o cubo já na posição final
export function initCubo() {
  if (!cuboVideo) return;

  let semAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let mostrarTags = () => {
    if (tagPython) tagPython.classList.add("ativo");
    if (tagFlutter) tagFlutter.classList.add("ativo");
  };

  if (semAnimacao) {
    cuboVideo.play();
    mostrarTags();
  } else {
    cuboVideo.addEventListener(
      "animationend",
      () => {
        cuboVideo.play();
        mostrarTags();
      },
      { once: true },
    );
  }
}
