function somar() {
  var prof = document.getElementById('nomeprof')
  var mat = document.getElementById('materia')
  var nome = document.getElementById('nomealuno')
  var tn1 = document.getElementById('txtn1')
  var tn2 = document.querySelector('#txtn2')
  var tn3 = document.getElementById('txtn3')
  var tn4 = document.querySelector('#txtn4')
  var res = document.getElementById('res')
  var n1 = (tn1.value)
  var n2 = (tn2.value)
  var n3 = (tn3.value)
  var n4 = (tn4.value)
  var soma = +n1 + +n2 + +n3 + +n4
  var nomeprof = (prof.value)
  var materia = (mat.value)
  var nomealuno = (nome.value)
  var media = soma / 4

  if(nomeprof == ""){
    alert("Preencha o Nome do Professor!")
  } else if(materia == "") {
    alert("Preencha o Nome da Matéria!")
  } else if(nomealuno == "") {
    alert("Preencha o Nome do Aluno!")
  } else if(n1 === "" || n2 === "" || n3 === "" || n4 === ""){
    alert("Insira as notas corretamente (entre 0 e 10)")
  }
  
  res.innerHTML = `A média anual foi <strong>${media}</strong>`
  final.innerHTML = `Média = <strong>${soma}</strong>`
  if (soma >= 24) {
    final.innerHTML = `<p style="color:#0000FF;">${nomealuno} está <strong>APROVADO</strong> em ${materia}!</p>`
  } else if (soma < 24) {
    final.innerHTML = `<p style="color:#FF0000;">${nomealuno} está <strong>REPROVADO</strong> em ${materia}!</p>`
  } 
  
}
