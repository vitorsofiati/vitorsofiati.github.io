import debounce from './debounce.js';

export class Slide {
	constructor(slide, wrapper) {
		this.slide = document.querySelector(slide);
		this.wrapper = document.querySelector(wrapper);
		this.dist = { finalPosition: 0, startX: 0, movement: 0, movePosition: 0 };
		this.activeClass = 'ativo';

		this.changeEvent = new Event('changeEvent');
	}

	reset() {
		this.dist.movement = 0;
	}

	transition(active) {
		this.slide.style.transition = active ? 'transform .3s' : '';
	}

	moveSlide(distX) {
		this.dist.movePosition = distX;
		this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
	}

	updatePosition(clientX) {
		// Multiplicando o movimento por 1.4 para acelerar o slide
		this.dist.movement = (this.dist.startX - clientX) * 1.4;
		return this.dist.finalPosition - this.dist.movement;
	}

	onStart(event) {
		// Zerar o parâmetro de distância pra quando ocorrer um click solo ele não mudar o slide.
		this.dist.movement = 0;
		let movetype;
		if (event.type === 'mousedown') {
			event.preventDefault();
			this.dist.startX = event.clientX;
			movetype = 'mousemove';
		} else {
			this.dist.startX = event.changedTouches[0].clientX;
			movetype = 'touchmove';
		}
		this.wrapper.addEventListener(movetype, this.onMove);
		this.transition(false);
	}

	onMove(event) {
		const pointerPosition =
			event.type === 'mousemove'
				? event.clientX
				: event.changedTouches[0].clientX;
		let finalPosition = this.updatePosition(pointerPosition);
		this.moveSlide(finalPosition);
	}

	onEnd(event) {
		const movetype = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
		this.wrapper.removeEventListener(movetype, this.onMove);
		this.dist.finalPosition = this.dist.movePosition;
		this.transition(true);
		this.changeSlideOnEnd();
	}

	changeSlideOnEnd() {
		if (this.dist.movement > 180 && this.index.next !== undefined) {
			this.activeNextSlide();
		} else if (this.dist.movement < -120 && this.index.prev !== undefined) {
			this.activePrevSlide();
		} else {
			this.changeSlide(this.index.active);
		}
	}

	addSlideEvents() {
		this.wrapper.addEventListener('mousedown', this.onStart);
		this.wrapper.addEventListener('touchstart', this.onStart);
		this.wrapper.addEventListener('mouseup', this.onEnd);
		this.wrapper.addEventListener('touchend', this.onEnd);
	}

	// Abaixo = Configurações dos slides

	slidePosition(slide) {
		const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
		return -(slide.offsetLeft - margin);
	}

	slidesConfig() {
		// cria uma array com os elementos filhos de slide (ul) e mapeando para retornar objetos nessa array.
		this.slideArray = [...this.slide.children].map((element) => {
			const position = this.slidePosition(element);
			return { position, element };
		});
	}

	slidesIndexNav(index) {
		const last = this.slideArray.length - 1;
		this.index = {
			prev: index ? index - 1 : undefined,
			active: index,
			next: index === last ? undefined : index + 1,
		};
	}

	changeSlide(index) {
		const activeSlide = this.slideArray[index];
		this.moveSlide(activeSlide.position);
		this.slidesIndexNav(index);
		this.dist.finalPosition = activeSlide.position;
		this.changeActiveClass();
		// adiciona uma emissão de evento ao wrapper
		this.wrapper.dispatchEvent(this.changeEvent);
	}

	changeActiveClass() {
		this.slideArray.forEach((item) =>
			item.element.classList.remove(this.activeClass)
		);

		this.slideArray[this.index.active].element.classList.add(this.activeClass);
	}

	activePrevSlide() {
		if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
	}

	activeNextSlide() {
		if (this.index.next !== undefined) this.changeSlide(this.index.next);
	}

	// recalcular as distâncias dos elementos (atraves do slidesConfig) e reposicioná-los (atraves do changeSlide) sempre que houver mudança na resolução.
	onResize() {
		setTimeout(() => {
			this.slidesConfig();
			this.changeSlide(this.index.active);
		}, 600);
	}

	addResizeEvent() {
		window.addEventListener('resize', this.onResize);
	}

	bindEvents() {
		this.onStart = this.onStart.bind(this);
		this.onMove = this.onMove.bind(this);
		this.onEnd = this.onEnd.bind(this);

		this.activePrevSlide = this.activePrevSlide.bind(this);
		this.activeNextSlide = this.activeNextSlide.bind(this);

		this.onResize = debounce(this.onResize.bind(this), 200);
	}

	init() {
		this.bindEvents();
		this.transition(true);
		this.slidesConfig();
		this.addSlideEvents();
		this.addResizeEvent();
		// ativação inicial de changeSlide para definir e calcular next, prev, etc
		this.changeSlide(0);
		return this;
	}
}

export default class SlideNav extends Slide {
	constructor(slide, wrapper) {
		// em uma classe extendida, preciso do super para  herdar tudo do construtor pai
		super(slide, wrapper);
		this.bindControlEvents();
	}

	addArrow(prev, next) {
		this.prevElement = document.querySelector(prev);
		this.nextElement = document.querySelector(next);
		this.addArrowEvent();
	}

	addArrowEvent() {
		this.prevElement.addEventListener('click', this.activePrevSlide);
		this.nextElement.addEventListener('click', this.activeNextSlide);
	}

	createControl() {
		const control = document.createElement('ul');
		control.dataset.control = 'slide';

		this.slideArray.forEach((item, index) => {
			control.innerHTML += `<li><a href ="#slide${index + 1}">${
				index + 1
			}</a></li>`;
		});
		this.wrapper.appendChild(control);

		return control;
	}

	eventControl(item, index) {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			this.changeSlide(index);
		});
		this.wrapper.addEventListener('changeEvent', this.activeControlItem);
	}

	activeControlItem() {
		this.controlArray.forEach((item) =>
			item.classList.remove(this.activeClass)
		);

		this.controlArray[this.index.active].classList.add(this.activeClass);
	}

	// Cria um controle de navegação.
	addControl(customControl) {
		this.control =
			document.querySelector(customControl) || this.createControl();
		this.controlArray = [...this.control.children];
		// o THIS de eventControl (quando está dentro do callback dos items de controlArray, vai ter a referência de THIS como os próprios items, não mais a classe. preciso dar BIND)
		this.controlArray.forEach(this.eventControl);
		this.activeControlItem();
	}

	bindControlEvents() {
		this.eventControl = this.eventControl.bind(this);
		this.activeControlItem = this.activeControlItem.bind(this);
	}
}
