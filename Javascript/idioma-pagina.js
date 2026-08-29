// As páginas internas de projeto não têm carrossel, tablet nem cubo — só
// precisam do seletor de idioma. Carregar o script.js inteiro aqui puxaria
// dez módulos que sairiam por early return.
import { initIdioma } from "./idioma/idioma.js";

initIdioma();
