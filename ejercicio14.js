/*
Ejercicio 14
Dada un string y un numero, repetir el string tantas veces como el numero indique

Ejemplos:
repiteme('david', 2)
 
// Devuelve:
daviddavid

Como hacerlo:

*/

let str = 'david';

let strRepeated = str.repeat(2)

console.log(strRepeated)

function repeatStr(str, number) {
    let result = str.repeat(number)
    return result
}

console.log(repeatStr(str, 5))