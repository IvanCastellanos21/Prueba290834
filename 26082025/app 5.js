let inputX = prompt("Ingresa un numero: ");
let inputY = prompt("Ingresa otro numero ");

console.log(typeof inputX);
console.log(typeof inputY);

let tmpInt1 = parseInt(inputX);
console.log(typeof tmpInt1);
let tmpInt2 = parseInt(inputY);
console.log(typeof tmpInt2);

let suma = (tmpInt1 + tmpInt2);
console.log(suma);
alert("La suma de estos numeros es = " + suma);

let resta = (tmpInt1 - tmpInt2);
console.log(resta);
alert("La resta de estos numeros es = " + resta);

let multiplicacion = (tmpInt1 * tmpInt2);
console.log(multiplicacion);
alert("El producto de estos numeros es = " + multiplicacion);

let divison = (tmpInt1 / tmpInt2);
console.log(divison);
alert("La division de estos numeros es = " + divison);

let modulo = (tmpInt1 % tmpInt2);
console.log(resta);
alert("El modulo de estos numeros es = " + modulo);