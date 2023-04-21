/*
Ejercicio 9
Dados dos arrays, devolver array con solo los elementos comunes entre ambos

Ejemplos:
elementosComunes([4,5,6,7], [7,8,9,7,5]) // Devuelve: [5,7]

Como hacerlo:

*/

let arrOne = [4, 5, 6, 7];
let arrTwo = [7, 8, 9, 7, 5];


function coincidencias(arrOne, arrTwo) {
    let elementosComunes = arrOne.filter(elemento => arrTwo.includes(elemento))
    return elementosComunes
}

console.log(coincidencias(arrOne, arrTwo))