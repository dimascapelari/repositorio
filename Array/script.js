let array = ['Dimas', 'Mariana', 'Maria Luiza', 'Maggie']

let remover = 'Maggie'
function delArray() {
    let indice = array.indexOf(remover)
    let removeu = array.splice(indice, 1)

    if (removeu != remover) {
        console.log('Cliente não encontrado!')
    } else {
        console.log('Cliente removido!')
    }

}
delArray()

let adicionar = 'Teste'
function addArray() {
    array.push(adicionar)
    console.log(array)
}
addArray()

