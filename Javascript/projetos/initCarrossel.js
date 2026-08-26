export default function initCarrossel() {
  window.addEventListener("load", () => {
    const lista = document.querySelectorAll(".carrossel li");
    const btnEsquerda = document.querySelector(".btn-seta.esquerda");
    const btnDireita = document.querySelector(".btn-seta.direita");
    
    if (!lista.length || !btnEsquerda || !btnDireita) return;

    let index = 0;

    function atualizarCarrossel(scroll = true) {
      lista.forEach((item, i) => {
        item.classList.toggle("ativo-carrossel", i === index);
      });

      if (scroll) {
        lista[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }

    btnDireita.addEventListener("click", () => {
      index = (index + 1) % lista.length;
      atualizarCarrossel();
    });

    btnEsquerda.addEventListener("click", () => {
      index = (index - 1 + lista.length) % lista.length;
      atualizarCarrossel();
    });

    lista.forEach((item, i) => {
      item.addEventListener("click", () => {
        index = i;
        atualizarCarrossel();
      });
    });

    atualizarCarrossel(false);
  });
}
