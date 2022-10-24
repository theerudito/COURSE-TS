import { generateRandomNumber, PI, Person } from "./myModule";
// Algunos ejemplos de importaciones
//import {PI as myPI} from "./myModule";
//import * ass myCode from "./myModule";

console.log(generateRandomNumber());
console.log(PI);
const person: Person = {
  id: 1,
  name: "John",
};

console.log(person);
