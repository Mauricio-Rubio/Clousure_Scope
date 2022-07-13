var firstName; //Undefined
firstName = 'Mauricio'
console.log(firstName);
var lastName = 'Haro' 
var lastName = 'Rubio'
console.log(lastName);

let fruit = 'Apple'
// let fruit = 'Orange' No podemos redeclarar variables let

const dog = 'Milo'
//  dog = 'Zimba'
// const dog = 'Zimba' No podemos redeclarar ni reasignar constantes

const vehiculos = []; // En este caso la constante apunta a la referencia del arreglo
// por lo que modificar el arreglo no da un typeError, la referencia sigue siendo la misma
vehiculos.push('Nissan March')
console.log(vehiculos);
vehiculos.pop();
console.log(vehiculos);