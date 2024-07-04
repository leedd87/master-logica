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

const tablaDeMultiplicar = (numero) => {
  let resultado = `#Tabla del ${numero} # \n`;

  for (let index = 1; index <= 10; index++) {
    const multiplicacion = numero * index;
    //concatena
    resultado += `${index} x ${numero} = ${multiplicacion} \n`;
  }
  return resultado;
};

console.log(tablaDeMultiplicar(5));
