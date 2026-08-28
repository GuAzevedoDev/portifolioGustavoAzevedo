import { idiomaIndicador, botoesIdioma } from "./ui.js";

// Só o efeito visual de deslizar o indicador pro botão clicado —
// ainda não troca o conteúdo/idioma da página
export function initIdioma() {
  if (!idiomaIndicador || botoesIdioma.length === 0) return;

  function mover(botao) {
    idiomaIndicador.style.width = `${botao.offsetWidth}px`;
    idiomaIndicador.style.transform = `translateX(${botao.offsetLeft - idiomaIndicador.offsetLeft}px)`;
  }

  mover(document.querySelector(".idioma-opcao.ativo") || botoesIdioma[0]);

  botoesIdioma.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesIdioma.forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");
      mover(botao);
    });
  });
}
