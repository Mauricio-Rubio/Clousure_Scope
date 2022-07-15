function saludar() {
  let name = "Mauricio";

  return function display() {
    return `Hola ${name}`;
  };
}

let str  =saludar();
console.log(str);
console.log(str());
