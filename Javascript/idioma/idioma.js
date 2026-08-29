import { idiomaIndicador, botoesIdioma } from "./ui.js";

const CHAVE = "idioma";

/* O dicionário de inglês tem 19 KB e não serve para nada em português, que
   é o padrão. Import estático punia todo visitante com esse peso no
   caminho crítico; dinâmico, ele só é buscado por quem escolheu EN. */
let en = null;
export async function carregarTextos() {
  if (!en) ({ en } = await import("./textos.js"));
  return en;
}

/** O idioma escolhido vale para o site todo, inclusive nas páginas de projeto. */
export function emIngles() {
  try {
    return localStorage.getItem(CHAVE) === "en";
  } catch (e) {
    return false; // navegação privada
  }
}

function guardar(idioma) {
  try {
    localStorage.setItem(CHAVE, idioma);
  } catch (e) {
    /* sem localStorage a escolha só não persiste */
  }
}

/**
 * Aplica o valor traduzido no elemento.
 *
 * Com marcação (`<code>` no meio da frase) ou entidade (`&mdash;`), o valor
 * precisa ser lido como HTML — via textContent o travessão apareceria
 * escrito por extenso.
 *
 * Sem marcação, troca só o primeiro nó de texto: os links do menu têm um
 * <svg> de seta e os títulos de seção têm o <span> do ponto azul, que
 * seriam apagados por um textContent inteiro.
 */
function escrever(el, valor) {
  if (/[<&]/.test(valor)) {
    el.innerHTML = valor;
    return;
  }
  const no = [...el.childNodes].find(
    (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
  );
  if (no) no.textContent = valor;
  else el.textContent = valor;
}

const ATRIBUTOS = [
  ["data-i18n-aria", "aria-label"],
  ["data-i18n-alt", "alt"],
  ["data-i18n-conteudo", "content"],
];

/** Caminho único: só traduz para o inglês. Voltar ao português é recarregar. */
async function traduzir() {
  const en = await carregarTextos();
  document.documentElement.lang = "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const valor = en[el.dataset.i18n];
    if (valor !== undefined) escrever(el, valor);
  });

  ATRIBUTOS.forEach(([dataset, atributo]) => {
    document.querySelectorAll(`[${dataset}]`).forEach((el) => {
      const valor = en[el.getAttribute(dataset)];
      if (valor !== undefined) el.setAttribute(atributo, valor);
    });
  });

  // O <title> está no head e também casa com [data-i18n], então o laço
  // acima já o traduziu. As páginas de projeto não marcam o título, e por
  // isso mantêm o nome do próprio projeto na aba.
}

export function initIdioma() {
  if (emIngles()) traduzir();

  if (!idiomaIndicador || botoesIdioma.length === 0) return;

  const mover = (botao) => {
    idiomaIndicador.style.width = `${botao.offsetWidth}px`;
    idiomaIndicador.style.transform = `translateX(${botao.offsetLeft - idiomaIndicador.offsetLeft}px)`;
  };

  const marcar = (botao) => {
    botoesIdioma.forEach((b) => {
      const ativo = b === botao;
      b.classList.toggle("ativo", ativo);
      b.setAttribute("aria-pressed", ativo ? "true" : "false");
    });
    mover(botao);
  };

  const atual = emIngles() ? "en" : "pt";
  marcar([...botoesIdioma].find((b) => b.dataset.idioma === atual) || botoesIdioma[0]);

  // A Unbounded muda a largura do botão depois do primeiro layout, e o
  // indicador é dimensionado em pixels — sem isto ele fica torto.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      mover(document.querySelector(".idioma-opcao.ativo") || botoesIdioma[0]);
    });
  }

  botoesIdioma.forEach((botao) => {
    botao.addEventListener("click", () => {
      const escolhido = botao.dataset.idioma;
      if (escolhido === (emIngles() ? "en" : "pt")) return;

      guardar(escolhido);
      if (escolhido === "en") {
        marcar(botao);
        traduzir();
      } else {
        // O HTML já está em português: recarregar devolve o texto original.
        location.reload();
      }
    });
  });
}
