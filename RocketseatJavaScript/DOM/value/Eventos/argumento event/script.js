// Eventos
// argumento event

const input = document.querySelector('input')

input.onkeyup = function (event) {
    console.log(event.currentTarget.value)
}