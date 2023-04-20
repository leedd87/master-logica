/*
Ejercicio 8da
Dado un numero entero, inviertelo y devuelve denuevo el entero

Ejemplos:
invertirNumero(67) // Devuelve 76

Como hacerlo:

*/

let number = 98

let numberStr = number.toString()

let reverseNumberStr = numberStr.split('').reverse().join('')


let reverseNumber = Number(reverseNumberStr)

console.log(typeof (reverseNumber))


