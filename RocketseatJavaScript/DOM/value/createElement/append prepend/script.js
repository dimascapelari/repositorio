// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = 'Olá Devs!'

// append prepend
const body = document.querySelector('body')
//body.append(div)
body.prepend(div)


// append cria o elemento em último lugar
// prepend cria o elemento em primeiro lugar