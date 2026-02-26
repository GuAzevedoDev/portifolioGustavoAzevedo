const body = document.body;

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

  fechar.addEventListener("click", () => modal.classList.remove("ativo-modal"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("ativo-modal");
  });
}

AbrirmodalProjetos();

document.querySelectorAll(".tag-html").forEach((tag) => {
  tag.addEventListener("mousemove", (e) => {
    const rect = tag.getBoundingClientRect();
    const x = 100 - ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    tag.style.setProperty("--x", `${x}%`);
    tag.style.setProperty("--y", `${y}%`);
    tag.style.opacity = 0.3;
  });

  tag.addEventListener("mouseleave", () => {
    tag.style.opacity = 0.08;
  });
});

const apps = document.querySelectorAll(".app");
const loadingScreen = document.getElementById("loading-screen");
const skillScreen = document.getElementById("skill-screen");
const skillIcon = document.getElementById("skill-icon");
const skillDescription = document.getElementById("skill-description");
const closeBtn = document.getElementById("close-btn");

const skills = {
  HTML: {
    description:
      "HTML é a base da web. Estruturo layouts limpos e semânticos, garantindo acessibilidade e SEO eficiente.",
  },
  python: {
    description:
      "O Python é uma linguagem interpretada, o que significa que executa diretamente o código linha por linha. Se houver erros no código do programa, ele será interrompido. Portanto, os programadores podem encontrar rapidamente erros no código.",
  },
  JavaScript: {
    description:
      "JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas.",
  },
  kotlin: {
    description:
      "O Kotlin é conhecido por sua sintaxe concisa e intuitiva, o que o torna acessível até mesmo para iniciantes. Ao compará-lo com outras linguagens como Java ou C++, você perceberá que é muito mais fácil escrever e ler código em Kotlin. Isso significa menos tempo decifrando código e mais tempo criando soluções inovadoras.",
  },
  flutter: {
    description:
      "O Flutter é uma estrutura de código aberto desenvolvida e sustentada pelo Google. Desenvolvedores de front-end e full-stack usam o Flutter para criar a interface de usuário (UI) de uma aplicação para várias plataformas com uma única base de código.",
  },
  figma: {
    description:
      "Figma é uma ferramenta de design online e colaborativa usada para criar, prototipar e testar designs para websites, aplicativos e outros produtos digitais.",
  },
  git: {
    description:
      "Git é um sistema de controle de versão distribuído, gratuito e de código aberto, usado para rastrear alterações em arquivos ao longo do tempo, permitindo que múltiplos desenvolvedores trabalhem em um projeto simultaneamente.",
  },
  swift: {
    description:
      "O Swift é uma linguagem de programação de código aberto (open source), criada pela Apple em 2014. Ela é usada para desenvolvimento de aplicativos iOS, MacOS,tvOS e watchOS (o relógio da Apple). Essa linguagem tem crescido bastante e tomando força no mercado.",
  },
};

apps.forEach((app) => {
  app.addEventListener("click", () => {
    const skill = app.dataset.skill;
    const iconSVG = app.querySelector("svg").cloneNode(true);

    loadingScreen.innerHTML = "";
    loadingScreen.appendChild(iconSVG);
    loadingScreen.style.display = "flex";

    setTimeout(() => {
      loadingScreen.style.display = "none";

      skillIcon.innerHTML = "";
      skillIcon.appendChild(iconSVG);
      skillDescription.textContent = skills[skill].description;
      skillScreen.style.display = "block";
    }, 1000);
  });
});

closeBtn.addEventListener("click", () => {
  skillScreen.style.display = "none";
});

function atualizarHora() {
  const agora = new Date();

  let horas = agora.getHours();
  let minutos = agora.getMinutes();

  // Formata com dois dígitos
  const horaFormatada = `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}`;

  // Dia da semana e data em português
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const diaSemana = dias[agora.getDay()];
  const dia = agora.getDate().toString().padStart(2, "0");
  const mes = agora.toLocaleString("pt-BR", { month: "short" }); // ex: nov

  const dataFormatada = `${diaSemana}, ${dia} ${
    mes.charAt(0).toUpperCase() + mes.slice(1)
  }`;

  // Atualiza o HTML
  document.querySelector(".hour").textContent = horaFormatada;
  document.querySelector(".day").textContent = dataFormatada;
}

// Atualiza ao carregar
atualizarHora();

// Atualiza a cada 30 segundos
setInterval(atualizarHora, 30000);

const links = document.querySelectorAll(".nav-mobile .header-item a");
const menuMobile = document.getElementById("check-mobile");

links.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      menuMobile.checked = false;
    }, 300);
  });
});

const cardTablet = document.querySelector(".cardTablet");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cardTablet.classList.add("active");
      } else {
        cardTablet.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

if (window.innerWidth <= 768) {
  observer.observe(cardTablet);
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll(".header-item");

  const sections = Array.from(navLinks)
    .map((link) =>
      document.querySelector(link.querySelector("a").getAttribute("href")),
    )
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const href = link.querySelector("a").getAttribute("href");
            link.classList.toggle(
              "active-link",
              href === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    {
      rootMargin: "-100px 0px -40% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", initScrollSpy);

function initCursoCardsMobile() {
  const cards = document.querySelectorAll(".curso-card");
  let observer;

  function checkScreen() {
    // Se for mobile
    if (window.innerWidth < 768) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("hover-active", entry.isIntersecting);
          });
        },
        {
          threshold: 0.6,
        },
      );

      cards.forEach((card) => observer.observe(card));
    } else {
      // Se voltar para desktop, remove classe
      cards.forEach((card) => card.classList.remove("hover-active"));

      if (observer) observer.disconnect();
    }
  }

  checkScreen();
  window.addEventListener("resize", checkScreen);
}

initCursoCardsMobile();
