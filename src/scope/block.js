function ladrar() {
  if (true) {
    var milo = "Huaff"; //Global Scope
    let zimba = "Huoof"; //Block Scope
    const simon = "Huff"; //Block Scope
    console.log(zimba);
    console.log(simon);
  }
  console.log(milo);
}
ladrar();
