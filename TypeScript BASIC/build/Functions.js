"use strict";
// FUNCIONES
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Jorge"));
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(1, 2));
function getNumber() {
    return Math.random() * 10;
}
console.log(getNumber());
function noDevuelveNada() {
    console.log("No devuelve nada");
}
noDevuelveNada();
// cuando usamos ? es opcional
function printPosition(position) {
    console.log(position.x, position.y);
}
printPosition({ x: 1 });
