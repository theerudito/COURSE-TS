// INTERFACES => es un contrato que define la estructura de un objeto
// diferencias entre interfaces y clases
// las interfaces no se pueden instanciar y solo existe en tiempo de compilacion
// las clases se pueden instanciar y existen en tiempo de ejecucion

interface Book {
  id: number;
  title: string;
  author: string;
  coAuthor?: string; // ? para que sea opcional
  isLoan?: (id: number) => void;
}

// con un objeto
const book: Book = {
  id: 1,
  title: "El señor de los anillos",
  author: "J.R.R. Tolkien",
  isLoan: (id: number) => {
    console.log(`El libro con id ${id} ha sido prestado`);
  },
};

// con un array
const arrayBooks: Book[] = [];

// con una funcion
const getBook = (): Book => {
  return { id: 1, title: "El señor de los anillos", author: "J.R.R. Tolkien" };
};

const myBook = getBook();
console.log(myBook);

// crear un nuevo libro
function createBook(book: Book): Book{
  return book;
}
const nuwBook: Book = {id: 2, title: "La casa del dragón", author: "George R.R. Martin"};
createBook(nuwBook);