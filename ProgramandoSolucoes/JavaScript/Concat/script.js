
// Juntar duas strings
// let string1 = " texto 1"
// let string2 = " texto 2"
// let valor = string1.concat(string2)
// console.log(valor)

// let testeDimas = string2.concat(" * ", string1, " * ", string2, " * ", string1, " * ", " Dimas", " * ", string2)
// console.log(testeDimas)


// Método mais correto de se usar seria dessa forma
// let string1 = " texto 1"
// let string2 = " texto 2"
// let valor = `${string1} ${string2}`
// console.log(valor)



// Juntar Arrays
// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// let valor = array1.concat(array2)
// console.log(valor)


// Clonar Array para outro Array
let array = ['a', 'b', 'c']
let cloneArray = array.concat()

array.push('d')
cloneArray.push('e')

console.log('array', array)
console.log('cloneArray', cloneArray)