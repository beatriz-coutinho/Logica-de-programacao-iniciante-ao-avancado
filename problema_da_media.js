// Faça um programa capaz de solicitar um número inteiro N (1<N<20) do usuário e ler N
// números inteiros. Ao final da leitura do último número, o programa deverá informar, com
// uma casa decimal, a média aritmética entre os N números que estejam contidos no
// intervalo fechado entre -1000 e 1000.


let readline = require('readline-sync')

let n = readline.question('Digite um numero inteiro entre 1 e 20: ')
let listaNum = []

for (let i = 0; i < n; i++) {
    num = readline.question('Digite um numero inteiro: ')
    listaNum.push(num)
}

console.log(listaNum)

let lista_final = []
for (num of listaNum) {
    if (num <= 1000 && num >= -1000) {
        lista_final.push(num)
    }
}

let sum = 0
for (num of lista_final) {
    sum += parseInt(num)
}

let media = sum / lista_final.length
console.log(`A média final dos números entre -1000 e 1000 é: ${media.toFixed(1)}`)