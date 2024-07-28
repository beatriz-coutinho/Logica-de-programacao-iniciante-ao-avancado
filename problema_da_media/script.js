/*
Faça um programa capaz de solicitar um número inteiro N (1<N<1000) do usuário e ler N
números inteiros. Ao final da leitura do último número, o programa deverá informar, com
uma casa decimal, a média aritmética entre os N números que estejam contidos no
intervalo fechado entre -10 e 10.
*/

// VARIÁVEIS

const escolher = document.querySelector('.escolher')
const enviar = document.querySelector('.enviar')
const calcular = document.querySelector('.calcular')
const div_escolher_num = document.querySelector('.escolher_numeros')
const escolher_texto = document.querySelector('.escolher_texto')
const label = document.querySelector('.escolher_numeros_label')
const numeros_texto = document.querySelector('.numeros_texto')
const div_calcular = document.querySelector('.div_calcular')
let n = document.querySelector('.n')
const paragrafo_um = document.querySelector('.paragrafo_um')



// ESCOLHENDO A QUANTIDADE DE NÚMEROS

escolher.addEventListener('click', () => {
    escolher_texto.innerHTML = ''
    if (n.value == '') {
        escolher_texto.innerHTML = 'Escolha um número primeiro!'
    } else {
        div_escolher_num.setAttribute('class', 'aparecer')
        escolher.setAttribute('disabled', 'true')
    }
})



// ESCOLHENDO OS NÚMEROS

let numeros = []
let cont = 0
enviar.addEventListener('click', () => {
    numeros_texto.innerHTML = ''
    const valores = document.querySelector('.valores')
    if (valores.value == '') {
        numeros_texto.innerHTML = 'Escolha um número primeiro!'
    } else {
        numeros.push(valores.value)
        cont++
        for (let i = 0; i < n.value; i++) {
            label.innerHTML = `
                <label class="escolher_numeros_label">
            Escolha o ${cont >= n.value? n.value : cont + 1}º número inteiro entre -10 e 10:
            <input class="valores" type="number" min="-20" max="20" />
        </label>
            `
        }
        if (numeros.length == n.value) {
            div_calcular.classList.remove('div_calcular')
            enviar.setAttribute('disabled', 'true')
        }
    }
})



// CALCULANDO

calcular.addEventListener('click', () => {
    let soma = 0
    let contador = 0
    for (caractere of numeros) {
        if (Number(caractere) >= -10 && Number(caractere) <= 10) {
            soma += Number(caractere)
            contador++
        }
    }
    let media = soma / contador
    paragrafo_um.innerHTML = `
        Média aritmética dos números no intervalo de -10 e 10: ${media.toFixed(1)}
    `
})