/*
Ejercicio 1
Dado un numero, devolver su tabla de multiplicar completa

Ejemplos:
-Ejecuto esta funcion:
tablaMultiplicar(5)

Me devuelve este resultado
#Tabla del 5 #
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
...

Como hacerlo:
-Funcion con parametro 'numero'
-Variable con texto encabezado
-Bucle del 1 al 10
-Concatenar a la variable string con multiplicacion y su resultado

*/

let title = '# Tabla del 5 #'

function tablaMultiplicar(numero) {
    console.log(title)
    for (let i = 1; i <= 10; i++) {
        let resultado = i * numero
        console.log(`${i} x ${numero} = ${resultado}`)
    }
}


tablaMultiplicar(5)