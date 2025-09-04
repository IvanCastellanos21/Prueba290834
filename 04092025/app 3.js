function saludar (nombre){
    console.log("Hola" + nombre);
}

function sumar(n1, n2){
    return parseInt(n1) + parseInt(n2);
}

function restar(n1, n2){
    return parseInt(n1) - parseInt(n2);
}

function multiplicar(n1, n2){
    return parseInt(n1) * parseInt(n2);
}

function dividir(n1, n2){
    if (n2 == 0){
        return console.log("No se puede dividir entre cero.");
    } else {
        return parseInt(n1) / parseInt(n2);
    }
}

let numero1 = prompt("Numero 1");
let numero2 = prompt("Numero 2");

// let resultado = sumar(numero1, numero2);
// console.log("El total de la suma es: " + resultado);

let resulSuma = sumar(numero1, numero2);
console.log("El total de la suma es: " + resulSuma);

let resulResta = restar(numero1, numero2);
console.log("El total de la resta es: " + resulResta);

let resulMult = multiplicar(numero1, numero2);
console.log("El total de la multiplicacion es: " + resulMult);

let resulDiv = dividir(numero1, numero2);
console.log("El total de la division es: " + resulDiv);

