import initNavHighlight from './modules/nav-highlight.js';
import initAnimarAoScroll from './modules/animacao-scroll.js';
import SlideNav from './modules/slide.js';

initNavHighlight();
initAnimarAoScroll();

const projetosSlide = new SlideNav('.projetos-slide', '.projetos-wrapper');
projetosSlide.init();
projetosSlide.addControl();
projetosSlide.addArrow('.prev', '.next');

// Prevenir bugs caso o JS não carregar.
document.documentElement.classList.add('js');
