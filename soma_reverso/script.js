/*
Para este problema considere que a soma reservada de N + M é dada por Rev(Rev(N) +
Rev(M)), sendo que Rev(X) é uma função que retorna X com os algarismos na ordem
inversa. Por exemplo, Rev(5789) = 9875.
Faça um programa capaz de receber dois números inteiros e informar a soma reservada
do mesmo.
*/


// FUNÇÃO REV

function Rev(x) {
    let array_x = String(x).split('')
    let array_invertido = []
    for (let i = array_x.length - 1; i >= 0; i--) {
        array_invertido.push(array_x[i])
    }
    let num_invertido = ''
    for (caractere of array_invertido) {
        num_invertido += String(caractere)
    }
    return num_invertido
}



// VARIÁVEIS

const m = document.querySelector('.m')
const n = document.querySelector('.n')
const botao = document.querySelector('button')
const errorText = document.querySelector('.errorText')
const body = document.querySelector('body')
const resultado = document.querySelector('.resultado')




// CÓDIGO

botao.addEventListener('click', () => {
    errorText.innerHTML = ''
    if (m.value === '' || n.value === '') {
        errorText.innerHTML = 'Selecione ambos os números primeiro!'
    } else {
        botao.setAttribute('disabled', 'true')

        let m_reverso = Rev(Number(m.value))
        let n_reverso = Rev(Number(n.value))

        let soma = Number(m_reverso) + Number(n_reverso)
        let soma_reverso = Rev(soma)

        let resp1 = document.createElement('p')
        resp1.innerHTML = `
            Rev(Rev(n) + Rev(m)) = <br>
            Rev(Rev(${n.value}) + Rev(${m.value})) = <br>
            Rev(${n_reverso} + ${m_reverso}) = <br>
            <b>${soma_reverso}</b>
        `
        body.insertBefore(resp1, resultado)
    }
})