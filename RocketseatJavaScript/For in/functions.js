// for...in

let person = {
    name: 'Dimas',
    age: 39,
    weight: 92.5
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}