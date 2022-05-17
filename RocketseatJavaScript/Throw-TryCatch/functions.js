// throw
function sayMyName(name = '') {
    if (name === '') {
        //throw new Error("Nome é necessário")
        throw "Nome é necessário"
    }

    console.log(name)
}

// try...catch
try {
    sayMyName('Dimas')
} catch (e) {
    console.log(e)
}

console.log('após ao try/cat')