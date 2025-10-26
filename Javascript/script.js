const body = document.body;

document.getElementById("tema").addEventListener("click", alteraTema);
document.getElementById("temaMobile").addEventListener("click", alteraTema);

function alteraTema() {
  body.classList.toggle("light");
}

const header = document.querySelector(".header");
if (window.innerWidth > 750) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("desaparece-header");
    } else {
      header.classList.remove("desaparece-header");
    }
  });
}

window.addEventListener("load", () => {
  const lista = document.querySelectorAll(".carrossel li");
  const btnEsquerda = document.querySelector(".btn-seta.esquerda");
  const btnDireita = document.querySelector(".btn-seta.direita");
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

