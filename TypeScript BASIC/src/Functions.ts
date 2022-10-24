// FUNCIONES
function greet(name: string | number): string {
  return "Hello " + name;
}

console.log(greet("Jorge"));

const sumar = (a: number, b: number): number => {
  return a + b;
};

console.log(sumar(1, 2));

function getNumber(): number | string {
  return Math.random() * 10;
}
console.log(getNumber());

function noDevuelveNada(): void {
  console.log("No devuelve nada");
}
noDevuelveNada();

// cuando usamos ? es opcional
function printPosition(position: { x: number; y?: number | string }): void {
  console.log(position.x, position.y);
}

printPosition({ x: 1 });
