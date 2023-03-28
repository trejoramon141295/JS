console.log("Imprimir repetidamente el valor de la variable xValue disminuyéndolo en 0,5 cada vez");
console.log("siempre que xValue siga siendo positivo.");

let xValue=10;
while (xValue>0) {
    console.log(xValue);
    xValue -= 0.5;    
}//while

console.log("Imprime todos los números impares entre 1 - 100");

let numPar = 1;
while (numPar <=100) {
    console.log(numPar);
    numPar +=2;
}//while

console.log("Imprimir del 1 al n entre corchetes.");

let n= 15;
let numCorchetes = 1;
while (numCorchetes <= n ) {
    console.log("[" + numCorchetes + "]");
    numCorchetes += 1;    
}

console.log("Escriba un método con while que calcule la suma de los primeros n enteros positivos:");

let nStop = 19;
let sumaNum = 1;
let acomulador =0;
while (sumaNum <= nStop) {
    acomulador = sumaNum + acomulador;
    //console.log(acomulador);
    sumaNum += 1;
}

console.log("Sumatoria desde 1 hasta " + nStop + " = " + acomulador);
