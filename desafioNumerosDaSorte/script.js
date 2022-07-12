let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')
//const apiURL = `https://apilotofacil.herokuapp.com/?q_combinacoes=10&q_dezenas=15`

let api = "https://apilotofacil.herokuapp.com/?q_combinacoes=1&q_dezenas=6"

let apiDimas = "http://localhost:3000/produtos"

let apimoeda = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"



// const URL_TO_FETCH = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL';
// fetch(URL_TO_FETCH, {
//     method: 'get' // opcional
// })
//     .then(function (response) {
//         response.text()
//             .then(function (result) {
//                 console.log(result);
//             })
//     })
//     .catch(function (err) {
//         console.error(err);
//     });


function sorte() {

    fetch(api)
        .then(function (response) {
            response.body.getReader().read()
                .then(function (data) {
                    // transformando em string, para visualizarmos melhor
                    let fetched = String.fromCharCode.apply(null, data.value);
                    console.log(fetched);
                    resultado.innerHTML = ` ${fetched} Resultado: Olá Mundo`
                });
        })
        .catch(function (err) {
            console.error('Failed retrieving information', err);
        });
}

btn.addEventListener('click', sorte)





