// let numero1 = 2;
// let numero2 = 2;

// console.log(numero1 + numero2);

// let nombre = prompt("Ingresar nombre: ");

// console.log(nombre);
// alert("Hola " + nombre);

let inputX = prompt("Ingresa un numero: ");
let inputY = prompt("Ingresa otro numero ");

console.log(typeof inputX);
console.log(typeof inputY);

let tmpInt1 = parseInt(inputX);
console.log(typeof tmpInt1);
let tmpInt2 = parseInt(inputY);
console.log(typeof tmpInt2);

let resultado = (tmpInt1 + tmpInt2);
console.log(resultado);
alert("La suma de estos numeros es = " + resultado);
