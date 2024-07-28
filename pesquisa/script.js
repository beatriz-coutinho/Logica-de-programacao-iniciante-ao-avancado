const lista = document.querySelectorAll('li')
const input = document.querySelector('input')
const body = document.querySelector('body')

const lista_nomes = []

for (item of lista) {
    lista_nomes.push(item.innerText)
}

const newDiv = document.createElement('div')
body.appendChild(newDiv)

input.addEventListener('keyup', () => {
    lista.forEach(item => item.setAttribute('class', ''))
    newDiv.innerHTML = ''
    let pesquisado = input.value
    const encontrado = lista_nomes.indexOf(pesquisado)
    if (encontrado < 0) {
        newDiv.innerHTML = 'Nome não encontrado'
    } else {
        lista[encontrado].setAttribute('class', 'negrito')
    }
})