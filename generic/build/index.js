"use strict";
// GENERICOS
// son codigos reutilizables que funcionan con multiple tipos
// pueden ser funcionales en interfaces o clases
// clase persona
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItem() {
        console.log("List of items", JSON.stringify(this.items));
    }
    getName() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
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
