/*
    Crie uma função que transforme tanto números octais quanto números hexadecimais em números decimais e vice-versa.
*/

let hexCarac = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let hexNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

function inverterValor(valor) {
    let inverso = []

    for (let i = valor.length; i > 0; i--) {
        inverso.push(valor[i - 1])
    }

    return inverso
}


// Transformando das bases numéricas 8 ou 16 para a base numérica 10

function transfParaDecimal(numero, base) {
    let num = String(numero)
    let invertido = inverterValor(num)
    let caracteresTransformados = []

    if (base === 16) {
        invertido.forEach(caractere => {
            let index = hexCarac.indexOf(caractere)
            caracteresTransformados.push(hexNum[index])
        })
    } else {
        invertido.forEach(caractere => {
            caracteresTransformados.push(Number(caractere))
        })
    }

    let soma = 0
    let pot = 0

    caracteresTransformados.forEach(caractere => {
        let valor = caractere * base ** pot
        soma += valor
        pot++
    })

    return soma
}


/*~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~~x~*/

// Transformando da base numérica 10 para as bases numéricas 8 ou 16

function transfDeDecimal(numero, base) {
    let restos = []
    let valorAtual = numero

    while (valorAtual >= base) {
        restos.push(String(valorAtual % base))
        valorAtual = Math.trunc(valorAtual / base)
        if (valorAtual < base && valorAtual !== 0) {
            restos.push(String(valorAtual))
        }
    }

    restosInvertidos = inverterValor(restos)
    let novaBase = ''

    if (base === 16) {
        restosInvertidos.forEach(caractere => {
            console.log(restosInvertidos)
            let index = hexNum.indexOf(caractere)
            novaBase += hexCarac[index]
        })
    } else {
        restosInvertidos.forEach(caractere => {
            novaBase += caractere
        })
    }

    return novaBase
}




// Exportando funções

module.exports = { transfParaDecimal, transfDeDecimal }