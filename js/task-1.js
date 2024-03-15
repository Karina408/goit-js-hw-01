function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 300));
console.log(makeTransaction(10, 150));
console.log(makeTransaction(8, 500));
