/* Manipulando Strings e Arrays

   Separe um texto que contem espaços, em um novo array
   onde cada texto é uma posição do array. Depois disso,
   transforme o array em um texto e onde eram espaços
   coloque _ */

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
//let myArray = phrase.split("o")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)


//transformou de string para array através do split
//transformou de array para string através do join