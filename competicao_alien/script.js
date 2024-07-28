/*
Os aliens do planeta Yks fazem uma competição para ver quem consegue escreve um
texto com o maior número de palavras com N (1<=N<=10) caracteres.
Faça um programa para automatizar o cálculo e contar quantas palavras com N
caracteres existem no texto digitado. O programa deverá receber o número N e um texto
com até 250 caracteres e deverá dar como saída a quantidade de palavras com N caracteres
que o texto contém.
Atenção: para resolver este problema você necessita saber que na escrita do povo de
Yks não é utilizado espaço nem mesmo para separar palavras, ao invés disto, qualquer
caractere que não seja uma letra minúscula entre a e z será considerado separador de palavras
*/



// VARIÁVEIS

const body = document.querySelector('body')
const input = document.querySelector('input')
const textArea = document.querySelector('textarea')
const enviar = document.querySelector('.enviar')
const enviar_texto = document.querySelector('.enviar_texto')
const texto = document.querySelector('.texto')
const errorText = document.querySelector('.errorText')
const resultado = document.querySelector('.resultado')
const errorText2 = document.querySelector('.errorText2')
const resp1 = document.querySelector('.resp1')
const resp2 = document.querySelector('.resp2')
let num = 0



// CÓDIGO

enviar.addEventListener('click', () => {
    errorText.innerHTML = ''

    if (input.value === '') {
        errorText.innerHTML = 'Escolha um parâmetro primeiro!'
    } else {
        texto.classList.remove('.texto')
        texto.setAttribute('class', 'aparecer')
        enviar.setAttribute('disabled', 'true')
    }
})


enviar_texto.addEventListener('click', () => {
    errorText2.innerHTML = ''

    if (textArea.value === '') {
        errorText2.innerHTML = `Escreva algum texto para enviar`
    } else {

        let texto_traduzido = ''
        enviar_texto.setAttribute('disabled', 'true')
        
        for (let i = 0; i < textArea.value.length; i++) {
            if (('0123654789'.indexOf(textArea.value[i])) !== -1) {
                texto_traduzido += ' '
            } else if (('.,;!@#$%¨&*-_=+:><{}[]()'.indexOf(textArea.value[i])) !== -1) {
                texto_traduzido += ' '
            } else {
                texto_traduzido += textArea.value[i]
            }
        }
        
        let palavras_qtd = 0
        let array_texto = texto_traduzido.split(' ')
        array_texto.forEach(palavra => {
            if (palavra.length >= Number(input.value)) {
                palavras_qtd++
            }
        })

        resultado.classList.remove('resultado')

        resp1.innerHTML = `
            Total de palavras: ${array_texto.length} <br>
            Quantidade de palavras com ${Number(input.value)} caracteres ou mais:
        `
        resp2.innerHTML = `<b>${palavras_qtd}</b>`
        
    }
})