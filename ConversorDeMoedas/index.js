

let dolar = 5.3
let botao = document.getElementById("botao")




function converterMoedas(){
  let inputValorEmReais = Number(document.getElementById("input").value)
  let inputMoedas = document.getElementById("input-moedas")
  let inputReal = document.getElementById("input-real")

  let valorEmDolares = inputValorEmReais / dolar
  
  inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
  inputReal.innerHTML = inputValorEmReais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  
}

botao.addEventListener("click", converterMoedas)



// console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))