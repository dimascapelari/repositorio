
//let dolar = 5.3
//let euro = 6
let botao = document.getElementById("botao")
let select = document.getElementById("select-modedas")

// await fica aguardando carregar informação do servidor e é preciso colocar async na function = função Assíncrona para esperar responder.
// .then espera retornar do servidor para seguir a função.
async function converterMoedas() {

  let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (respota) {
    return respota.json()
  })

  let dolar = moedas.USDBRL.high
  let euro = moedas.EURBRL.high
  //console.log(dolar)
  //console.log(euro)

  let inputValorEmReais = Number(document.getElementById("input").value)
  let inputMoedas = document.getElementById("input-moedas")
  let textoReal = document.getElementById("texto-real")

  if (select.value === "US$ Dólar Americano") {
    let valorEmDolares = inputValorEmReais / dolar
    inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }

  if (select.value === "€ Euro") {
    let valorEmEuros = inputValorEmReais / euro
    inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
  }

  textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// Essa função troca as bandeiras e nome das moedas
function trocaDeMoeda() {
  let textoMoedas = document.getElementById("texto-moedas")
  let bandeiraMoedas = document.getElementById("bandeira-moedas")

  if (select.value === "US$ Dólar Americano") {
    textoMoedas.innerHTML = "Dólar Americano"
    bandeiraMoedas.src = "./img/eua.png"
  }
  if (select.value === "€ Euro") {
    textoMoedas.innerHTML = "Euro"
    bandeiraMoedas.src = "./img/euro.png"
  }
  converterMoedas()
}

botao.addEventListener("click", converterMoedas)// click fica escutando o olick do botao
select.addEventListener("change", trocaDeMoeda)// change = é quando seleciona o item no input  



// console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))