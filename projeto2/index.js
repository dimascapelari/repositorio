function somar() {
  var tn1 = document.getElementById('txtn1')
  var tn2 = document.querySelector('#txtn2')
  var tn3 = document.getElementById('txtn3')
  var tn4 = document.querySelector('#txtn4')
  var res = document.getElementById('res')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var n3 = Number(tn3.value)
  var n4 = Number(tn4.value)
  var soma = n1 + n2 + n3 + n4
  
  res.innerHTML = `A média anual foi igual a <strong>${soma}</strong>`
  final.innerHTML = `Média = <strong>${soma}</strong>`
  if (soma >= 20) {
    final.innerHTML = `<p style="color:#0000FF;">Você está <strong>APROVADO</strong>!</p>`
  } else if (soma < 20) {
    final.innerHTML = `<p style="color:#FF0000;">Você está <strong>REPROVADO!</p>`
  }
  
}