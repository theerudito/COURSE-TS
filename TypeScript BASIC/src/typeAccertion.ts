// LAS TYPEACCERTION
// usamos cuando no sabemos el tipo de datos nosotros podemos comvertirlo
// ejemplo recibimos un valore de nuestra api o de un input no sabemos que tipo de dato es

let channel: any = "The Erudito";
let channelString1: string = channel as string;
let channelString2 = channel as string;
let channelString3: string = channel as string;

const myCamvas1 = document.getElementById("name") as HTMLCanvasElement;
const myCamvas2 = <HTMLCanvasElement>document.getElementById("name");

