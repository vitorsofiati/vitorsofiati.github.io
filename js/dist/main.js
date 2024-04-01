/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animacao-scroll.js":
/*!***************************************!*\
  !*** ./js/modules/animacao-scroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimarAoScroll)\n/* harmony export */ });\nfunction initAnimarAoScroll() {}\r\nconst elementosAnimados = document.querySelectorAll('.js-anima');\r\nconst janelaParcialAnimacao = window.innerHeight * 0.85;\r\nconst formacaoSubtitulo = document.querySelector('.formacao-subtitulo');\r\n\r\nconst animarAoScroll = () => {\r\n\telementosAnimados.forEach((elemento) => {\r\n\t\tconst elementoTop = elemento.getBoundingClientRect().top;\r\n\t\tconst elementoBottom = elemento.getBoundingClientRect().bottom;\r\n\t\tconst elementoVisivel =\r\n\t\t\tjanelaParcialAnimacao - elementoTop > 0 && elementoBottom > 80;\r\n\t\tif (elementoVisivel) {\r\n\t\t\telemento.classList.add('anime');\r\n\t\t\telemento.classList.remove('anime-off');\r\n\t\t} else {\r\n\t\t\telemento.classList.remove('anime');\r\n\t\t\telemento.classList.add('anime-off');\r\n\t\t}\r\n\t});\r\n};\r\n\r\nif (elementosAnimados.length) {\r\n\twindow.addEventListener('scroll', animarAoScroll);\r\n}\r\n\r\n// Para telas menores que 600, quero mudar algumas animações\r\nconst mediaQuery600 = window.matchMedia('(max-width: 600px)');\r\n\r\nconst tamanhoDaTela = () => {\r\n\tif (mediaQuery600.matches) {\r\n\t\tconsole.log(formacaoSubtitulo);\r\n\t\tformacaoSubtitulo.classList.replace('fadeInDown', 'fadeInRight');\r\n\t} else {\r\n\t\tformacaoSubtitulo.classList.replace('fadeInRight', 'fadeInDown');\r\n\t}\r\n};\r\ntamanhoDaTela();\r\n\r\nmediaQuery600.addEventListener('change', tamanhoDaTela);\r\n\n\n//# sourceURL=webpack://vitorsofiati.github.io/./js/modules/animacao-scroll.js?");

/***/ }),

/***/ "./js/modules/nav-highlight.js":
/*!*************************************!*\
  !*** ./js/modules/nav-highlight.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNavHighlight)\n/* harmony export */ });\nfunction initNavHighlight() {}\r\n\r\nconst contatoSection = document.querySelector('#contato');\r\nconst sections = document.querySelectorAll('section');\r\nconst janelaParcialSections = window.innerHeight * 0.49;\r\n\r\nconst navHighlight = () => {\r\n\tconst contatoBottom = contatoSection.getBoundingClientRect().bottom;\r\n\tconst contatoVisivel = window.innerHeight * 1.01 - contatoBottom > 0;\r\n\tconst contatoLi = document.querySelector('a[href=\"#contato\"]').parentElement;\r\n\r\n\tsections.forEach((section) => {\r\n\t\tconst sectionTop = section.getBoundingClientRect().top;\r\n\t\tconst sectionBottom = section.getBoundingClientRect().bottom;\r\n\t\tconst sectionVisivel =\r\n\t\t\tjanelaParcialSections - sectionTop > 0 &&\r\n\t\t\tjanelaParcialSections - sectionBottom < 0;\r\n\t\tif (sectionVisivel && contatoVisivel) {\r\n\t\t\tconst sectionId = section.getAttribute('id');\r\n\t\t\tconst liPai = document.querySelector(\r\n\t\t\t\t`a[href=\"#${sectionId}\"]`\r\n\t\t\t).parentElement;\r\n\r\n\t\t\tif (liPai) {\r\n\t\t\t\tliPai.classList.remove('ativo');\r\n\t\t\t\tcontatoLi.classList.add('ativo');\r\n\t\t\t}\r\n\t\t} else if (sectionVisivel) {\r\n\t\t\tconst sectionId = section.getAttribute('id');\r\n\t\t\tconst liPai = document.querySelector(\r\n\t\t\t\t`a[href=\"#${sectionId}\"]`\r\n\t\t\t).parentElement;\r\n\r\n\t\t\tif (liPai) {\r\n\t\t\t\tliPai.classList.add('ativo');\r\n\t\t\t\tcontatoLi.classList.remove('ativo');\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tconst sectionId = section.getAttribute('id');\r\n\t\t\tconst liPai = document.querySelector(\r\n\t\t\t\t`a[href=\"#${sectionId}\"]`\r\n\t\t\t).parentElement;\r\n\r\n\t\t\tif (liPai) {\r\n\t\t\t\tliPai.classList.remove('ativo');\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n};\r\nnavHighlight();\r\nwindow.addEventListener('scroll', navHighlight);\r\n\n\n//# sourceURL=webpack://vitorsofiati.github.io/./js/modules/nav-highlight.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_nav_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav-highlight.js */ \"./js/modules/nav-highlight.js\");\n/* harmony import */ var _modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animacao-scroll.js */ \"./js/modules/animacao-scroll.js\");\n\r\n\r\n\r\n(0,_modules_nav_highlight_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// Prevenir bugs caso o JS não carregar.\r\ndocument.documentElement.classList.add('js');\r\n\n\n//# sourceURL=webpack://vitorsofiati.github.io/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;