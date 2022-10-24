"use strict";
// NAMESPACES AND MODULES IN TYPESCRIPT
// Namespaces are used to organize code into logical groups and to prevent name collisions.
// Modules are used to organize our code into logical files and to control which parts of our code are accessible to other parts of our code.
var MyNameSpace;
// NAMESPACES AND MODULES IN TYPESCRIPT
// Namespaces are used to organize code into logical groups and to prevent name collisions.
// Modules are used to organize our code into logical files and to control which parts of our code are accessible to other parts of our code.
(function (MyNameSpace) {
  let Taxes;
  (function (Taxes) {
    function calculateIva(price) {
      return price * 0.12 + price;
    }
    Taxes.calculateIva = calculateIva;
    function calculatePenaltyIva(price) {
      return price * 0.15 + price;
    }
    Taxes.calculatePenaltyIva = calculatePenaltyIva;
  })((Taxes = MyNameSpace.Taxes || (MyNameSpace.Taxes = {})));
})(MyNameSpace || (MyNameSpace = {}));
// importar namespace
/// <reference path="namespaces.ts" />
let iva = MyNameSpace.Taxes.calculateIva(1000);
let iva2 = MyNameSpace.Taxes.calculatePenaltyIva(1000);
console.log(iva);
console.log(iva2);
