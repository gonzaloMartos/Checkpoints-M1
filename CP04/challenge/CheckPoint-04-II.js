// Ejercicio 1: Utilizar una declaración if...else if para determinar la calificación de un estudiante.

// Escribí tu código acá abajo:

const nota = 10;

if (nota <= 10 && nota >= 6) {
    console.log("aprovado");
} else if (nota <= 5) {
    console.log("desaprovado");
}

// Ejercicio 2: Utilizar una declaración if...else if para determinar la categoría de un producto.

// Escribí tu código acá abajo:

const precio = 50;

if (precio <= 10) {
    console.log("Categoría baja");
} else if (precio <= 50) {
    console.log("Categoría standard");
} else {
    console.log("Categoría deluxe");
}

// Ejercicio 3: Utilizar una declaración if...else if para determinar el tipo de descuento a aplicar.

// Escribí tu código acá abajo:

const compra = 120;

if (compra >= 100) {
    console.log("Descuento del 20%");
} else if (compra >= 50) {
    console.log("Descuento del 10%");
} else {
    console.log("Sin descuento");
}

// Ejercicio 4: Utilizar una declaración if...else if para determinar el género de una película.

// Escribí tu código acá abajo:

const genero = "acción";

if (genero === "acción") {
    console.log("Acción");
} else if (genero === "comedia") {
    console.log("Comedia");
} else if (genero === "drama") {
    console.log("Drama");
} else {
    console.log("Género no reconocido");
}

// Ejercicio 5: Utilizar una declaración if...else if para determinar el rango de edad de una persona.

// Escribí tu código acá abajo:

const edad = 25;

if (edad < 18) {
    console.log("Menor de edad");
} else if (edad >= 18 && edad <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}

// Ejercicio 6: Utilizar una declaración if...else if para determinar el nivel de experiencia de un empleado.

// Escribí tu código acá abajo:

const experiencia = 5;

if (experiencia < 1) {
    console.log("Principiante");
} else if (experiencia >= 1 && experiencia < 5) {
    console.log("Intermedio");
} else if (experiencia >= 5 && experiencia < 10) {
    console.log("Experimentado");
} else {
    console.log("Experto");
}

// Ejercicio 7: Utilizar una declaración if...else if para determinar la estación del año según el mes.

// Escribí tu código acá abajo:

const mes = "julio";

if (mes === "enero" || mes === "febrero" || mes === "marzo") {
    console.log("Verano");
} else if (mes === "abril" || mes === "mayo" || mes === "junio") {
    console.log("Otoño");
} else if (mes === "julio" || mes === "agosto" || mes === "septiembre") {
    console.log("Invierno");
} else if (mes === "octubre" || mes === "noviembre" || mes === "diciembre") {
    console.log("Primavera");
} else {
    console.log("Mes no válido");
}

// Ejercicio 8: Utilizar una declaración if...else if para determinar el formato de un archivo según su extensión.

// Escribí tu código acá abajo:

const archivo = "documento.pdf";

if (archivo.endsWith(".pdf")) {
    console.log("Formato PDF");
} else if (archivo.endsWith(".jpg") || archivo.endsWith(".jpeg") || archivo.endsWith(".png")) {
    console.log("Formato de imagen");
} else if (archivo.endsWith(".doc") || archivo.endsWith(".docx")) {
    console.log("Formato de documento de Word");
} else {
    console.log("Formato desconocido");
}

// Ejercicio 9: Utilizar una declaración if...else if para determinar el tipo de fruta según su color.

// Escribí tu código acá abajo:

const color = "amarillo";

if (color === "rojo") {
    console.log("Manzana");
} else if (color === "amarillo") {
    console.log("Banana");
} else if (color === "naranja") {
    console.log("Naranja");
} else if (color === "verde") {
    console.log("Uva");
} else {
    console.log("No se reconoce la fruta por el color");
}

// Ejercicio 10: Utilizar una declaración if...else if para determinar el horario del día.

// Escribí tu código acá abajo:

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
