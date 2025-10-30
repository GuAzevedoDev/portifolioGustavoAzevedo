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

function AbrirmodalProjetos() {
  const lista = document.querySelectorAll(".carrossel li");
  const modal = document.querySelector(".projects-modal");
  const fechar = document.getElementById("fechar-modal-projetos");

  const listaImagens = modal.querySelector(".images-projects");
  const descricao = document.getElementById("descricao-modal");
  const btnCodigo = modal.querySelector(".modal-btn-codigo");
  const btnProjeto = modal.querySelector(".modal-btn-projeto");

  lista.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!item.classList.contains("ativo-carrossel")) return;

      const imagens = item.dataset.imagens.split(",");
      const texto = item.dataset.descricao;
      const codigo = item.dataset.codigo;
      const projeto = item.dataset.projeto;

      listaImagens.innerHTML = "";
      descricao.textContent = "";

      imagens.forEach((img) => {
        const li = document.createElement("li");
        const image = document.createElement("img");
        image.src = `imagens/projetos/${img.trim()}`;
        li.appendChild(image);
        listaImagens.appendChild(li);
      });

      descricao.textContent = texto;
      btnCodigo.href = codigo;
      btnProjeto.href = projeto;

      modal.classList.add("ativo-modal");
    });
  });

  // fecha modal no X
  fechar.addEventListener("click", () => modal.classList.remove("ativo-modal"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("ativo-modal");
  });
}

AbrirmodalProjetos();
