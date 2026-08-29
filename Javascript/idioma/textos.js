/**
 * Inglês do site inteiro. O português não está aqui: ele é o que está
 * escrito no HTML. Trocar para PT recarrega a página, e o texto original
 * volta sozinho — por isso um dicionário só.
 *
 * As chaves vêm dos atributos data-i18n (texto), data-i18n-aria,
 * data-i18n-alt e data-i18n-conteudo (atributos).
 */
export const en = {
  // ---------------- documento ----------------
  "doc.titulo": "Gustavo Azevedo | Back-end & Mobile Developer",
  "doc.descricao":
    "Portfolio of Gustavo Azevedo, a back-end and mobile developer focused on modern interfaces and automation in Python.",

  // ---------------- cabeçalho ----------------
  "nav.inicio": "Home",
  "nav.sobre": "About",
  "nav.projetos": "Projects",
  "nav.tecnologias": "Tech",
  "nav.contato": "Contact",
  "aria.idioma": "Select language",
  "aria.nav": "Main navigation",
  "aria.github": "GitHub",
  "aria.linkedin": "LinkedIn",
  "aria.gmail": "Gmail",
  "aria.curriculo": "Resume",
  "aria.rolar": "Scroll to the next section",

  // ---------------- hero ----------------
  "hero.cargo": "Back-end & Mobile",
  "hero.botao": "View projects",

  // ---------------- projetos ----------------
  "aria.projetoAnterior": "Previous project",
  "aria.projetoProximo": "Next project",

  "proj.agendapy.ver": "See details of AgendaPY",
  "proj.agendapy.titulo": "Scheduling and management system for a beauty studio",
  "proj.agendapy.alt": "Daily schedule in the AgendaPY system",

  "proj.drive.ver": "See details of Drive Evidence Sync",
  "proj.drive.titulo": "Automation that matches Drive documents to spreadsheet rows",
  "proj.drive.alt": "Drive Evidence Sync diagram",

  "proj.gmail.ver": "See details of Gmail Organizer",
  "proj.gmail.titulo": "Automation that sorts and labels the inbox on its own",
  "proj.gmail.alt": "Gmail Organizer output in the terminal",

  "proj.industria.ver": "See details of Industria PY",
  "proj.industria.titulo": "Auto parts inventory control with role-based permissions",
  "proj.industria.alt": "Industria PY menu in the terminal",

  "proj.tortas.ver": "See details of Cia Das Tortas",
  "proj.tortas.titulo": "Digital storefront for an artisanal pastry shop",
  "proj.tortas.alt": "Home page of the Cia Das Tortas project",

  "tag.responsivo": "Responsive",

  // ---------------- sobre mim ----------------
  "sobre.titulo": "about me",
  "sobre.p1":
    "I'm Gustavo, 18 years old, a back-end and mobile developer. I started programming at Cotemig, where I'm taking a technical degree in IT, and today I put it to work: at Transuple I build data and spreadsheet automation in Python.",
  "sobre.p2":
    "Outside the internship I build products from scratch — AgendaPY is in production serving a real salon, and BOOSTio uses scraping and AI to recommend PC parts.",
  "sobre.p3":
    "I round out my training with Origamid for web development and compete in the Brazilian Informatics Olympiad at senior level, where logic and algorithms are my strong suit.",
  "sobre.foto": "Photo of Gustavo Azevedo",

  // ---------------- cursos ----------------
  "cursos.titulo": "courses",
  "curso.tecnologias": "Technologies",
  "curso1.periodo": "2023-Ongoing",
  "curso1.nome": "Technical Degree in IT",
  "curso1.texto":
    "During the technical course I built solid foundations in programming logic, back-end and front-end development.",
  "curso2.periodo": "2025-Ongoing",
  "curso2.texto":
    "I sharpened my skills in interface development and design best practices, focused on building modern, responsive sites.",

  // ---------------- tecnologias ----------------
  "tec.titulo": "Technologies",
  "aria.categorias": "Technology categories",
  "dock.backend.longo": "Back-end",
  "dock.backend.curto": "Back",
  "dock.frontend.longo": "Front-end",
  "dock.frontend.curto": "Front",
  "dock.mobile.longo": "Mobile",
  "dock.mobile.curto": "Mobile",
  "dock.dados.longo": "Database",
  "dock.dados.curto": "Data",
  "dock.producao.longo": "Production",
  "dock.producao.curto": "Deploy",
  "tablet.voltar": "Back",

  // ---------------- rodapé ----------------
  "footer.paginas": "Pages",
  "footer.inicio": "Home",
  "footer.sobre": "About Me",
  "footer.projetos": "Projects",
  "footer.tecnologias": "Technologies",
  "footer.frase": '"Imagination is more important than knowledge"',
  "footer.contato": "Get in touch",
  "footer.redes": "Social",
  "footer.ilustracao": "Illustration of Gustavo Azevedo",


  // ---------------- descrições das tecnologias (tablet) ----------------
  "skill.HTML":
    "HTML is the foundation of the web. I structure clean, semantic layouts that keep the page accessible and easy for search engines to read.",
  "skill.python":
    "Python is an interpreted language: it runs the code line by line. If there is an error, execution stops right there — which makes problems quick to spot.",
  "skill.JavaScript":
    "JavaScript is a lightweight, interpreted and versatile language, used to make web pages dynamic and interactive.",
  "skill.kotlin":
    "Kotlin is known for its concise, intuitive syntax, which makes it approachable even for beginners. Compared to Java or C++, there is far less code to write and read — less time deciphering, more time building.",
  "skill.flutter":
    "Flutter is an open-source framework built and maintained by Google. Front-end and full-stack developers use it to build an application's interface for several platforms from a single codebase.",
  "skill.swift":
    "Swift is an open-source language created by Apple in 2014. It is used to build apps for iOS, macOS, tvOS and watchOS, and it has been steadily gaining ground in the market.",
  "skill.css":
    "CSS controls everything about how the page looks: colour, spacing, typography and layout. It is also what makes a site responsive, adapting the same structure to any screen size.",
  "skill.flask":
    "Flask is a Python web microframework. It ships the essentials — routing, requests and templates — and leaves the remaining choices to the developer, which keeps it light and direct for APIs and small to mid-sized applications.",
  "skill.dart":
    "Dart is the language behind Flutter, created by Google. It compiles both to native code on mobile and to JavaScript on the web, and its strong typing catches mistakes while the code is still being written.",
  "skill.postgresql":
    "PostgreSQL is an open-source relational database, known for following the SQL standard closely and for advanced features such as JSON fields, varied index types and reliable transactions.",
  "skill.mysql":
    "MySQL is one of the most widely used relational databases in the world, common in web applications for its combination of read performance, easy setup and broad documentation.",
  "skill.sqlite":
    "SQLite is a relational database that lives in a single file, with no server to install or maintain. That makes it the default in mobile apps and the natural pick for prototypes and tests.",
  "skill.sqlalchemy":
    "SQLAlchemy is the most used ORM in Python: it lets you work with tables as if they were classes and objects, without giving up plain SQL when a query calls for it.",
  "skill.git":
    "Git is a distributed version control system. It records the project's history and lets you work on several fronts at once through branches, without one getting in the way of another.",
  "skill.docker":
    "Docker packages the application together with everything it needs to run. The container behaves the same on the development machine and on the server, which puts an end to the classic \"it works on my machine\".",
  "skill.traefik":
    "Traefik is a reverse proxy that sits in front of the containers and routes each request to the right service. It discovers new containers on its own and handles automatic renewal of HTTPS certificates.",
  "skill.letsencrypt":
    "Let's Encrypt is a free certificate authority that issues the TLS certificates behind the HTTPS padlock. The certificates last 90 days and are renewed automatically.",
  "skill.gunicorn":
    "Gunicorn is the WSGI server that runs the Python application in production. It spreads requests across several parallel worker processes, a job Flask's built-in server is not meant for outside development.",
  "skill.hostinger":
    "A VPS is a private virtual server with its own resources and root access. It is where the application actually runs: containers, reverse proxy, certificates and domain are all under my administration.",
  "skill.vercel":
    "Vercel is a deployment platform aimed at the front-end. It publishes the site on every push to the repository, spreads the files across a global CDN and handles domain and HTTPS with no manual setup.",

  // ---------------- páginas de projeto ----------------
  "projeto.verSite": "Visit site",
  "projeto.codigo": "Code",

  // ---------------- comum ----------------
  "p.agendapy.volta1": "Back to projects",
  "p.drive.volta1": "Back to projects",
  "p.gmail.volta1": "Back to projects",
  "p.industria.volta1": "Back to projects",
  "p.tortas.volta1": "Back to projects",

  // ---------------- AgendaPY ----------------
  "p.agendapy.tit2": "AgendaPY",
  "p.agendapy.h33": "Scheduling system for a beauty studio, from database to deploy",
  "p.agendapy.dt4": "The problem",
  "p.agendapy.dt5": "Back-end",
  "p.agendapy.dt6": "Schedule",
  "p.agendapy.dt7": "Digital intake form",
  "p.agendapy.dt8": "Finances",
  "p.agendapy.dt9": "Infrastructure",
  "p.agendapy.dd10":
    "The studio's schedule lived in a notebook and on WhatsApp: slots booked twice, client records lost and the month closed out on a calculator. AgendaPY brings schedule, clients, intake forms and finances into one place.",
  "p.agendapy.dd11":
    "A Flask application organised in layers &mdash; controllers, services, repositories and models &mdash; with one blueprint per domain. SQLAlchemy models clients, staff, services and appointments, and the migrations are versioned with Alembic.",
  "p.agendapy.dd12":
    "The grid opens in 15-minute blocks per professional, the calendar marks the days that already have appointments, and a taken slot stops being offered &mdash; the conflict is blocked before it becomes a record.",
  "p.agendapy.dd13":
    "The form is a public five-step questionnaire the client fills in on her own phone before the appointment. The answer lands straight in the dashboard, linked to her record.",
  "p.agendapy.dd14":
    "The month's revenue is summed from the appointments, broken down by professional and by payment method, with the total after fees.",
  "p.agendapy.dd15":
    "It comes up with Docker Compose (PostgreSQL 16 with a healthcheck and a persistent volume) and runs on Gunicorn behind ProxyFix. Session login, CSRF protection, rate limiting on login and a health check route.",
  "p.agendapy.leg16": "Login",
  "p.agendapy.leg17": "Daily schedule",
  "p.agendapy.leg18": "New appointment",
  "p.agendapy.leg19": "Clients and history",
  "p.agendapy.leg20": "Month's finances",
  "p.agendapy.leg21": "Intake form",
  "p.agendapy.leg22": "Mobile version",

  // ---------------- Drive Evidence Sync ----------------
  "p.drive.tit2": "Drive Evidence Sync",
  "p.drive.h33": "Internal routine automation &mdash; takes the copy and paste out of evidence checking",
  "p.drive.dt4": "The problem",
  "p.drive.dt5": "The key to the problem",
  "p.drive.dt6": "Writes into the spreadsheet already open",
  "p.drive.dt7": "Never overwrites what is already there",
  "p.drive.dt8": "The link has to open for whoever receives it",
  "p.drive.dt9": "Reports back what was missing",
  "p.drive.dt10": "Architecture",
  "p.drive.dt11": "A note about the images",
  "p.drive.dd12":
    "The AT dispute spreadsheet has one row per vehicle and a column that needs the link to the matching document on Drive. Filling that in means opening the folder, finding the vehicle's PDF, copying the link, going back to the right row and pasting &mdash; hundreds of times, with a wrong-row mistake always lurking.",
  "p.drive.dd13":
    'The vehicle number exists on both sides, but on Drive it sits loose in the middle of the file name, in a position and format that vary (<code>AT 907 EVALDO.pdf</code>, <code>AT NATALINO SILVA 1005.pdf</code>, <code>AT GEN.PDF carro 900</code>). A <code>re.findall(r"\\d{3,4}", nome)</code> pulls out that identifier and it becomes the key of a dictionary linking document to row.',
  "p.drive.dd14":
    "Instead of generating a new file, the script connects over Win32 COM to the running Excel instance and writes straight into the <em>Contestação ATs</em> sheet. Whoever is using the spreadsheet watches the cells fill in, with nothing to close, import or reconcile.",
  "p.drive.dd15":
    "It only writes where the evidence cell is empty. Running it twice in a row neither undoes nor duplicates anything, and any manual entry someone already made is preserved.",
  "p.drive.dd16":
    "After filling the cells, the automation goes through the files it used and sets the permission to public read. Without that step the link lands in the spreadsheet but returns access denied to whoever opens it.",
  "p.drive.dd17":
    "At the end it prints the vehicles with no document at all on Drive. That list is the result that matters: the automation handles the volume and hands back, neatly cut out, the handful of cases that still need a person.",
  "p.drive.dd18":
    "The <code>main.py</code> loads the <code>.env</code>, instantiates both infrastructures and injects them into the service. <code>EvidenceService</code> holds the rule and knows neither the Google API nor Excel's COM &mdash; each side is a swappable repository.",
  "p.drive.dd19":
    "The project has no interface and depends on Excel for Windows: the pieces alongside are diagrams of how it works and the output the script prints in the terminal.",
  "p.drive.leg20": "From file to cell",
  "p.drive.leg21": "Running in the terminal",
  "p.drive.leg22": "Project layers",

  // ---------------- Gmail Organizer ----------------
  "p.gmail.tit2": "Gmail Organizer",
  "p.gmail.h33": "Command-line automation &mdash; no interface, back-end only",
  "p.gmail.dt4": "The problem",
  "p.gmail.dt5": "How it classifies",
  "p.gmail.dt6": "Architecture",
  "p.gmail.dt7": "Authentication",
  "p.gmail.dt8": "Error handling",
  "p.gmail.dt9": "A note about the images",
  "p.gmail.dd10":
    "An inbox with job openings, invoices and bank notices all mixed together, and the sorting always left for later. The script does that separation on every run, without me opening Gmail.",
  "p.gmail.dd11":
    "Each label has a set of terms &mdash; <em>CURRICULO</em>, <em>COMPRAS</em> and <em>BANCOS</em>. The email body is scored against all of them, one occurrence is worth one point, and the highest score wins. A tie goes to the first; a score of zero leaves the email alone.",
  "p.gmail.dd12":
    "Four layers with one responsibility each: <code>main.py</code> only instantiates and injects the dependencies, the service orchestrates the flow, the classifier decides the label and the repository talks to the API. The service does not know there is a Gmail on the other side &mdash; swapping the source of the emails does not touch the rule.",
  "p.gmail.dd13":
    "OAuth 2.0 on the <code>gmail.modify</code> scope. The token is kept on disk and the consent flow only runs the first time; after that it just refreshes. Neither <code>credentials.json</code> nor the token go into the repository.",
  "p.gmail.dd14":
    "Every network failure from the API becomes a <code>ConexaoError</code> with its own message, instead of leaking Google's raw <code>HttpError</code> &mdash; the error starts saying what to do, not just what broke.",
  "p.gmail.dd15":
    "The project has no interface: the pieces alongside are diagrams of how it works and the real output the script prints in the terminal.",
  "p.gmail.leg16": "Running in the terminal",
  "p.gmail.leg17": "Project layers",
  "p.gmail.leg18": "How the label is chosen",

  // ---------------- Industria PY ----------------
  "p.industria.tit2": "Industria PY",
  "p.industria.h33": "Auto parts inventory control, entirely in the terminal",
  "p.industria.dt4": "What it is",
  "p.industria.dt5": "Permissions by role, in two layers",
  "p.industria.dt6": "Search by name, tie-break by ID",
  "p.industria.dt7": "A withdrawal never leaves stock negative",
  "p.industria.dt8": "Movement history",
  "p.industria.dt9": "Low stock alert",
  "p.industria.dt10": "Persistence",
  "p.industria.dd11":
    "An inventory system for a parts distributor: registration, stock in and out, lookup and history &mdash; with login and different permissions per role. The test database has 100 parts catalogued by type, section, compatible vehicles and manufacturer.",
  "p.industria.dd12":
    "Each role has its own dictionary of options, so the menu is born different: the manager sees six actions, the salesperson three, the stock clerk three others. Whoever cannot withdraw a part does not even see the option. On top of that every function revalidates the role from the inside &mdash; hiding the option is convenience, the check is the rule.",
  "p.industria.dd13":
    "The search matches part of the name and ignores case. When more than one part matches, the system lists the candidates and asks for the ID &mdash; instead of picking on its own and touching the wrong item.",
  "p.industria.dd14":
    "Before decreasing the quantity, the withdrawal checks there is enough on hand and refuses the operation if there is not.",
  "p.industria.dd15":
    "Every entry and withdrawal records the part, the quantity, who did it and the date and time. The full history is visible to the manager only.",
  "p.industria.dd16":
    "The parts list becomes a pandas DataFrame and a filter returns what sits below the given threshold, formatted with tabulate. It is the query that answers \\\"what do I need to buy this week\\\".",
  "p.industria.dd17":
    "Everything lives in a single JSON with three collections &mdash; parts, staff and movements &mdash; read and rewritten on each operation. No database to install: cloning and running is enough.",
  "p.industria.leg18": "One menu per role",
  "p.industria.leg19": "Low stock alert",
  "p.industria.leg20": "Movement history",

  // ---------------- Cia Das Tortas ----------------
  "p.tortas.tit2": "Cia Das Tortas",
  "p.tortas.h33": "A project I built end to end",
  "p.tortas.dt4": "Design",
  "p.tortas.dt5": "Front-end development",
  "p.tortas.dd6":
    "The site speaks to resellers, not to the end consumer. The design walks the visitor from the product to the sales contact, with social proof and a section that answers up front who the partnership is for.",
  "p.tortas.dd7":
    "A landing page in HTML, CSS and JS, with semantic markup, a focus on accessibility and light loading so no visitor is lost along the way.",
  "p.tortas.leg8": "Home screen",
  "p.tortas.leg9": "Main product",
  "p.tortas.leg10": "Target audience",
  "p.tortas.leg11": "Testimonials",
  "p.tortas.leg12": "Founders",
};
