function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Coloque um endereço de imagem com extenção .jpg !")
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
