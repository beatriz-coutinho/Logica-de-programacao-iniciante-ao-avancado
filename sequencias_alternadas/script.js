/*
Faça um programa que
1. Leia um número N.
2. Leia N seqüências de 5 números inteiros.
3. Some todos os números de cada sequência e guarde-os em um array
4. Imprima as N somas alternando a ordem de crescente para decrescente.
Assuma que o N máximo será 10.
*/



// VARIÁVEIS

const body = document.querySelector('body')
const enviar_num = document.querySelector('.enviar_num')
const errorText = document.querySelector('.errorText')
const div_listas = document.querySelector('.listas')
const label = document.querySelector('.label')
const enviar_seq = document.querySelector('.enviar_seq')
const errorText2 = document.querySelector('.errorText2')
const resultado = document.querySelector('.resultado')
const n = document.querySelector('.n')
const lista = document.querySelector('.lista')

let numero = 0
let contador = 1
const lista_numeros = []



// CÓDIGO

enviar_num.addEventListener('click', () => {
    errorText.innerHTML = ''
    
    if (n.value === '') {
        errorText.innerHTML = 'Escolha um número primeiro!'
    } else {
        enviar_num.setAttribute('disabled', 'true')
        div_listas.classList.remove('listas')
        
        numero = n.value
    }
})


enviar_seq.addEventListener('click', () => {
    let numerico = true
    errorText2.innerHTML = ''

    if (lista.value === '') {
        errorText2.innerHTML = 'Digite uma lista de números primeiro!'
    } else {
        let string_num = lista.value
        let array_num = string_num.split(',')
        if (array_num.length < 5) {
            errorText2.innerHTML = 'Digite uma lista de CINCO números separados SOMENTE por vírgula (,)!'
        } else {
            array_num.forEach(num => {
                if (isNaN(num)) {
                    numerico = false
                }
            })

            if (numerico === true) {
                console.log(contador)
                if (contador === Number(numero)) {
                    enviar_seq.setAttribute('disabled', 'true')
                    lista_numeros.push(array_num)
                    
                    let resp = document.createElement('p')
                    resp.innerHTML = `Sequências enviadas:`
                    body.insertBefore(resp, resultado)

                    console.log(lista_numeros)
                    
                    for (seq of lista_numeros) {
                        resp.innerHTML += `${seq} / `
                    }

                    let lista_somas = []
                    for (seq of lista_numeros) {
                        let soma = 0
                        for (num of seq) {
                            soma += Number(num)
                        }
                        lista_somas.push(soma)
                    }

                    let crescente = lista_somas.sort()
                    let decrescente = []
                    for (let i = crescente.length; i > 0; i--) {
                        decrescente.push(crescente[i - 1])
                    }
                    console.log(decrescente)

                    let resp2 = document.createElement('p')
                    resp2.innerHTML = `Lista das somas em ordem crescente: `
                    body.insertBefore(resp2, resultado)
                    crescente.forEach(num => {
                        resp2.innerHTML += `${num} / `
                    })

                    let resp3 = document.createElement('p')
                    resp3.innerHTML = `Lista das somas em ordem decrescente: `
                    body.insertBefore(resp3, resultado)
                    decrescente.forEach(num => {
                        resp3.innerHTML += `${num} / `
                    })

                    let sequencia_alternada = []
                    for (let i = crescente.length; i > 0; i--) {
                        if (i % 2 === 0) {
                            sequencia_alternada.push(decrescente[i - 1])
                        } else {
                            sequencia_alternada.push(crescente[i - 1])
                        }
                    }
                    let resp4 = document.createElement('p')
                    resp4.innerHTML = `Sequência alternada das somas: `
                    body.insertBefore(resp4, resultado)
                    for (num of sequencia_alternada) {
                        resp4.innerHTML += `${num} / `
                    }
                    
                } else {
                    lista_numeros.push(array_num)
                    label.innerHTML = `Digite a ${contador}ª sequência de números inteiros separados SOMENTE por vírgula (,)`
                    contador++
                }
            } else {
                errorText2.innerHTML = 'A lista deve conter SOMENTE números inteiros!'
            }
        }
    }
})