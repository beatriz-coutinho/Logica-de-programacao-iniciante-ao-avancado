/*
Em um bar, os homens recebem cartão de identificação com números ímpares e as
mulheres cartões com números pares.
Um animador contratado para animar a programação do dia deseja saber se existe uma
proporção de um-para-um entre homens e mulheres.
Você deve fazer um programa para fazer esta verificação.
O programa receberá um número N (1<=N<=1000) com o número de cartões distribuídos
e uma lista com N números inteiros positivos (todos maior ou igual a 1 e menor ou igual a
500) cada um representando o número de um cartão. Identifique se existe ou não a proporção desejada
*/



// VARIÁVEIS

const body = document.querySelector('body')
const input = document.querySelector('input')
const botao = document.querySelector('button')
const resultado = document.querySelector('.resultado')
const errorText = document.querySelector('.errorText')



// CÓDIGO

botao.addEventListener('click', () => {
    errorText.innerHTML = ''

    let qtd_pessoas = input.value
    if (qtd_pessoas === '') {
        errorText.innerHTML = 'Digite a quantidade de pessoas presentes primeiro!'
    } else {

        botao.setAttribute('disabled', 'true')

        if (qtd_pessoas % 2 === 0) {

            let numeros_sorteados = []
            for (let i = 0; i < Number(qtd_pessoas); i++) {
                let random_num = Math.trunc((Math.random() * 500) + 1)
                numeros_sorteados.push(random_num)
            }

            let mulheres = []
            let homens = []
            numeros_sorteados.forEach(num => {
                if (num % 2 === 0) {
                    mulheres.push(num)
                } else {
                    homens.push(num)
                }
            })

            let resp2 = document.createElement('p')
            resp2.innerHTML = `
                Cartões: <br>
                Pares: ${mulheres} <br>
                Quantidade de mulheres: ${mulheres.length} <br>
                Ímpares: ${homens} <br>
                Quantidade de homens: ${homens.length} <br>
                ${mulheres.length === homens.length ? 'Proporção atingida!' : 'Proporção não atingida!'}
            `
            body.insertBefore(resp2, resultado)
        } else {
            let resp1 = document.createElement('p')
            resp1.innerHTML = `
                A proporção pedida é de 1:1 e temos ${qtd_pessoas} pessoas presentes. A proporção não é possível, pois a quantidade de pessoas é ímpar!
            `
            body.insertBefore(resp1, resultado)
        }
    }
})