/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.*/

const num = parseInt(prompt("Ingrese un número:"));

if (num % 2 === 0) {
    document.write(`El ${num} es divisible por 2.`);
} else {
    document.write(`El ${num} no es divisible por 2.`);
}