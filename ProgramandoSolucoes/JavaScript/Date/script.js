// -------- formatar data padrão brasileiro -------- 

// let data = new Date()
// //console.log(data)
// function formatarData(data) {
//     let newDate = new Date(data)
//     return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
// }
// console.log(formatarData(data))





//  -------- calcular a diferença de dias entre datas -------- 

// let data = new Date()
function formatarData(data) {
    let newDate = new Date(data)
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
}
// console.log(formatarData(data))

// let diaAtual = new Date()
// let dataPassada = new Date(2022, 06, 01)

// // abs retorna número absoluto (sempre valor positivo)
// let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime())

// // ceil arredonda o número que der no resultado
// let diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24))
// // 1000 seria milessegundos / segundos / minutos / horas

// console.log(`A diferença de dias é ${diasDeDiferenca}`)


// -------- Somar dias a uma data --------
// let data = new Date()
// let quantidadeDeDias = 10
// data.setDate(data.getDate() + quantidadeDeDias)
// console.log(formatarData(data))



// -------- Como pegar primeiro e último dia do mês --------
let data = new Date()
let primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1)
let ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0)
console.log(primeiroDia, ultimoDia)
console.log(formatarData(primeiroDia), formatarData(ultimoDia))