"use strict";
// GENERICOS
// son codigos reutilizables que funcionan con multiple tipos
// pueden ser funcionales en interfaces o clases
// clase persona la <T>  <T, M> es una comvencion puede ser cualquier letra y mas de una
// class DataCollections1<T extends Person1 >
// class DataCollections1<T extends Person1 | Product1>
// class DataCollections1<T extends (Person1 | Product1)>
// class DataCollections1<T extends{ id: number; name: string }>
class DataCollections1 {
    constructor() {
        this.items = [];
    }
    addItem1(newItem) {
        this.items.push(newItem);
    }
    getItem1() {
        console.log("List of items", JSON.stringify(this.items));
    }
    getName1() {
        return this.items.map((item) => item.name);
    }
    getItemById1(id) {
        return this.items.find((item) => item.id === id);
    }
}
// va necesitar un tipo en este caso es Product1
const productCollection1 = new DataCollections1();
const new_Data3 = { id: 1, name: "LAPTOP", price: 100 };
productCollection1.addItem1(new_Data3);
productCollection1.getItem1();
const personCollection1 = new DataCollections1();
const new_Data1 = { id: 1, name: "Jorge" };
personCollection1.addItem1(new_Data1);
personCollection1.getItem1();
const employeeCollection1 = new DataCollections1();
const new_Data4 = { id: 1, name: "Jorge", role: "Developer" };
employeeCollection1.addItem1(new_Data4);
employeeCollection1.getItem1();
