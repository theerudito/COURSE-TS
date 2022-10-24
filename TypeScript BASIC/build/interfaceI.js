"use strict";
// INTERFACES => es un contrato que define la estructura de un objeto
// diferencias entre interfaces y clases
// las interfaces no se pueden instanciar y solo existe en tiempo de compilacion
// las clases se pueden instanciar y existen en tiempo de ejecucion
// con un objeto
const book = {
    id: 1,
    title: "El señor de los anillos",
    author: "J.R.R. Tolkien",
    isLoan: (id) => {
        console.log(`El libro con id ${id} ha sido prestado`);
    },
};
// con un array
const arrayBooks = [];
// con una funcion
const getBook = () => {
    return { id: 1, title: "El señor de los anillos", author: "J.R.R. Tolkien" };
};
const myBook = getBook();
console.log(myBook);
// crear un nuevo libro
function createBook(book) {
    return book;
}
const nuwBook = { id: 2, title: "La casa del dragón", author: "George R.R. Martin" };
createBook(nuwBook);
