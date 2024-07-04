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

const multiplicar = (numero) => {
  console.log(`#Tabla del ${numero} #`);
  for (let index = 1; index <= 10; index++) {
    const resultado = numero * index;
    const string_resultado = `${index} x ${numero} = ${resultado}`;
    console.log(string_resultado);
  }
};

multiplicar(10);
