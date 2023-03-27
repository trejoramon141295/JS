console.log("********Ejercicio 1**********");
let filas = ["Sofia","David","Juan"];
let divEjercicio1 = document.getElementById("divEjercicio1");
console.log(filas);

filas.push("Sara");
filas.push("Agustin");
filas.shift();
console.log(filas);

filas.splice(1,0,"Renata");
filas.push("Elena");
console.log(filas);