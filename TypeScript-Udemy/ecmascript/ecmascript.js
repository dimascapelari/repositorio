"use strict";
// let & const
// console.log(seraQuePode)
// var seraQuePode = '?' // hoisting
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrioVar = true;
if (estaFrioVar) {
    var acaoVar = 'Colocar o casaco!';
}
console.log(acaoVar);
// let estaFrioLet = true
// if (estaFrioLet) {
//     let acaoLet = 'Colocar o casaco!'
// }
// console.log(acaoLet)
const cpf = '123.456.000-99';
// cpf = "789.101.132-78"
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
    console.log(def);
}
console.log(def);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
//# sourceMappingURL=ecmascript.js.map