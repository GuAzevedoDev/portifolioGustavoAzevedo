import { initMenu } from './header/menu.js';
import { initNavegacaoAtual } from './header/navegacao-atual.js';
import { initIdioma } from './idioma/idioma.js';
import { initCubo } from './main/cubo.js';
import initTagHover from './sobreMim/initTagHover.js';
import initCategorias from './tecnologias/initCategorias.js';
import initSkills from './tecnologias/initSkills.js';
import initTabletCard from './tecnologias/initTabletCard.js';
import initTime from './tecnologias/initTime.js';

initMenu();
initNavegacaoAtual();
initIdioma();
initCubo();
initTagHover();
initCategorias();
initSkills();
initTabletCard();
initTime();

// Ano do rodapé: evita que o crédito envelheça sozinho
const anoAtual = document.getElementById('ano-atual');
if (anoAtual) anoAtual.textContent = new Date().getFullYear();
