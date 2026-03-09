/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro 
es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

const n = parseInt(prompt("Ingrese un número:"));
let resultado = "";

if (n % 2 === 0) {
    resultado += " por 2";
}
if (n % 3 === 0) {
    resultado += " por 3";
}
if (n % 5 === 0) {
    resultado += " por 5";
}
if (n % 7 === 0) {
    resultado += " por 7";
}

document.write(`El ${n} es divisible${resultado}.`);