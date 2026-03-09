/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
const n1 = parseInt(prompt("Ingrese el primer número:"));
const n2 = parseInt(prompt("Ingrese el segundo número:"));
const n3 = parseInt(prompt("Ingrese el tercer número:"));

let may = n1

if (n2 > may) {
    may = n2
}

if (n3 > may) {
    may = n3
}

document.write(`El ${may} es el número más grande`)