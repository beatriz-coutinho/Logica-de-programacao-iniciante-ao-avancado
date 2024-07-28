/*
Faça um programa que solicite números inteiros I (-4000<=I<=4000) enquanto I for
diferente de zero. Quando I for zero o programa deve imprimir todos os sucessores
inteiros imediatos de cada I informado.
*/


// VARIÁVEIS

const body = document.querySelector('body')
const botao = document.querySelector('button')
const errorText = document.querySelector('.errorText')
const label = document.querySelector('label')
const resultado = document.querySelector('.resultado')



// CÓDIGO

let numeros = []
let contador = 1

botao.addEventListener('click', () => {
    errorText.innerHTML = ''

    let valor = document.querySelector('.i').value
    
    if (valor === '') {
        errorText.innerHTML = 'Digite um número primeiro'
    } else if (Number(valor) === 0) {

        botao.setAttribute('disabled', 'true')
        let resp = document.createElement('p')
        resp.innerHTML = ``
        body.insertBefore(resp, resultado)
        numeros.forEach(numero => {
            resp.innerHTML += `
                Sucessor de ${numero} ⇨ ${numero + 1} <br>
            `
        })
    } else {
        numeros.push(Number(valor))
        contador++
        label.innerHTML = `
            Digite o ${contador}º número [0 para parar]:
        `
        console.log(numeros)
    }
})