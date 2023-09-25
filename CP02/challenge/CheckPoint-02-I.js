// Ejercicio 1: Sumar dos números y asignar el resultado a una variable "suma" (usando las variables num1 y num2).

let num1 = 10;
let num2 = 5;

// Escribí tu código acá abajo:

let suma = num1 + num2;
console.log(suma);

// Ejercicio 2: Restar dos números y asignar el resultado a una variable "resta" (usando las variables num1 y num2).

// Escribí tu código acá abajo:

let resta = num1 - num2;
console.log(resta);

// Ejercicio 3: Multiplicar dos números y asignar el resultado a una variable "multiplicacion" (usando las variables num1 y num2).

// Escribí tu código acá abajo:

let multiplicacion = num1 * num2;
console.log(multiplicacion);

// Ejercicio 4: Dividir dos números y asignar el resultado a una variable "division" (usando las variables num1 y num2).

// Escribí tu código acá abajo:

let division = num1 / num2;
console.log(division);

// Ejercicio 5: Calcular el módulo de dos números y asignar el resultado a una variable "modulo" (usando las variables num1 y num2).

// Escribí tu código acá abajo:

let modulo = num1 % num2;
console.log(modulo);

// Ejercicio 6: Incrementar en 1 el valor de una variable "contador1" utilizando el operador de incremento.

let contador1 = 0;

// Escribí tu código acá abajo:

contador1++;
console.log(contador1);

// Ejercicio 7: Decrementar en 1 el valor de una variable "contador2" utilizando el operador de decremento.

let contador2 = 1;

// Escribí tu código acá abajo:

contador2--;
console.log(contador2);

// Ejercicio 8: Concatenar dos strings y asignar el resultado a una variable "concatenacion".

// Escribí tu código acá abajo:

let nombre = "Gonzalo"
let apellido = "Martos"
let concatenacion = nombre + " " + apellido;
console.log(concatenacion);

// Ejercicio 9: Calcular el resultado de una expresión booleana y asignar el resultado a una variable "esVerdadero".

// Escribí tu código acá abajo:

let expresion = (num1 > num2);
let esVerdadero = expresion;
console.log(esVerdadero);

// Ejercicio 10: Utilizar un operador ternario para asignar el valor "Aprobado" o "Reprobado" a una variable "resultado" según un puntaje.

let puntaje = 80;

// Escribí tu código acá abajo:

let resultado = >= 70 ? "Aprobado" : "Reprobado";
console.log(resultado);

// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
  modulo,
  contador1,
  contador2,
  concatenacion,
  esVerdadero,
  resultado,
};
