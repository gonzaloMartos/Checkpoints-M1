// Ejercicio 1: Utilizar un bucle while para imprimir los números del 1 al 5.
let resultado1 = 1;
// Escribí tu código acá abajo:

while(resultado1 <= 5){
  console.log(resultado1);
  resultado1++;
}

// Ejercicio 2: Utilizar un bucle while para imprimir los números pares del 2 al 10.
let resultado2 = 2;
// Escribí tu código acá abajo:

while(resultado2 <= 10){
  console.log(resultado2);
  resultado2 += 2;
}

 // Ejercicio 3: Utilizar un bucle while para imprimir los números impares del 1 al 9.
let resultado3 = 1;
// Escribí tu código acá abajo:

while(resultado3 <= 9){
  console.log(resultado3);
  resultado3 += 2;
}

// Ejercicio 4: Utilizar un bucle while para calcular la suma de los números del 1 al 5.
let suma = 0;
let num = 1;
// Escribí tu código acá abajo:

while(num <= 5){
  suma += num;
  num++;
}

// Ejercicio 5: Utilizar un bucle while para calcular el producto de los números del 1 al 5.
let producto = 1;
let num2 = 1;
// Escribí tu código acá abajo:

while (num2 <= 5) {
  producto *= num2;
  num2++;
}

// Ejercicio 6: Utilizar un bucle while para imprimir los elementos de un arreglo "frutas".
let frutas = ["manzana", "banana", "uva", "pera", "naranja"];
let resultado6 = "";
let index = 0;
// Escribí tu código acá abajo:

while (index < frutas.length) {
  console.log(frutas[index]);
  index++;
}

// Ejercicio 7: Utilizar un bucle while para encontrar el índice de la primera ocurrencia de "banana" en el arreglo "frutas".
let indiceBanana = -1;
let m = 0;
// Escribí tu código acá abajo:

while (m < frutas.length) {
  if (frutas[m] === "banana") {
    indiceBanana = m;
    break;
  }
  m++;
}

// Ejercicio 8: Utilizar un bucle while para sumar los elementos de un arreglo "numeros".
let numeros = [3, 6, 9, 12, 15];
let sumaNumeros = 0;
let indice = 0;
// Escribí tu código acá abajo:

while (indice < numeros.length) {
  sumaNumeros += numeros[indice];
  indice++;
}

// Ejercicio 9: Utilizar un bucle while para imprimir los números del 10 al 1 en orden descendente.
let resultado9 = "";
let num3 = 10;
// Escribí tu código acá abajo:

while(num3 >= 1){
  console.log(num3);
  num3--;
}

// Ejercicio 10: Utilizar un bucle while para calcular la potencia de 2 elevado a la n, donde n es un número.
let n2 = 4; // Cambia el valor de n según lo necesites
let potencia = 1;
let exponente = 1;
// Escribí tu código acá abajo:

while (exponente <= n2) {
  potencia *= 2;
  exponente++;
}

// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  resultado1,
  resultado2,
  resultado3,
  suma,
  producto,
  resultado6,
  indiceBanana,
  sumaNumeros,
  resultado9,
  potencia,
};
