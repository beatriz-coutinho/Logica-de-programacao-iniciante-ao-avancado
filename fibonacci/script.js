/*
A sequência de Fibonacci é construída de forma que cada termo é obtido pela soma dos
dois termos anteriores. Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13.
Faça um programa capaz de solicitar um número inteiro N (1<=N<=40) e informar os N
primeiros elementos (um elemento por linha) da sequência de Fibonacci a partir do zero e
com o segundo elemento 1.
*/




// VARIÁVEIS

const input = document.querySelector('input')
const botao = document.querySelector('button')
const body = document.querySelector('body')

botao.addEventListener('click', () => {
    let texto = document.createElement('p')
    texto.innerHTML = 'Sequência de Fibonacci: '
    body.appendChild(texto)

    let num1 = document.createElement('p')
    num1.innerHTML = '0'
    body.appendChild(num1)

    let num2 = document.createElement('p')
    num2.innerHTML = '1'
    body.appendChild(num2)

    let num = input.value
    let t1 = 0
    let t2 = 1
    let t3 = t1 + t2
    for (let i = 2; i < num; i++) {
        newText = document.createElement('p')
        newText.innerHTML = `${t3}`
        body.appendChild(newText)
        t1 = t2
        t2 = t3
        t3 = t1 + t2
    }


})