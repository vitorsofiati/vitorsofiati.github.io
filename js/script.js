document.documentElement.classList.add("js");

const formacaoSubtitulo = document.querySelector(".formacao-subtitulo");
const projetosSubtitulo = document.querySelector(".projetos-subtitulo");

// executar plugin de animação 
new SimpleAnime();


// a classe anime era atribuída logo no início pelo plugin SimpleAnime, removi essa parte no arquivo do plugin.
function animarFormacao() {
  let posicaoFormacao = formacaoSubtitulo.getBoundingClientRect().top;
  if (posicaoFormacao < 600) {
    formacaoSubtitulo.classList.add("anime");
    window.removeEventListener("scroll", animarFormacao);
  }
}

function animarProjetos() {
  let posicaoProjetos = projetosSubtitulo.getBoundingClientRect().top;
  if (posicaoProjetos <= 700) {
    projetosSubtitulo.classList.add("anime");
    window.removeEventListener("scroll", animarProjetos);
  }
}

window.addEventListener("scroll", animarFormacao);
window.addEventListener("scroll", animarProjetos);
