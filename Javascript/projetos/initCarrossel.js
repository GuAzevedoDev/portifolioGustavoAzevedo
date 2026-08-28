/**
 * Carrossel de projetos.
 *
 * A rolagem é a nativa do palco (overflow-x), então arrasto, swipe e
 * inércia já vêm prontos do navegador — aqui só cuidamos de qual item
 * está ativo e de trazê-lo para a margem esquerda.
 */
export default function initCarrossel() {
  document.querySelectorAll("[data-carrossel]").forEach(montar);
}

const DURACAO = 500;

function montar(carrossel) {
  const palco = carrossel.querySelector(".carrossel-palco");
  const itens = [...carrossel.querySelectorAll(".carrossel-item")];
  const anterior = carrossel.querySelector(".carrossel-seta-anterior");
  const proxima = carrossel.querySelector(".carrossel-seta-proxima");

  if (!palco || itens.length === 0) return;

  const semAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let atual = Math.max(0, itens.findIndex((item) => item.classList.contains("ativo-carrossel")));
  let quadro = null;
  // Até quando os eventos de scroll são consequência da nossa própria
  // animação, e não de um arrasto do usuário.
  let nossoScrollAte = 0;

  /**
   * O item 0 aparece a exatamente `padding-left` da borda quando o
   * scroll está zerado. Logo, a distância entre os dois itens é o
   * scroll que coloca o alvo naquela mesma coluna — sem depender de
   * onde o offsetParent está.
   */
  function destino(indice) {
    const bruto = itens[indice].offsetLeft - itens[0].offsetLeft;
    return Math.max(0, Math.min(bruto, palco.scrollWidth - palco.clientWidth));
  }

  function pararAnimacao() {
    if (quadro !== null) {
      cancelAnimationFrame(quadro);
      quadro = null;
    }
  }

  /**
   * A animação é feita aqui, quadro a quadro, em vez de pedir
   * `behavior: "smooth"` ao navegador: neste palco a rolagem suave
   * nativa simplesmente não sai do lugar (a animação é descartada
   * assim que começa) e o carrossel ficava preso no primeiro item.
   */
  function rolarAte(indice) {
    pararAnimacao();
    nossoScrollAte = performance.now() + DURACAO + 200;

    const alvo = destino(indice);
    const inicio = palco.scrollLeft;
    const distancia = alvo - inicio;

    if (semAnimacao || Math.abs(distancia) < 1) {
      palco.scrollLeft = alvo;
      return;
    }

    const partiuEm = performance.now();

    const passo = (agora) => {
      const t = Math.min((agora - partiuEm) / DURACAO, 1);
      const suave = 1 - Math.pow(1 - t, 3); // easeOutCubic
      palco.scrollLeft = inicio + distancia * suave;

      quadro = t < 1 ? requestAnimationFrame(passo) : null;
    };

    quadro = requestAnimationFrame(passo);
  }

  function ativar(indice, rolar = true) {
    atual = Math.min(Math.max(indice, 0), itens.length - 1);

    itens.forEach((item, i) => {
      item.classList.toggle("ativo-carrossel", i === atual);
    });

    if (anterior) anterior.disabled = atual === 0;
    if (proxima) proxima.disabled = atual === itens.length - 1;

    if (rolar) rolarAte(atual);
  }

  anterior?.addEventListener("click", () => ativar(atual - 1));
  proxima?.addEventListener("click", () => ativar(atual + 1));

  itens.forEach((item, i) => {
    const capa = item.querySelector(".carrossel-capa");
    if (!capa) return;

    // Clicar num vizinho o traz para o foco; só o ativo abre o projeto.
    capa.addEventListener("click", (evento) => {
      if (i === atual) return;
      evento.preventDefault();
      ativar(i);
    });

    // Tab pelos cards acompanha o foco, senão o teclado navegaria para
    // uma página cujo card nem está visível.
    capa.addEventListener("focus", () => {
      if (i !== atual) ativar(i);
    });
  });

  carrossel.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      ativar(atual + 1);
    } else if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      ativar(atual - 1);
    }
  });

  // Num elemento que só rola na horizontal o Chrome converte a roda do
  // mouse em rolagem lateral: passar o cursor sobre o carrossel travaria
  // a descida da página. Gesto vertical volta a ser da página.
  palco.addEventListener(
    "wheel",
    (evento) => {
      if (Math.abs(evento.deltaX) >= Math.abs(evento.deltaY)) return;
      evento.preventDefault();
      const passo = evento.deltaMode === 1 ? 16 : 1;
      window.scrollBy(0, evento.deltaY * passo);
    },
    { passive: false }
  );

  // Quem manda é o dedo: encostar no carrossel interrompe a animação.
  palco.addEventListener("pointerdown", () => {
    pararAnimacao();
    nossoScrollAte = 0; // daqui em diante quem rola é o usuário
  });

  // Arrasto manual: descobre em que item a rolagem parou e sincroniza o
  // ativo, sem devolver o scroll para o lugar.
  let pendente;
  palco.addEventListener("scroll", () => {
    // Rolagem nossa, não do usuário. Sem esta guarda, chegando ao fim
    // da lista — onde o scroll satura antes do card alcançar a margem —
    // a sincronização desfazia a escolha feita na seta.
    if (quadro !== null || performance.now() < nossoScrollAte) return;

    clearTimeout(pendente);
    pendente = setTimeout(() => {
      const base = itens[0].offsetLeft;
      let maisProximo = 0;
      let menorDistancia = Infinity;

      itens.forEach((item, i) => {
        const distancia = Math.abs(item.offsetLeft - base - palco.scrollLeft);
        if (distancia < menorDistancia) {
          menorDistancia = distancia;
          maisProximo = i;
        }
      });

      if (maisProximo !== atual) ativar(maisProximo, false);
    }, 120);
  });

  // Ao mudar a largura da janela as medidas de clamp() mudam junto.
  let redimensionando;
  window.addEventListener("resize", () => {
    clearTimeout(redimensionando);
    redimensionando = setTimeout(() => rolarAte(atual), 150);
  });

  ativar(atual, false);
}
