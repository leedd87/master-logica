/*
Ejercicio 12
Dado un numero mostrar todos los numeros desde 0 de 8 en 8
en una lista con guiones donde cada numero debe empezar por numero


Ejemplos:
hastaCero(100) // Devuelve:

--- Del 100 al 0 ---
- n100
- n92
- n84
- n76

Como hacerlo:

*/
function hastaCero(numero) {

    let resultado = '--- Del 100 al 0 ---\n'

    while (numero > 0) {
        resultado += `- n ${numero} \n`
        numero = numero - 8
    }

    resultado += '--- FIN ----'

    return resultado
}

console.log(hastaCero(100))