/*
Ejercicio 4
Dada una cadena de texto, darle la vuelta e invertir el orden de los caracteres, sin usar metodos propios del lenguaes, solo estructuras de control


Ejemplos:
invertir('hola) // Devuelve: 'aloh'
invertir('david) // Devuelve: 'divad'

Como hacerlo:


*/

function darVuelta(texto) {
    //david
    let acumulador = ''


    for (let i = texto.length - 1; i >= 0; i--) {
        acumulador += texto[i]
        // console.log(acumulador)
    }

    console.log(acumulador)

    return acumulador

}

darVuelta('david')

