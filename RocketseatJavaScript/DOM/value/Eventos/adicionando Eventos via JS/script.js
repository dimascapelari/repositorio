// Eventos

// Primeira maneira
/* 
const h1 = document.querySelector('h1')

//h1.addEventListener('click', print)
h1.addEventListener('mouseover', print)

function print() {
    console.log('print')
}  */

// segunda maneira

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    console.log('print')
}


h1.addEventListener('click', function () {
    console.log('outro momento')
})
