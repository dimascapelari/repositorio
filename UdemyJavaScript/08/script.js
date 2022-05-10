var p = document.createElement("p")
var p1 = document.createElement("p")
var idMensagem = document.getElementById("mensagem")

p.innerHTML = "Olá, vamos estudar JavaScript?"
p1.innerHTML = "Oi, eu sou o segundo elemento"
idMensagem.appendChild(p)
idMensagem.appendChild(p1)