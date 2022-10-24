// GENERICOS
// son codigos reutilizables que funcionan con multiple tipos
// pueden ser funcionales en interfaces o clases

// interface person
interface Person {
  id: number;
  name: string;
}

// interface product
interface Product {
  id: number;
  name: string;
  price: number;
}

// typeUnion
type dataType = Person | Product;

// clase persona
class DataCollection {
  private items: dataType[] = [];

  addItem(newItem: dataType): void {
    this.items.push(newItem);
  }
  getItem(): void {
    console.log("List of items", JSON.stringify(this.items));
  }
  getName(): string[] {
    return this.items.map((item) => item.name);
  }
  getItemById(id: number): dataType | undefined {
    return this.items.find((item: dataType) => item.id === id);
  }
}

// add item
const personCollection = new DataCollection();
const newData1 = { id: 1, name: "Jorge" };
const newData2 = { id: 2, name: "Erudito" };
personCollection.addItem(newData1);
personCollection.addItem(newData2);
personCollection.getItem();

const productCollection = new DataCollection();
const newData3 = { id: 1, name: "LAPTOP", price: 100 };
const newData4 = { id: 2, name: "MAC", price: 200 };
productCollection.addItem(newData3);
productCollection.addItem(newData4);
