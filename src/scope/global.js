// Variables
var a; // Declaracion
var b = "b"; // Declaracion y asignacion
b = "bb"; // Reasignacion
var a = "aa"; // Redeclaracion

// Global Scope
var fruit = "Apple"; // Global
function bestFruit(fruit) {
  console.log(fruit);
}
bestFruit(fruit);



function countries() {
  country = "Mexico"; //Variable Global
  console.log(country);
}
countries();
console.log(country);
