// if (condicion => true){
//     //algo
// } else {
//     //otro
// }

// let nombre = prompt("Ingresa la clave secreta");
// if(clave === "123456"){
//     //clave es true
//     console.log("Exito");
// }
// console.log("Continua el flujo");

// let x = parseInt(prompt("Ingresa un numero mayor que 10"));

// if (x >= 10){
//     console.log("Genial");
// } else {
//     console.log("Mal");
// }

// let port = 3008;

// if(port){
//     console.log("Definicion de puerto correcto");
// } else {
//     console.log("Error de puerto");
// }

let x = parseInt(prompt("Ingrese un valor numerico entero cualquiera"));
let y = parseInt(prompt("Ingrese otro valor numerico entero cualquiera"));
let z = parseInt(prompt("Ingrese otro valor numerico entero cualquiera"));

let masAlto;

if (x === y && y === z) {
    console.log("No hay numero mas alto");
} else if (x >= y && x >= z){
    masAlto = x;
    console.log("El numero mas alto es " + masAlto);
} else if (y >= x && y >= z){
    masAlto = y;
    console.log("El numero mas alto es " + masAlto);
} else if (z >= x && z >= y) {
    masAlto = z;
    console.log("El numero mas alto es " + masAlto);
} else {
    console.log("Introduzca un valor valido");
}

if (x === y && y === z) {
    console.log("Y los tres numeros son iguales");
  } else if (x === y || x === z || y === z) {
    console.log("Y dos numeros son iguales");
  } else {
    console.log("Y no hay numeros iguales");
}

