"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myModule_1 = require("./myModule");
// Algunos ejemplos de importaciones
//import {PI as myPI} from "./myModule";
//import * ass myCode from "./myModule";
console.log((0, myModule_1.generateRandomNumber)());
console.log(myModule_1.PI);
const person = {
    id: 1,
    name: "John",
};
console.log(person);
