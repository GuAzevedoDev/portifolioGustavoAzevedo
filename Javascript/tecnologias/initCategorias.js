// Abas do dock do tablet: cada uma mostra só os apps da sua categoria.
// São 13 tecnologias em 4 grupos — todas juntas não caberiam na tela do
// aparelho, e o dock já existia no layout sem função nenhuma.
export default function initCategorias() {
  const abas = document.querySelectorAll(".dock-aba");
  const apps = document.querySelectorAll(".front .home .app");
  if (!abas.length || !apps.length) return;

  function mostrar(categoria) {
    apps.forEach((app) => {
      app.hidden = app.dataset.cat !== categoria;
    });

    abas.forEach((aba) => {
      const ativa = aba.dataset.cat === categoria;
      aba.classList.toggle("ativo", ativa);
      aba.setAttribute("aria-selected", String(ativa));
    });
  }

  abas.forEach((aba) => {
    aba.addEventListener("click", () => mostrar(aba.dataset.cat));
  });

  // Setas navegam entre as abas, como manda o padrão de tablist
  document.querySelector(".home2")?.addEventListener("keydown", (evento) => {
    const passo = { ArrowRight: 1, ArrowLeft: -1 }[evento.key];
    if (!passo) return;

    const lista = [...abas];
    const atual = lista.findIndex((aba) => aba.classList.contains("ativo"));
    const proxima = lista[(atual + passo + lista.length) % lista.length];

    evento.preventDefault();
    mostrar(proxima.dataset.cat);
    proxima.focus();
  });

  // O HTML já marca uma aba como ativa; isso aplica o filtro correspondente
  const inicial = document.querySelector(".dock-aba.ativo") || abas[0];
  mostrar(inicial.dataset.cat);
}
