const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
const products = [
    {
        id: 1,
        name: "Mezcla original 200 g ¥ 500",
        price: 500,
    },
    {
        id: 2,
        name: "Mezcla original 500 g ¥ 900",
        price: 900,
    },
    {
        id: 3,
        name: "Mezcla especial 200 g ¥ 700",
        price: 700,
    },
    {
        id: 4,
        name: "Mezcla especial 500 g, 1.200 yenes",
        price: 1200,
    },

];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  };
  purchases.push(purchase);
  window.alert(`${display()}\n小計${subtotal()}円`);
}

function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].price}円が${purchases[i].number}点\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}