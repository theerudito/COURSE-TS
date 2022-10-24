"use strict";
// THE CLASS => used to organize the code
// control access to the class public, private, protected
// public => can be accessed from anywhere
// private => can be accessed only from inside the class
// protected => can be accessed from inside the class and from the class that extends it
// automatically code
// EXAMPLE 1
class Employee {
    // constructor
    constructor(id, name, dep) {
        this.id = id;
        this.name = name;
        this.dep = dep;
        this.showInfo();
    }
    // methods
    showInfo() {
        console.log(`id: ${this.id}, name: ${this.name}, dep: ${this.dep}`);
    }
}
const newPersona = new Employee(1, "John", "IT");
console.log(newPersona);
// EXAMPLE 2
// automatically code typescript
class Employee2 {
    // constructor
    constructor(id, name, dep) {
        this.id = id;
        this.name = name;
        this.dep = dep;
        this.showInfo();
    }
    // methods
    showInfo() {
        console.log(`id: ${this.id}, name: ${this.name}, dep: ${this.dep}`);
    }
}
const newPersona2 = new Employee2(1, "John", "IT");
console.log(newPersona);
// EXAMPLE 3
// used methods protected
class Person {
    constructor() {
        this.zona = "Latam";
        this.city = "San Francisco";
        this.country = "USA";
    }
    greet() {
        console.log("Hello");
    }
}
class Jefe extends Person {
    constructor(city) {
        super();
        this.city = city;
        this.shoData();
    }
    shoData() {
        this.city;
        console.log(this.zona, this.city);
    }
}
const jefe = new Jefe("John");
jefe.greet();
