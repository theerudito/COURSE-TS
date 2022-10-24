"use strict";
// TYPE OF DATA IN TYPESCRIPT
// EXAMPLE TYPE STRING
let myString = "Hello World";
// EXAMPLE TYPE NUMBER
let myNumber = 22;
// EXAMPLE TYPE BOOLEAN
let myBoolean = true;
// EXAMPLE TYPE ANY
let myAny = "Hello World";
// EXAMPLE TYPE ARRAY
let arrayDeNumeros1 = [1, 2, 3, 4, 5];
let arrayDeNumeros2 = [1, 2, 3, 4, 5];
let arrayDeStrings1 = ["Hello", "World"];
let arrayDeStrings2 = ["Hello", "World"];
let arrayDeBooleans1 = [true, false, true];
let arrayDeBooleans2 = [true, false, true];
let arrayDeAny1 = ["Hello", 22, true];
let arrayDeAny2 = ["Hello", 22, true];
// EXAMPLE TYPE TUPLE
let myTuple1 = ["Hello", 22, true];
let myTuple2;
myTuple2 = [
    [1, "Hello"],
    [2, "World"],
];
// INFERENCIAS DE TIPOS
// typescript infiere el tipo de dato de la variable
// podemos solo declarar la variable ts se encacarga de inferir el tipo de dato
let myVariable1;
let myVariable2 = "Hello World";
let myVariable3 = 23;
let myVariable4 = true;
// COMPORBACION TIPO DE DATO
// two ways to check the type of data
// union una variable puede ser de dos tipos o mas de datos
let myVariable5 = "Hello World";
myVariable5 = 22;
