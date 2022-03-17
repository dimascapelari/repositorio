

let dolar = 5.3
let euro = 6
let botao = document.getElementById("botao")
let select = document.getElementById("select-modedas")



function converterMoedas(){
  let inputValorEmReais = Number(document.getElementById("input").value)
  let inputMoedas = document.getElementById("input-moedas")
  let inputReal = document.getElementById("input-real")

  let valorEmDolares = inputValorEmReais / dolar
  
  inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
  inputReal.innerHTML = inputValorEmReais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  
}

function trocaDeMoeda(){
  console.log('Trocou a moeda')
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)



// console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))