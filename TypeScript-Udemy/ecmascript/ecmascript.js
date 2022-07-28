"use strict";
// let & const
// console.log(seraQuePode)
// var seraQuePode = '?' // hoisting
let seraQuePode = '?';
console.log(seraQuePode);
// let estaFrioVar = true
// if (estaFrioVar) {
//     var acaoVar = 'Colocar o casaco!'
// }
// console.log(acaoVar)
let estaFrioLet = true;
if (estaFrioLet) {
    let acaoLet = 'Colocar o casaco!';
    console.log(acaoLet);
}
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
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá!');
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('Dimas');
// // this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind(2)
// normalComThisEspecial()
// // this???
// const arrowComThis = () => console.log(this)
// arrowComThis()
/*
// Parâmetro padrão
function contagemRegressiva(inicio: number = 3): void {
    console.log(inicio)
    while (inicio > 0) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}
contagemRegressiva()
contagemRegressiva(5)
*/
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
// console.log(...turmaA, ...turmaB)
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    //console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
//# sourceMappingURL=ecmascript.js.map