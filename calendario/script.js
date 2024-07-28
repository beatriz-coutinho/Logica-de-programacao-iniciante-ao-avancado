const body = document.querySelector('body')
const lista = document.querySelectorAll('.clicavel')
const inicio = document.querySelector('.inicio')
const final = document.querySelector('.final')
let data_inicio = ''
let data_final = ''

function desmarcar(start) {
    lista.forEach(data => {
        if (Number(data.innerHTML) > start) {
            if (data.classList.contains('marcado')) {
                data.classList.remove('marcado')
            }
        }
    })
}

function desmarcar_dois() {
    for (let i = 0; i < lista.length; i++) {
        lista.forEach(data => {
            if (data.classList.contains('entre')) {
                data.classList.remove('entre')
            }
        })
    }
}

const errorDiv = document.createElement('div')
body.appendChild(errorDiv)

inicio.addEventListener('change', () => {
    newDiv.innerHTML = ''
    desmarcar(0)
    errorDiv.innerHTML = ''

    let dia = inicio.value.slice(8, 10)
    if (dia[0] == '0') {
        dia = dia[1]
    }

    lista.forEach(data => {
        if (data.innerHTML == dia) {
            data.setAttribute('class', 'marcado')
        }
    })

    data_inicio = dia
})



let newDiv = document.createElement('div')
body.appendChild(newDiv)

final.addEventListener('change', () => {
    newDiv.innerHTML = ''
    desmarcar(Number(data_inicio) + 1)
    desmarcar_dois()
    if (data_inicio == '') {
        errorDiv.innerHTML = 'Escolha a data de início primeiro'
    } else {
        errorDiv.innerHTML = ''
        let dia = final.value.slice(8, 10)
        if (dia[0] == '0') {
            dia = dia[1]
        }

        if (dia > Number(data_inicio)) {
            lista.forEach(data => {
                if (data.innerHTML == dia) {
                    data.setAttribute('class', 'marcado')
                }

            })

            data_final = dia

            lista.forEach(data => {
                if (data.innerHTML > Number(data_inicio) && data.innerHTML < Number(data_final)) {
                    data.setAttribute('class', 'entre')
                }
            })

            newDiv.innerHTML = `Entre as datas ${inicio.value} e ${final.value} | ${(Number(data_final) - Number(data_inicio)) + 1} dias selecionados`
        } else {
            errorDiv.innerHTML = 'A data final deve vir depois da data inicial'
        }
    }


})