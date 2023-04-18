/*
Ejercicio 5
Cuanto es el X por ciento de X numero?


Ejemplos:
tantoPorCiento(20,100) // Devuelve: 20
tantoPorCiento(43,897) // Devuelve: 385.71

Como hacerlo:
Funcion con parametros 'porcentaje' y 'numero'
Crear una variable para la operacion del porcentaje
Devolver string que responda a la pregunta del enunciado

*/

let numero = 43
let porcentaje = 897

const tantoPorCiento = (numero, porcentaje) => {

    let resultado = (porcentaje * numero) / 100

    return resultado

}

let resultado = tantoPorCiento(numero, porcentaje)

console.log(`El ${porcentaje} por ciento de ${numero} es ${resultado}`)

