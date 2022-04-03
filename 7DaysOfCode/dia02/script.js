var resul = document.getElementById('resul')

function resultado() {
  var nome = (prompt('Qual o seu nome?', ''))
  var ano = Number(prompt('Quantos anos você tem?', ''))
  var ling = (prompt('Qual linguagem de programação você está estudando?', ''))
  resul.innerHTML = `Olá ${nome}, você tem ${ano} anos e já está aprendendo ${ling}!`
  resul.style.textAlign = 'center'
  resul.style.marginTop = '300px'
}

resultado()