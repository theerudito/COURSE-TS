// NAMESPACES AND MODULES IN TYPESCRIPT
// Namespaces are used to organize code into logical groups and to prevent name collisions.
// Modules are used to organize our code into logical files and to control which parts of our code are accessible to other parts of our code.

namespace MyNameSpace {
  export namespace Taxes {
    export function calculateIva(price: number): number {
      return price * 0.12 + price;
    }
    export function calculatePenaltyIva(price: number): number {
      return price * 0.15 + price;
    }
  }
}
