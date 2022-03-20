function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  //var hora = 11
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    img.src = './img/manha.png'
    document.body.style.background = '#FCB333'
  } else if (hora >= 12 && hora <= 18) {
    img.src = './img/tarde.png'
    document.body.style.background = '#D89B7F'
  } else {
    img.src = './img/noite.png'
    document.body.style.background = '#193954'
  }
}
