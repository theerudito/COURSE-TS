// GENERICOS
// son codigos reutilizables que funcionan con multiple tipos
// pueden ser funcionales en interfaces o clases

// interface person
interface Person1 {
  id: number;
  name: string;
}

// interface product
interface Product1 {
  id: number;
  name: string;
  price: number;
}

// uso de genericos
// supongamos q tenemos que trabajar con otra entidad y queremos reutilizar el codigo
interface Employee extends Person1 {
  role: string;
}

// geneic en una interface estoy obligando que se implemente en la clase el metodo
interface Data<T> {
  addItem1(newItem: T): void;
}

// clase persona la <T>  <T, M> es una comvencion puede ser cualquier letra y mas de una
// class DataCollections1<T extends Person1 >
// class DataCollections1<T extends Person1 | Product1>
// class DataCollections1<T extends (Person1 | Product1)>
// class DataCollections1<T extends{ id: number; name: string }>
class DataCollections1<T extends { id: number; name: string }>
  implements Data<T>
{
  private items: T[] = [];

  addItem1(newItem: T): void {
    this.items.push(newItem);
  }
  getItem1(): void {
    console.log("List of items", JSON.stringify(this.items));
  }
  getName1(): string[] {
    return this.items.map((item) => item.name);
  }
  getItemById1(id: number): T | undefined {
    return this.items.find((item: T) => item.id === id);
  }
}

// va necesitar un tipo en este caso es Product1
const productCollection1 = new DataCollections1<Product1>();
const new_Data3 = { id: 1, name: "LAPTOP", price: 100 };
productCollection1.addItem1(new_Data3);
productCollection1.getItem1();

const personCollection1 = new DataCollections1<Person1>();
const new_Data1 = { id: 1, name: "Jorge" };
personCollection1.addItem1(new_Data1);
personCollection1.getItem1();

const employeeCollection1 = new DataCollections1<Employee>();
const new_Data4 = { id: 1, name: "Jorge", role: "Developer" };
employeeCollection1.addItem1(new_Data4);
employeeCollection1.getItem1();
