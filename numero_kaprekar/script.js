/*
Existem alguns números que têm uma propriedade bastante interessante, observe:
100
10+0=10 10*10=100
2025
20+25=45 45*45=2025
3025
30+25=55 55*55=3025
9801
98+1=99 99*99=9801
10000
100+0=100 100*100=10000
88209
88+209=297 297*297=88209
494209
494+209=703 703*703=494209
998001
998+1=999 999*999=998001
Os números que têm esta propriedade são conhecidos como número de Kaprekar.
Cada um dos números apresentados tiveram seus algarismos decompostos de tal forma
que a soma das partes elevado ao quadrado era igual ao número original.
Faça um programa capaz de ler e identificar se um determinado número N
(1<=N<=100.000) possui ou não esta propriedade.
*/



// VARIÁVEIS

const input = document.querySelector('input')
const botao = document.querySelector('button')
const errorText = document.querySelector('.errorText')
const body = document.querySelector('body')
const resultado = document.querySelector('.resultado')



// CÓDIGO

botao.addEventListener('click', () => {
    errorText.innerHTML = ''
    let num = input.value

    if (num !== '') {
        botao.setAttribute('disabled', 'true')
        let quadrado = Number(num) * Number(num)
    
        let parte1 = ''
        let qtdParte1 = 0
        let parte2 = ''

        if (String(quadrado).length % 2 === 0) {
            qtdParte1 = (String(quadrado).length / 2)
        } else {
            qtdParte1 = Math.trunc(String(quadrado).length / 2)
        }

        parte1 = String(quadrado).slice(0, qtdParte1)
        parte2 = String(quadrado).slice(qtdParte1)

        let final = document.createElement('p')
        final.innerHTML = `
            Análise: <br>
            ${Number(num)} * ${Number(num)} = ${quadrado} <br>
            ${Number(parte1)} + ${Number(parte2)} = ${Number(parte1) + Number(parte2)}
        `
        body.insertBefore(final, resultado)

        let ultimo = document.createElement('p')
        ultimo.innerHTML = `
            ${Number(num)}
            ${Number(parte1) + Number(parte2) === Number(num) ? ' é um número de Kaprekar' : ' não é um número de Kaprekar'}
        `
        body.insertBefore(ultimo, resultado)
    } else {
        errorText.innerHTML = 'Escolha um número primeiro!'
    }
})