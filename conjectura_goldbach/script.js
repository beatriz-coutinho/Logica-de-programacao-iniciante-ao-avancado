/*
A conjectura de Goldbach (ainda não provada) diz que qualquer número par maior ou
igual a 4 é a soma de dois números primos.
Faça um programa que, recebendo um número P par (4<=P<=4294967294), seja capaz
de retornar dois número inteiros correspondentes aos dois números primos cuja soma
seja igual ao número par P.
Considere que:
· Os valores de saída devem ser ordenados em ordem crescente.
· Existindo mais de uma combinação possível, retorna-se aquela cujo primeiro valor
seja o menor.
· Não existindo valores (parabéns! você foi o primeiro no mundo que provou que a
conjectura é falsa!) retorne -1.
*/


// VARIÁVEIS
const input = document.querySelector('input')
const botao = document.querySelector('button')
const errorText = document.querySelector('.errorText')
const resultado = document.querySelector('resultado')
const body = document.querySelector('body')



// CÓDIGO

botao.addEventListener('click', () => {
    errorText.innerHTML = ''

    let num = input.value

    if (num !== '') {
        if (Number(num) % 2 === 0) {

            botao.setAttribute('disabled', 'true')

            let conjuntos = []
            for (let i = 1; i <= Number(num); i++) {
                let divisor1 = 0
                let divisor2 = 0
                let qtdDiv1 = 0
                let qtdDiv2 = 0

                divisor1 = i
                divisor2 = Number(num) - divisor1
                if (divisor2 > 0) {
                    for (let i = 1; i <= divisor1; i++) {
                        if (divisor1 % i === 0) {
                            if (divisor1 === 1) {
                                qtdDiv1++
                            }
                        }
                        
                        if (divisor1 % i === 0) {
                            qtdDiv1++
                        }
                    }
                    for (let i = 1; i <= divisor2; i++) {
                        if (divisor2 % i === 0) {
                            if (divisor2 === 1) {
                                qtdDiv2++
                            }
                        }

                        if (divisor2 % i === 0) {
                            qtdDiv2++
                        }
                    }
                    if (qtdDiv1 === 2 && qtdDiv2 === 2) {
                        conjuntos.push([divisor1, divisor2])
                    }
                }
            }

            let newP = document.createElement('p')
            newP.innerHTML = 'Conjuntos encontrados: <br>'
            body.insertBefore(newP, resultado)

            let contador = 0
            conjuntos.forEach(conjunto => {
                contador++
                newP.innerHTML += `
                    [${conjunto[0]}, ${conjunto[1]}] ${contador === conjuntos.length ? '' : '/ '}
                `
            })

            let semi_final = document.createElement('p')
            semi_final.innerHTML = `
                Conjuntos que se adequam às regras:
            `
            body.insertBefore(semi_final, resultado)
            let array_final = []
            for (conjunto of conjuntos) {
                if (conjunto[0] < conjunto[1]) {
                    array_final.push(conjunto)
                }
            }
            let contador2 = 0
            array_final.forEach(conjunto => {
                contador2++
                semi_final.innerHTML += `
                    [${conjunto}]${contador2 === array_final.length ? '' : ' / '}
                `
            })

            let final = document.createElement('p')
            final.innerHTML = `Conjunto que se adequa ao pedido: [${array_final[0]}]`
            body.insertBefore(final, resultado)


        } else {
            errorText.innerHTML = 'O número deve ser par'
        }
    } else {
        errorText.innerHTML = 'Escolha um número par primeiro!'
    }
})