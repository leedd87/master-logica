/*
Ejercicio 13
Dada un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamanio

Dividirlo en arrays de X elementos

Ejemplos:
divideArray([7,8,9,10],2)
 
// Devuelve:
[[7,8],[9,10]]

Como hacerlo:

*/

let array = [7, 8, 9, 10, 11]


let finalArray = []

let numeroDivisor = 2

for (let i = 0; i < array.length; i = i + numeroDivisor) {

    let subArray = array.slice(i, i + numeroDivisor)
    finalArray.push(subArray)
}

console.log(finalArray)
