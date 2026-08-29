import { emIngles, carregarTextos } from "../idioma/idioma.js";

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
    swift: {
      description:
        "O Swift é uma linguagem de programação de código aberto (open source), criada pela Apple em 2014. Ela é usada para desenvolvimento de aplicativos iOS, MacOS,tvOS e watchOS (o relógio da Apple). Essa linguagem tem crescido bastante e tomando força no mercado.",
    },
    css: {
      description:
        "CSS controla toda a aparência da página: cores, espaçamento, tipografia e layout. É também o que torna o site responsivo, adaptando a mesma estrutura a telas de qualquer tamanho.",
    },
    flask: {
      description:
        "Flask é um microframework web em Python. Ele entrega o essencial — rotas, requisições e templates — e deixa o resto das escolhas com o desenvolvedor, o que o torna leve e direto para APIs e aplicações de porte pequeno e médio.",
    },
    dart: {
      description:
        "Dart é a linguagem por trás do Flutter, criada pelo Google. Compila tanto para código nativo, no celular, quanto para JavaScript, na web, e sua tipagem forte ajuda a evitar erros ainda durante a escrita do código.",
    },
    postgresql: {
      description:
        "PostgreSQL é um banco de dados relacional de código aberto, conhecido por respeitar rigorosamente o padrão SQL e por recursos avançados como campos JSON, índices variados e transações confiáveis.",
    },
    mysql: {
      description:
        "MySQL é um dos bancos de dados relacionais mais usados no mundo, muito comum em aplicações web pela combinação de desempenho em leitura, facilidade de configuração e ampla documentação.",
    },
    sqlite: {
      description:
        "SQLite é um banco relacional que vive em um único arquivo, sem servidor para instalar ou manter. Por isso é o padrão em aplicativos móveis e a escolha natural para protótipos e testes.",
    },
    sqlalchemy: {
      description:
        "SQLAlchemy é o ORM mais usado em Python: permite manipular tabelas como se fossem classes e objetos, sem abrir mão de escrever SQL direto quando a consulta exige.",
    },
    git: {
      description:
        "Git é um sistema de controle de versão distribuído. Ele registra o histórico de alterações do projeto e permite trabalhar em várias frentes ao mesmo tempo, através de branches, sem que uma atrapalhe a outra.",
    },
    docker: {
      description:
        "Docker empacota a aplicação junto com tudo de que ela precisa para rodar. O container se comporta igual na máquina de desenvolvimento e no servidor, o que elimina o clássico \"na minha máquina funciona\".",
    },
    traefik: {
      description:
        "Traefik é um proxy reverso que fica na frente dos containers e direciona cada requisição para o serviço certo. Descobre novos containers sozinho e cuida da renovação automática dos certificados HTTPS.",
    },
    letsencrypt: {
      description:
        "Let's Encrypt é uma autoridade certificadora gratuita que emite os certificados TLS responsáveis pelo cadeado do HTTPS. Os certificados valem 90 dias e são renovados automaticamente.",
    },
    gunicorn: {
      description:
        "Gunicorn é o servidor WSGI que executa a aplicação Python em produção. Distribui as requisições entre vários processos paralelos, papel que o servidor embutido do Flask não cumpre fora do desenvolvimento.",
    },
    hostinger: {
      description:
        "VPS é um servidor virtual privado, com recursos e acesso root próprios. É onde a aplicação roda de verdade: containers, proxy reverso, certificados e domínio ficam sob minha administração.",
    },
    vercel: {
      description:
        "Vercel é uma plataforma de deploy voltada ao front-end. Publica o site a cada push no repositório, distribui os arquivos por uma CDN global e cuida de domínio e HTTPS sem configuração manual.",
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
        // Mostra o português na hora; se o visitante está em inglês, o
        // dicionário é buscado sob demanda e o texto é substituído.
        skillDescription.textContent = skills[skill]?.description ?? "";
        if (emIngles()) {
          carregarTextos().then((en) => {
            const traduzido = en[`skill.${skill}`];
            if (traduzido) skillDescription.textContent = traduzido;
          });
        }
        skillScreen.style.display = "flex";
      }, 1000);
    });
  });

  closeBtn.addEventListener("click", () => {
    skillScreen.style.display = "none";
  });
}
