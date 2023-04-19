/*
Ejercicio 7
Dados dos numeros, devolver cuantos numeros impares hay entre ellos

Ejemplos:
impares(1,100) // Devuelve 49

Como hacerlo:

*/

const imparesResult = [];

function impares(number1, numero2) {

    for (let i = number1 + 1; i <= numero2; i++) {

        if (i % 2 !== 0) {
            imparesResult.push(i)
        }
    }
    return imparesResult
}

console.log(impares(1, 100).length)