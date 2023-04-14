/*
Ejercicio 2
Dada una cadena de texto, comprobar si es un palindromo o no
Los palindromos son palabras que se leen igual aun estando invertidos
Por ejemplo: ana, bob, otto, allivessevilla

Ejemplos:
-Ejecuto esta funcion:
palindromo('otto') // Devuelve: true
palindromo('victor) // Devuelve: false

Como hacerlo:
-Funcion con parametro 'texto'
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parametro

*/

function isPalindromo(text) {
    let textArray = text.split('')
    let textArrayInvert = textArray.reverse()
    let invertedText = textArrayInvert.join('')
    if (text === invertedText) {
        return true
    } else {
        return false
    }
}

let texto = 'david'

console.log(isPalindromo(texto))

