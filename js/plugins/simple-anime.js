// fiz uma alteração no plugin para não adicionar a classe anime (que é a principal para animar via css)

window.SimpleAnime = class { constructor() { this.items = document.querySelectorAll("[data-anime]"), this.init() } animateItems() { this.items.forEach(t => { const e = Number(t.getAttribute("data-anime")); isNaN(e) || setTimeout(() => e) }) } handleVisibility() { void 0 !== document.visibilityState ? "visible" === document.visibilityState && this.animateItems() : this.animateItems() } init() { this.handleVisibility = this.handleVisibility.bind(this), this.handleVisibility(), document.addEventListener("visibilitychange", this.handleVisibility) } }