// podemos crear muchas interfaces y podemos extenderlas
interface Person {
  id: number;
  name: string;
}

interface Employee extends Person {
  dep: string;
}

interface Customer extends Person {
  country: string;
}

const emp: Employee = {
  id: 1,
  name: "John",
  dep: "IT",
};

// implementar una interface en una clase
interface Animal {
  name: string;
  getDogs: () => void;
  getCats?: () => void;
}

class Zoo implements Animal {
  name = "Zeus";
  getDogs() {
    console.log("dogs");
  }
  getCats() {
    console.log("cats");
  }
}
