// Alterando estilos
const elemento = document.querySelector('body')


// adiciona classes
elemento.classList.add('active', 'green')
console.log(elemento.classList)

// remove classe
elemento.classList.remove('active')

// se tem a classe ele tira e se não tem ele coloca
elemento.classList.toggle('active')