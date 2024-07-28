/*
Faça um programa capaz de solicitar um número N (1<N<1000) do usuário e ler N
números inteiros. Após a leitura do último número deve-se informar:
· Na primeira linha a soma dos N números em decimal.
· Na segunda linha a soma em hexadecimal dos números pares informados.
· Na terceira linha a soma em octal dos números impares informados.
*/

// VARIÁVEIS
let n = 0
let valor = 0
let lista_numeros = []
let cont = 0

const escolher_btn = document.querySelector('.escolher')
const enviar_btn = document.querySelector('.enviar')
const div_valores = document.querySelector('.div_valores')
const paragrafo = document.querySelector('.paragrafo')
const paragrafo_dois = document.querySelector('.paragrafo_dois')
const label = document.querySelector('.valores')
const calcular_btn = document.querySelector('.calcular')
const primeira_linha = document.querySelector('.primeira_linha')
const segunda_linha = document.querySelector('.segunda_linha')
const terceira_linha = document.querySelector('.terceira_linha')


// BOTÃO ESCOLHER
escolher_btn.addEventListener('click', () => {
    paragrafo.innerHTML = ''
    n = document.querySelector('.n').value

    if (n == '') {
        paragrafo.innerHTML = 'Selecione um valor primeiro'
    } else {
        div_valores.setAttribute('class', 'aparecer')
        escolher_btn.setAttribute('disabled', 'true')
    }
})


// BOTÃO ENVIAR
enviar_btn.addEventListener('click', () => {
    paragrafo_dois.innerHTML = ''
    valor = document.querySelector('.valor').value

    if (valor == '') {
        paragrafo_dois.innerHTML = 'Selecione um valor primeiro'
    } else {
        valor = document.querySelector('.valor').value
        lista_numeros.push(valor)
        cont++
        for (let i = 0; i < n; i++) {
            label.innerHTML = `
                Escolha o ${cont + 1}º número inteiro:
                <input class="valor" type="number" />
            `
        }
        if (cont == n) {
            calcular_btn.setAttribute('class', 'aparecer')
            enviar_btn.setAttribute('disabled', 'true')
        }
    }
})


// CONVERSÃO DECIMAL PARA OUTRA BASE
function inverterArray(array) {
    let inverso = []
    for (let i = array.length - 1; i >= 0; i--) {
        inverso.push(array[i])
    }

    return inverso
}

function dec_to_base(dec, base_decimal) {
    let hex_caracteres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let hex_valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    let restos = []
    let valorAtual = dec

    while (valorAtual >= base_decimal) {
        restos.push(String(valorAtual % base_decimal))
        valorAtual = Math.trunc(valorAtual / base_decimal)
        if (valorAtual < base_decimal && valorAtual !== 0) {
            restos.push(String(valorAtual))
        }
    }

    let restosInvertidos = inverterArray(restos)
    console.log(restosInvertidos)
    let outra_base = ''

    restosInvertidos.forEach(caractere => {
        let index = hex_valores.indexOf(Number(caractere))
        outra_base += hex_caracteres[index]
    })

    console.log(outra_base)
    return outra_base
}


// BOTÃO CALCULAR
calcular_btn.addEventListener('click', () => {
    // parte 1
    let soma_decimal = 0
    for (caractere of lista_numeros) {
        soma_decimal += Number(caractere)
    }
    primeira_linha.innerHTML = `Soma de todos os números informados na base decimal: ${soma_decimal}`

    // parte 2
    let soma_pares = 0
    for (caractere of lista_numeros) {
        if (Number(caractere) % 2 === 0) {
            soma_pares += Number(caractere)
        }
    }
    let soma_pares_hexadecimal = dec_to_base(soma_pares, 16)
    segunda_linha.innerHTML = `Soma de todos os números pares informados na base hexadecimal: ${soma_pares_hexadecimal}`

    // parte 3
    let soma_impares = 0
    for (caractere of lista_numeros) {
        if (Number(caractere) % 2 !== 0) {
            soma_impares += Number(caractere)
        }
    }
    let soma_impares_octal = dec_to_base(soma_impares, 8)
    terceira_linha.innerHTML = `Soma de todos os números ímpares informados na base octal: ${soma_impares_octal}`
})