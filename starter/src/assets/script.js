//helper functions

//find the products using the array, productId and .find() 

function getProductByIdFromList(productId,productList) {
  return productList.find((product) => product.productId === productId);
}

//remove products using the array, splice and index

function removeProductByIndex(index,array){
  array.splice(index, 1);
}

//increase the quantity of the product
function increaseProductQuantity(product) {
  product.quantity++;
}

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
  {
    name: "cherry",
    price: 2,
    quantity: 0,
    productId: 1,
    image: "../images/cherry.jpg"
  },

  {
    name: "orange",
    price: 2,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg"
  },

  {
    name: "strawberry",
    price: 4,
    quantity: 0,
    productId: 3,
    image: "../images/strawberry.jpg"
  }
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = getProductByIdFromList(productId,products) //helper function :)

  let cartItem = getProductByIdFromList(productId, cart);

  if (cartItem) {
    increaseProductQuantity(cartItem); //helper function increasing the quantity in the cart
  } else {                      //pushes product to the cart
    product.quantity = 1;
    cart.push(product);
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  //find product in cart by its productId
  const cartItem = getProductByIdFromList(productId, cart);

  //if product is in cart, increase its quantity by 1
  if (cartItem) {
    increaseProductQuantity(cartItem);
  } 
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const cartItem = getProductByIdFromList(productId, cart);

  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      removeProductByIndex(cart.indexOf(cartItem), cart); //helper function + indexof removes product from cart if quantity = 0
    }
  } 
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const cartItemIndex = cart.findIndex(item => item.productId === productId); //finds index of product

  if (cartItemIndex > -1) { //checking for product in the cart
    cart[cartItemIndex].quantity = 0; // Reset the quantity in the products array
    removeProductByIndex(cartItemIndex, cart); //removes product from the cart
  } 
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let totalCost = 0;
  // iterate through the cart
  for (let i = 0; i < cart.length; i++) {
    // calculate the total of each item
    totalCost += cart[i].price * cart[i].quantity;

  }
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  while (cart.length > 0) {
    cart.pop();
  }
}
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
let totalPaid = 0

function pay(amount) {
  //add the amount paid to the totalpaid
  totalPaid += amount;
  
  //calculate the remaining amount after subtracting the cart total
  let remaining = totalPaid - cartTotal()
  
  //check if remaining amount is greater than or = 0
  if (remaining >= 0 ){
    //if so, reset total paid to 0
    totalPaid =0
    emptyCart()
  }
//return remaining balance
  return remaining;

}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  // //   /* Uncomment the following line if completing the currency converter bonus */
  // //   // currency
}
