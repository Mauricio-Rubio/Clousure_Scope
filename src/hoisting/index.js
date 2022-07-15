// Hoisting -> Elevacion

// var milo = 'undefined' debido al hoisting
console.log(milo);

var milo = 'Milaneso'
console.log(milo);

milaneso();
function milaneso() {
    console.log(`El perro que nunca se cansa es ${perro}`);
}

var perro = 'Milongito';