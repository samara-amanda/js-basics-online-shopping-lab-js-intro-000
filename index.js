var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1;
 // write your code here
  var food = {
    itemName: item ,
    itemPrice: price
  }
  cart.push(food)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  for (let i = 0; i = cart.length;) {
    console.log("Your shopping cart is empty.")
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
