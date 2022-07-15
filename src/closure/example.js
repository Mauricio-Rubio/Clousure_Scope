/*

function moneyBox(coin) {
    let saveCoins = 0;
    saveCoins += coin;
    console.log(`Total: $${saveCoins}`);
}
moneyBox(5);
moneyBox(5); 

*/

function moneyBox() {
  let _saveCoins = 0;

  return function savaMoney(coins) {
    return (_saveCoins += coins);
  };
}

const MauBox = moneyBox();
const DiegoBox = moneyBox();

console.log(MauBox(5));
console.log(MauBox(5));
console.log(MauBox(10));
console.log("-----------");
console.log(DiegoBox(20));
console.log(DiegoBox(10));
console.log(DiegoBox(10));

// Ejemplo de closures asemejando una clase
const contador = (function(){
  let _contador = 0;
  function incrementar() {
      return _contador++;
  }
  function decrementar() {
      return _contador--;
  }

  function getValor() {
    return _contador;
  }

  return {
    incrementar, decrementar, getValor
  }
})();

console.log(contador.getValor());
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.decrementar();
console.log(contador.getValor());