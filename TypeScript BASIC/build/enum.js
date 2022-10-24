"use strict";
// ENUM
// los enum nos permiten definir un conjunto de constantes con nombre
// los enum solo pueden ser numeros y string
// si ya empezamos con enum no podemos cambiar el tipo de dato
var Color;
(function (Color) {
    Color[Color["User"] = 1] = "User";
    Color["Admin"] = "Jorge";
    Color[Color["SuperAdmin"] = 2] = "SuperAdmin";
})(Color || (Color = {}));
console.log(Color.User); // 0
// OBJECTS
const roles = {
    User: 1,
    Admin: "Jorge",
    SuperAdmin: true,
};
console.log(roles.SuperAdmin); // true
