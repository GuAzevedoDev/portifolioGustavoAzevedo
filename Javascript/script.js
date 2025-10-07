const body = document.body;

document.getElementById("tema").addEventListener("click", alteraTema);
document.getElementById("temaMobile").addEventListener("click", alteraTema);

function alteraTema() {
  body.classList.toggle("light");
}

const check = document.getElementById("check-mobile");
const btn = document.querySelector(".btn-baixo");

check.addEventListener("change", () => {
  btn.style.zIndex = check.checked ? "-1" : "2";
});

const header = document.querySelector("#header");

window.addEventListener("wheel", (event) => {
  if (window.innerWidth > 768) {
    if (event.deltaY > 0) {
      header.classList.add("desaparece-header");
    }
  }
});

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
        block: "nearest"
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

  atualizarCarrossel(false);
});

