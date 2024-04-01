// Redireciona o usuário para a página específica baseado na linguagem do navegador

const idiomaUsuario = navigator.language;
if (idiomaUsuario == 'pt-BR' || idiomaUsuario == 'pt') {
	window.document.location.href = './home-pt.html';
} else {
	window.document.location.href = './home-en.html';
}
