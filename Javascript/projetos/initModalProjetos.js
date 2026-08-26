export default function initModalProjetos() {
  const lista = document.querySelectorAll(".carrossel li");
  const modal = document.querySelector(".projects-modal");
  const fechar = document.getElementById("fechar-modal-projetos");

  if (!modal || !fechar) return;

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

  fechar.addEventListener("click", () => modal.classList.remove("ativo-modal"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("ativo-modal");
  });
}
