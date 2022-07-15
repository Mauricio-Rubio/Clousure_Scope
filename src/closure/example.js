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
  let saveCoins = 0;

  return function savaMoney(coins) {
    return (saveCoins += coins);
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
