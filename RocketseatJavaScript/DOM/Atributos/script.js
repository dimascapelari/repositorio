// Manipulando conteúdo

// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'nome')

const headerID = document.querySelector('#nome')

console.log(headerID)
console.log(headerID.getAttribute('id'))

//header.removeAttribute('id')

//header.setAttribute('class', 'bg header')