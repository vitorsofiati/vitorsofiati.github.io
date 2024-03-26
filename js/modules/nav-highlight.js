export default function initNavHighlight() {}

const contatoSection = document.querySelector('#contato');
const sections = document.querySelectorAll('section');
const janelaParcialSections = window.innerHeight * 0.49;

const navHighlight = () => {
	const contatoBottom = contatoSection.getBoundingClientRect().bottom;
	const contatoVisivel = window.innerHeight * 1.01 - contatoBottom > 0;
	const contatoLi = document.querySelector('a[href="#contato"]').parentElement;

	sections.forEach((section) => {
		const sectionTop = section.getBoundingClientRect().top;
		const sectionBottom = section.getBoundingClientRect().bottom;
		const sectionVisivel =
			janelaParcialSections - sectionTop > 0 &&
			janelaParcialSections - sectionBottom < 0;
		if (sectionVisivel && contatoVisivel) {
			const sectionId = section.getAttribute('id');
			const liPai = document.querySelector(
				`a[href="#${sectionId}"]`
			).parentElement;

			if (liPai) {
				liPai.classList.remove('ativo');
				contatoLi.classList.add('ativo');
			}
		} else if (sectionVisivel) {
			const sectionId = section.getAttribute('id');
			const liPai = document.querySelector(
				`a[href="#${sectionId}"]`
			).parentElement;

			if (liPai) {
				liPai.classList.add('ativo');
				contatoLi.classList.remove('ativo');
			}
		} else {
			const sectionId = section.getAttribute('id');
			const liPai = document.querySelector(
				`a[href="#${sectionId}"]`
			).parentElement;

			if (liPai) {
				liPai.classList.remove('ativo');
			}
		}
	});
};
navHighlight();
window.addEventListener('scroll', navHighlight);
