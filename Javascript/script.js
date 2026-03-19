import initHeader from './modules/header.js';
import initCarrossel from './modules/carrossel.js';
import initModalProjetos from './modules/modalProjetos.js';
import initTagHover from './modules/tagHover.js';
import initSkills from './modules/skills.js';
import initTime from './modules/time.js';
import initMobileMenu from './modules/mobileMenu.js';
import initTabletCard from './modules/tabletCard.js';
import initScrollSpy from './modules/scrollSpy.js';

initHeader();
initCarrossel();
initModalProjetos();
initTagHover();
initSkills();
initTime();
initMobileMenu();
initTabletCard();
document.addEventListener("DOMContentLoaded", initScrollSpy);
