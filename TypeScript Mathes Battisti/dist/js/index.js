"use strict";
// string, boolean, number, ...
let x = 10;
x = 12;
console.log(x);
// inferencia x anotation
let y = 12;
// y = 'teste'
let z = 12;
// tipos básicos
let firtName = 'Dimas';
let age = 40;
const isAdmin = true;
// String != string
console.log(typeof firtName);
firtName = 'Dimas Capelari';
console.log(firtName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase())
console.log(firtName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
//myTuple = [true, false, true]
// object literals -> {prop: value}
const user = {
    name: 'Dimas',
    age: 40
};
console.log(user);
console.log(user.name);
//user.job = 'Programador'
// any
let a = 0;
a = 'teste';
a = true;
a = [];
// union type
let id = 'Dimas';
id = 20;
const userId = 10;
const productId = '00001';
const shirId = 123;
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa gola V',
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
//teste = 'outrovalor'
teste = 'autenticado';
teste = null;
// Funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
//console.log(sum('12', true))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Dimas'));
function logger(msg) {
    console.log(msg);
}
logger('Teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting('Dimas');
greeting('Dimas', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem de tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// Generics
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItens(a1);
showArrayItens(a2);
