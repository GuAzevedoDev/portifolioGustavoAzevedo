import { linksNav } from "./ui.js";

// Acompanha o scroll e marca no menu qual seção está na tela no momento:
// risca o link e bloqueia o clique nela (feito via CSS na classe "atual")
export function initNavegacaoAtual() {
  if (linksNav.length === 0) return;

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        let link = linksNav.find((a) => a.getAttribute("href") === `#${entry.target.id}`);
        if (!link) return;
        link.parentElement.classList.toggle("atual", entry.isIntersecting);
      });
    },
    { rootMargin: "-50% 0px -50% 0px" },
  );

  linksNav.forEach((link) => {
    let alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) observer.observe(alvo);
  });
}
