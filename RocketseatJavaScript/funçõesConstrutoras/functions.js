/*  Function() constructor

   * expressão new
   * criar um novo objeto
   * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + ' andando'
    }
}

const dimas = new Person('Dimas')
const joao = new Person('João')

console.log(dimas.walk())
console.log(joao.walk())