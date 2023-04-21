/*
Ejercicio 10
Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera

Ejemplos:
escalera(4) // Devuelve:

[-]
[-][-]
[-][-][-]
[-][-][-][-]

Como hacerlo:

*/

let escalon = '[-]'



for (let i = 1; i <= 4; i++) {
    console.log(escalon.repeat(i))
}


