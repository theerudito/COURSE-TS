// ENUM
// los enum nos permiten definir un conjunto de constantes con nombre
// los enum solo pueden ser numeros y string
// si ya empezamos con enum no podemos cambiar el tipo de dato
enum Color {
  User = 1,
  Admin = "Jorge",
  SuperAdmin = 2,
}
console.log(Color.User); // 0

// OBJECTS
const roles = {
  User: 1,
  Admin: "Jorge",
  SuperAdmin: true,
}
console.log(roles.SuperAdmin); // true