/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/ 

const frase = prompt("Ingrese una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocales += letra;
    }
}

document.write(`las volases que aparecen en la frase son : ${vocales}`);