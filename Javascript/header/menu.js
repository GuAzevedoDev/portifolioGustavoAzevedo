import { hamburgerInput, nav } from "./ui.js";

const SEGUNDOS_ATE_FECHAR = 8;

// Abre/fecha o menu de navegação. Além do próprio hamburger, o menu se
// fecha ao clicar fora, ao apertar Esc e sozinho depois de 8s parado —
// assim ele nunca fica aberto atrapalhando a leitura da página.
export function initMenu() {
  if (!hamburgerInput || !nav) return;

  let temporizador;

  function abrir() {
    nav.classList.add("ativo");
    hamburgerInput.checked = true;
    agendarFechamento();
  }

  function fechar() {
    nav.classList.remove("ativo");
    hamburgerInput.checked = false;
    clearTimeout(temporizador);
  }

  // O relógio só corre enquanto o ponteiro está longe do menu: se o
  // visitante está com o mouse em cima, ele ainda está decidindo
  function agendarFechamento() {
    clearTimeout(temporizador);
    if (nav.matches(":hover")) return;
    temporizador = setTimeout(fechar, SEGUNDOS_ATE_FECHAR * 1000);
  }

  hamburgerInput.addEventListener("change", () => {
    if (hamburgerInput.checked) abrir();
    else fechar();
  });

  // Enquanto o ponteiro estiver sobre o menu, o tempo não corre
  nav.addEventListener("mouseenter", () => clearTimeout(temporizador));
  nav.addEventListener("mouseleave", agendarFechamento);

  // Qualquer movimento dentro do menu renova o tempo
  nav.addEventListener("pointermove", agendarFechamento);
  nav.addEventListener("focusin", () => clearTimeout(temporizador));

  // Clique fora fecha. pointerdown responde antes de a navegação começar
  document.addEventListener("pointerdown", (evento) => {
    if (!nav.classList.contains("ativo")) return;
    const dentroDoMenu = nav.contains(evento.target);
    const noHamburger = evento.target.closest(".hamburger");
    if (!dentroDoMenu && !noHamburger) fechar();
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fechar();
  });

  // Escolher um destino também fecha
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fechar);
  });
}
