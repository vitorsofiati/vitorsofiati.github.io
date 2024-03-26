export default function initAnimarAoScroll() {}
const elementosAnimados = document.querySelectorAll('.js-anima');
const janelaParcialAnimacao = window.innerHeight * 0.85;
const formacaoSubtitulo = document.querySelector('.formacao-subtitulo');

const animarAoScroll = () => {
	elementosAnimados.forEach((elemento) => {
		const elementoTop = elemento.getBoundingClientRect().top;
		const elementoBottom = elemento.getBoundingClientRect().bottom;
		const elementoVisivel =
			janelaParcialAnimacao - elementoTop > 0 && elementoBottom > 80;
		if (elementoVisivel) {
			elemento.classList.add('anime');
			elemento.classList.remove('anime-off');
		} else {
			elemento.classList.remove('anime');
			elemento.classList.add('anime-off');
		}
	});
};

if (elementosAnimados.length) {
	window.addEventListener('scroll', animarAoScroll);
}

// Para telas menores que 600, quero mudar algumas animações
const mediaQuery600 = window.matchMedia('(max-width: 600px)');

const tamanhoDaTela = () => {
	if (mediaQuery600.matches) {
		console.log(formacaoSubtitulo);
		formacaoSubtitulo.classList.replace('fadeInDown', 'fadeInRight');
	} else {
		formacaoSubtitulo.classList.replace('fadeInRight', 'fadeInDown');
	}
};
tamanhoDaTela();

mediaQuery600.addEventListener('change', tamanhoDaTela);
