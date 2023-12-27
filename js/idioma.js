// Redireciona o usuário para a página específica baseado na linguagem do navegador

const idiomaUsuario = navigator.language;
if (idiomaUsuario == "pt-BR"||"pt") {

  window.document.location.href = "./portugues/home-pt.html";
} else {
  window.document.location.href = "./ingles/home-en.html";
}



