function speak(){
    let str = 'Hi, my name is jhon'; // Function Scope
    let name = 'Mauricio' // Function Scope
    console.log(name);
    if(name === 'Mauricio'){
        console.log(`Hello ${name}`);
    }
    // console.log(str);
}
speak();
// console.log(str); str no es variable local