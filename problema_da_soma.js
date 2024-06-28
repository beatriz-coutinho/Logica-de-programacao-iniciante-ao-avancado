// Faça um programa capaz de solicitar um número N (1<N<20) do usuário e ler N
// números inteiros. Após a leitura do último número deve-se informar:
// · Na primeira linha a soma dos N números em decimal.
// · Na segunda linha a soma em hexadecimal dos números pares informados.
// · Na terceira linha a soma em octal dos números impares informados.
// Assuma que todos os números fornecidos pelo usuário serão inteiros válidos e

let readline = require('readline-sync')

let n = readline.question('Digite um numero entre 1 e 20: ')
let listaNum = []

for (let i = 0; i < n; i++) {
    let num = readline.question('Digite um numero inteiro: ')
    listaNum.push(num)
}


// PARTE UM

let sumAll = 0
for (num of listaNum) {
    sumAll += parseInt(num)
}


// PARTE DOIS

let sumEven = 0
for (num of listaNum) {
    if (num % 2 == 0) {
        sumEven += num
    }
}


// DECIMAL PARA HEXADECIMAL

let hexCarac = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let hexNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

function inverterArray(array) {
    let inverso = []
    for (let i = array.length; i > 0; i--) {
        inverso.push(array[i - 1])
    }

    return inverso
}

function decToHex(dec) {
    let restos = []
    let valorAtual = dec

    while (valorAtual >= 16) {
        restos.push(String(valorAtual % 16))
        valorAtual = Math.trunc(valorAtual / 16)
        if (valorAtual < 16 && valorAtual !== 0) {
            restos.push(String(valorAtual))
        }
    }

    restosInvertido = inverterArray(restos)
    let hexadec = ''

    restosInvertido.forEach(charactere => {
        let index = hexNum.indexOf(charactere)
        hexadec += hexCarac[index]
    })

    return hexadec
}


// PARTE TRÊS
let sumOdd = 0

for (num of listaNum) {
    if (num % 2 != 0) {
        sumOdd += num
    }
}


// DECIMAL PARA OCTAL

function decToOct(dec) {
    let restos = []
    let valorAtual = dec

    while (valorAtual > 8) {
        restos.push(String(valorAtual % 8))
        valorAtual = Math.trunc(valorAtual / 8)
        if (valorAtual < 8 && valorAtual !== 0) {
            restos.push(String(valorAtual))
        }
    }

    restosInvertido2 = inverterArray(restos)
    let oct = ''

    restosInvertido2.forEach(charactere => {
        oct += String(charactere)
    })

    return oct
}








console.log(`Soma de todos os números inteiros em decimal: ${sumAll}`)
console.log(`Soma de todos os números pares em hexadecimal: ${decToHex(sumEven)}`)
console.log(`Soma de todos os números ímpares em octal: ${decToOct(sumOdd)}`)



