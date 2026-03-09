//6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo: 
//input: 15 , 3
//Output: El 15 es el número más grande


let n1 = parseInt(prompt("Ingrese el primer número:"));
let n2 = parseInt(prompt("Ingrese el segundo número:"));

if(n1===n2){
        document.write(`los numeros son iguales`)
    }
else if(n1>n2){
    document.write(`El ${n1} es el numero mas grande`)}
else{ 
    document.write(`El ${n2} es el numero mas grande`)}

    