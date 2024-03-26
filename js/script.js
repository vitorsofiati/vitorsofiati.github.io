document.documentElement.classList.add('js');
new SimpleAnime();

function initEventosScroll() {
	const elementosAnimados = document.querySelectorAll('.js-anima');
	const linksInternos = document.querySelectorAll('nav a[href^="#"]');
	const sections = document.querySelectorAll('section');

	if (sections.length) {
		const janelaParcialNav = window.innerHeight * 0.49;

		function navHighlight() {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;
				const sectionBottom = section.getBoundingClientRect().bottom;
				const sectionVisivel =
					janelaParcialNav - sectionTop > 0 &&
					janelaParcialNav - sectionBottom < 0;

				if (sectionVisivel) {
					const sectionId = section.getAttribute('id');
					const linkAtivo = document.querySelector(`a[href="#${sectionId}"]`);
					const liPai = linkAtivo.parentElement;

					if (linkAtivo) {
						linkAtivo.classList.add('ativo');
						liPai.classList.add('ativo');
					}
				} else {
					const sectionId = section.getAttribute('id');
					const linkAtivo = document.querySelector(`a[href="#${sectionId}"]`);
					const liPai = linkAtivo.parentElement;

					if (linkAtivo) {
						linkAtivo.classList.remove('ativo');
						liPai.classList.remove('ativo');
					}
				}
			});
		}
	}

	navHighlight();
	window.addEventListener('scroll', navHighlight);

	if (elementosAnimados.length) {
		const janelaParcialAnimacao = window.innerHeight * 0.8;

		let jaForamAnimados = 0;

		function animarElementos() {
			elementosAnimados.forEach((elemento) => {
				const elementoTop = elemento.getBoundingClientRect().top;
				const elementoVisivel = janelaParcialAnimacao - elementoTop > 0;

				if (elementoVisivel && !elemento.classList.contains('anime')) {
					elemento.classList.add('anime');
					jaForamAnimados++;
				}
			});

			if (jaForamAnimados === elementosAnimados.length) {
				window.removeEventListener('scroll', animarElementos);
			}
		}
		window.addEventListener('scroll', animarElementos);
	}
}
initEventosScroll();
