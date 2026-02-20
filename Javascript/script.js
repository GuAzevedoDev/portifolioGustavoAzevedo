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
  CSS: {
    description:
      "CSS dá vida ao design. Tenho domínio de Flexbox, Grid, animações e temas modernos responsivos.",
  },
  JavaScript: {
    description:
      "JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas.",
  },
  csharp: {
    description:
      "C# é uma linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft como parte da plataforma .NET. É amplamente utilizada para criar diversos tipos de aplicativos, desde os que rodam em dispositivos da Internet das Coisas (IoT) até aplicações web e de jogos, e é conhecida por sua versatilidade e desempenho.",
  },
  sql: {
    description:
      "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, amplamente utilizado para armazenar e gerenciar dados.",
  },
  figma: {
    description:
      "Figma é uma ferramenta de design online e colaborativa usada para criar, prototipar e testar designs para websites, aplicativos e outros produtos digitais.",
  },
  git: {
    description:
      "Git é um sistema de controle de versão distribuído, gratuito e de código aberto, usado para rastrear alterações em arquivos ao longo do tempo, permitindo que múltiplos desenvolvedores trabalhem em um projeto simultaneamente.",
  },
  github: {
    description:
      "O GitHub é uma plataforma online de hospedagem de código-fonte e uma rede social profissional para desenvolvedores, que utiliza o sistema de controle de versões distribuído Git.",
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

links.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      menuMobile.checked = false;
    }, 300); 
  });
});
