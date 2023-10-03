// Ejercicio 1: Utilizar una declaración if para determinar si un número es positivo o negativo.

// Escribí tu código acá abajo:

const num1 = 2;

if(num1 >= 0){
  console.log("es positivo");
}else{
  console.log("es negativo");
}

// Ejercicio 2: Utilizar una declaración if para determinar si un número es par o impar.

// Escribí tu código acá abajo:

const num2 = 4;

if(num2 % 2 === 0){
  console.log("es par");
}else{
  console.log("es impar");
}

// Ejercicio 3: Utilizar una declaración if para determinar si un número es mayor, menor o igual a otro.

// Escribí tu código acá abajo:

const num3 = 5;
const num4 = 10;

if(num3 > num4){
  console.log("es mayor");
}else if(num3 < num4){
  console.log("es menor");
}else if(num3 = num4){
  console.log("es igual");
}

// Ejercicio 4: Utilizar una declaración if para verificar si una persona es mayor de edad (mayor o igual a 18 años).

// Escribí tu código acá abajo:

const años = 12;

if(años >= 18){
  console.log("es mayor de edad");
}else{
  console.log("es menor de edad");
}

// Ejercicio 5: Utilizar una declaración if para determinar si un número es divisible por 3 y 5 al mismo tiempo.

// Escribí tu código acá abajo:

const numeroDivisible = 5;

if(numeroDivisible % 3 === 0 && numeroDivisible % 5 === 0){
  console.log("es divisible por 3 y 5");
}else{
  console.log("no es divisible por 3 y 5");
} 

// Ejercicio 6: Utilizar una declaración if para determinar si una letra es una vocal.

// Escribí tu código acá abajo:

const letra = "a";

if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
  console.log("es vocal");
}else{
  console.log("no es vocal");
}

// Ejercicio 7: Utilizar una declaración if para determinar si una persona puede votar (mayor de 18 y ciudadano).

// Escribí tu código acá abajo:

const edad = 18;
const ciudadania = "argentina"

if(edad >= 18 && ciudadania === "argentina"){
  console.log("puede votar");
}else{
  console.log("no puede votar");
}

// Ejercicio 8: Utilizar una declaración if para determinar si un número es positivo o cero.

// Escribí tu código acá abajo:

const num5 = 2;

if(num5 > 0){
  console.log("este numero es positivo");
}else if(num5 === 0){
  console.log("este numero es cero");
}

// Ejercicio 9: Utilizar una declaración if para determinar si un número es mayor que 10 y menor que 20.

// Escribí tu código acá abajo:

const num6 = 15;

if(num6 > 10 && num6 < 20){
  console.log("este numero es mayor que 10 y menor que 20");
}else{
  console.log("este numero no entra dentro del rango anterior");
}

// Ejercicio 10: Utilizar una declaración if para determinar si una persona puede conducir (mayor de 16 y tiene licencia).

// Escribí tu código acá abajo:

const edad2 = 16;
const licencia = "si";

if(edad2 >= 16 && licencia === "si"){
  console.log("puede conducir");
}else{
  console.log("no puede conducir");
}

// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  resultado1,
  resultado2,
  resultado3,
  resultado4,
  resultado5,
  resultado6,
  resultado7,
  resultado8,
  resultado9,
  resultado10,
};
