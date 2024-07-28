const valor = document.querySelector('.input')
const botao = document.querySelector('.botao')
const tabuada = document.querySelector('.tabuada')

botao.addEventListener('click', () => {
    tabuada.innerHTML = ''

    for (let i = 1; i < 11; i++) {
        tabuada.innerHTML += `${valor.value} x ${i} = ${valor.value * i} <br>`
    }
})