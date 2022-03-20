function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var sauda = document.getElementById('saudacao')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  //var hora = 19
  msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
  if (hora >= 0 && hora < 12) {
    img.src = './img/manha.png'
    document.body.style.background = '#FCB333'
    sauda.innerHTML = `Bom dia!`
  } else if (hora >= 12 && hora <= 18) {
    img.src = './img/tarde.png'
    document.body.style.background = '#D89B7F'
    sauda.innerHTML = `Boa tarde!`
  } else {
    img.src = './img/noite.png'
    document.body.style.background = '#193954'
    sauda.innerHTML = `Boa noite!`
  }
}
