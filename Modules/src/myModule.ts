// variable
export const PI = 3.14;

// interfaces
export interface Person {
  id: number;
  name: string;
}

// function
export function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}


// tambien podemos exportar por defecto
// export { PI, Person, generateRandomNumber};