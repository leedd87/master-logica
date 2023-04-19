/*
Ejercicio 6
Dibujar un cuadrado hueco con asteriscos


Ejemplos:
cuadrado(4)

// Devuelve:
****
*  *
*  *
****

Como hacerlo:

*/
const asterisco = '*'
const asteriscoUpAndDown = (number) => {
    let dibujoUpAndDown = asterisco.repeat(number)
    console.log(dibujoUpAndDown)
}

const asteriscoMid = (number) => {
    let asteriscoRepetido = asterisco.repeat(number)
    let asteriscoSinMid = asteriscoRepetido.replace(/^\*|\*$/g, '').replace(/\*/g, ' ');
    asteriscoSinMid = `*${asteriscoSinMid}*`
    console.log(asteriscoSinMid)
}

function cuadrado(number) {
    asteriscoUpAndDown(number)
    asteriscoMid(number)
    asteriscoMid(number)
    asteriscoUpAndDown(number)
}

cuadrado(4)
