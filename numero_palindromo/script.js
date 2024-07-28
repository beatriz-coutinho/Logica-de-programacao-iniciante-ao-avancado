/*
Faça um programa que recebendo um número inteiro positivo N em hexadecimal seja
capaz de verificar se este número em decimal é lido exatamente da mesma forma seja de
frente para trás ou de trás para frente.
Caso positivo o programa deverá retornar uma linha com o caractere S, caso contrário o
caractere informado deverá ser o N.
*/



// VARIÁVEIS

const input = document.querySelector('input')
const verificar = document.querySelector('.verificar')
const p1 = document.querySelector('.resultado_p1')
const p2 = document.querySelector('.resultado_p2')
const p3 = document.querySelector('.resultado_p3')



// CONVERSÃO HEXADECIMAL PARA DECIMAL

function hex_to_dec(hex) {
    let hex_caracteres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let hex_valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let contador = hex.length - 1

    let hex_array = hex.split('')
    let dec_array = []
    for (caractere of hex_array) {
        let index = hex_caracteres.indexOf(caractere)
        dec_array.push(hex_valores[index])
    }
    
    array_transformado = []
    for (caractere of dec_array) {
        let new_carac = Number(caractere) * (16 ** contador)
        contador--
        array_transformado.push(new_carac)
    }

    let soma_array = 0
    for (caractere of array_transformado) {
        soma_array += Number(caractere)
    }
    
    return soma_array
}



// PEGANDO O VALOR EM HEXADECIMAL

verificar.addEventListener('click', () => {
    let valor_input = input.value

    let decimal = hex_to_dec(valor_input)
    let decimal_array = String(decimal).split('')
    let decimal_inverso = ''
    for (let i = decimal_array.length - 1; i >= 0; i--) {
        decimal_inverso += String(decimal_array[i])
    }

    p1.innerHTML = `(${valor_input})<sub>16</sub> em base decimal é (${decimal})<sub>10</sub>`
    p2.innerHTML = `${decimal} ao contrário é ${decimal_inverso}`
    p3.innerHTML = decimal ==  decimal_inverso ? `Número palíndromo` : `Número não palíndromo`
})