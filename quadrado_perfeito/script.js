/*
Um número inteiro positivo N é um quadrado perfeito se existe um número K tal que
K*K=N.
Faça um programa que receberá uma quantidade indefinida de números inteiros positivos
J (-10000<=J<=10000) até que J seja zero. A saída do programa deverá ser a quantidade
de quadrados perfeitos informados.
*/


// VARIÁVEIS

const label = document.querySelector('label')
const botao = document.querySelector('button')
const body = document.querySelector('body')
const errorText = document.querySelector('.errorText')
const resultado = document.querySelector('.resultado')

let numeros = []
let quadrados_perfeitos = []



// CÓDIGO

let contador = 1
botao.addEventListener('click', () => {
    errorText.innerHTML = ''

    let input = document.querySelector('input').value

    if (input === '') {
        errorText.innerHTML = 'Digite um número primeiro!'
    } else if (Number(input) === 0) {

        botao.setAttribute('disabled', 'true')      

        numeros.forEach(numero => {
            let raiz = numero * (1/2)
            if (Math.trunc(raiz) === raiz) {
                quadrados_perfeitos.push(numero)
            }
        })

        const resp = document.createElement('p')
        resp.innerHTML = `
            Quadrados perfeitos: ${quadrados_perfeitos} <br>
            Número de quadrados perfeitos: ${quadrados_perfeitos.length}
        `
        body.insertBefore(resp, resultado)

    } else {
        numeros.push(Number(input))
        contador += 1
        label.innerHTML = `Digite o ${contador}º número [0 para parar]:`
    }
})