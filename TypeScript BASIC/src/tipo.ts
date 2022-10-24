// TYPE OF DATA IN TYPESCRIPT

// EXAMPLE TYPE STRING
let myString: string = "Hello World";

// EXAMPLE TYPE NUMBER
let myNumber: number = 22;

// EXAMPLE TYPE BOOLEAN
let myBoolean: boolean = true;

// EXAMPLE TYPE ANY
let myAny: any = "Hello World";

// EXAMPLE TYPE ARRAY
let arrayDeNumeros1: number[] = [1, 2, 3, 4, 5];
let arrayDeNumeros2: Array<number> = [1, 2, 3, 4, 5];

let arrayDeStrings1: string[] = ["Hello", "World"];
let arrayDeStrings2: Array<string> = ["Hello", "World"];

let arrayDeBooleans1: boolean[] = [true, false, true];
let arrayDeBooleans2: Array<boolean> = [true, false, true];

let arrayDeAny1: any[] = ["Hello", 22, true];
let arrayDeAny2: Array<any> = ["Hello", 22, true];

// EXAMPLE TYPE TUPLE
let myTuple1: [string, number, boolean] = ["Hello", 22, true];
let myTuple2: [number, string][];
myTuple2 = [
  [1, "Hello"],
  [2, "World"],
];

// INFERENCIAS DE TIPOS
// typescript infiere el tipo de dato de la variable
// podemos solo declarar la variable ts se encacarga de inferir el tipo de dato
let myVariable1;
let myVariable2: string = "Hello World";
let myVariable3 = 23;
let myVariable4 = true;

// COMPORBACION TIPO DE DATO
// two ways to check the type of data
// union una variable puede ser de dos tipos o mas de datos
let myVariable5: string | number | null = "Hello World";
myVariable5 = 22;
