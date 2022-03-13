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
  var elementoFilmeFavorito = `<img src= ${filmeFavorito}>`;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


let del = document.getElementById('listaFilmes')
del.addEventListener('click', clicar)


function clicar() {
  
 del.innerText = ''
  
}

//<img src="imagem.gif" onclick="this.parentNode.removeChild(this)"></img>