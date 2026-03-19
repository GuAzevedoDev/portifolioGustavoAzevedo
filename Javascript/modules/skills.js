export default function initSkills() {
  const apps = document.querySelectorAll(".app");
  const loadingScreen = document.getElementById("loading-screen");
  const skillScreen = document.getElementById("skill-screen");
  const skillIcon = document.getElementById("skill-icon");
  const skillDescription = document.getElementById("skill-description");
  const closeBtn = document.getElementById("close-btn");

  if (!loadingScreen || !skillScreen) return;

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
}
