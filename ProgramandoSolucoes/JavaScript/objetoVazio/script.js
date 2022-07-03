
// let obj = {}
// function objetoVazio(obj) {
//     for (var prop in obj) {
//         if (obj.hasOwnProperty(prop)) return false
//     }
//     return true
// }
// console.log(objetoVazio(obj))



// let obj = {}
// let verificaVazio = Object.keys(obj).length === 0
// console.log(verificaVazio)


let obj = {}
function objetoVazio(obj) {
    return JSON.stringify(obj) === "{}"
}
console.log(objetoVazio(obj))