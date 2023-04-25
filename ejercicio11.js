/*
Ejercicio 11
Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el textoi con [-CENSURADO-]

Si el texto y la busqueda estan vacios mostrar
'No puedes leer el texto y la busqueda' en el caso de que ambos parametros no lleguen

Ejemplos:
censurado('hola hola', 'hola') // Devuelve: [-CENSURADO-] [-CENSURADO-]

censurado() // Devuelve: 'No puedes leer el texto y la busqueda'

Como hacerlo:

*/

let texto = 'hola hola holamanola'

let busqueda = 'hola'

const censurado = (texto = false, busqueda = false) => {
    let resultado = ''
    if (!texto && !busqueda) {
        resultado = 'No puedes leer el texto y la busqueda'
    } else if (!texto && busqueda) {
        resultado = 'No puedes leer el texto'
    } else if (texto && !busqueda) {
        resultado = 'No puedes leer la busqueda'
    } else if (texto && busqueda) {
        resultado = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]')
    }
    return resultado
}

console.log(censurado(texto, busqueda))