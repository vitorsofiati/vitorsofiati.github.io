import initNavHighlight from './modules/nav-highlight.js';
import initAnimarAoScroll from './modules/animacao-scroll.js';

initNavHighlight();
initAnimarAoScroll();

// Prevenir bugs caso o JS não carregar.
document.documentElement.classList.add('js');
