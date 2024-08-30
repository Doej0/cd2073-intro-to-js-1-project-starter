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
  let productFound = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      productFound = true;
      const product = products[i];
      let cartItemFound = false;
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].productId === productId) {
          cartItemFound = true;
          cart[j].quantity++;
          break;
        }
      }
      if (!cartItemFound) {
        cart.push({ ...product, quantity: 1 });
      }
      break;
    }
  }
  if (!productFound) {
    console.error(`Sorry a Product with productId ${productId} could not be found.`);
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let productFound = false; // This tracks whether the product was found in the loop
  
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      productFound = true; // Product is found, set to true
      cart[i].quantity++; // Increase the quantity
      break; // Exit the loop once the product is found and updated
    }
  }
  
  if (!productFound) {
    console.error(`Sorry, a Product with productId ${productId} could not be found.`);
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let productFound = false; //prior to finding product set statement to false
  //find the product in the array
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      productFound = true; //Product found
      cart[i].quantity--;
      if (cart[i].quantity === 0) {
        cart.splice(i, 1);  // Remove the product from cart
      }
      break;
    }
  }
  if (!productFound) {
    console.error(`Sorry a Product with productId ${productId} could not be found.`);
      }
    }


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let productFound = false; //prior to finding product set statement to false
  let productIndex = -1; // To store the index of the product if found
  //find the product in the array
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      productFound = true; //Product found
      productIndex = i; // Store the index of the found product
      break; // Exit the loop once found
    }
 }
 if (productFound) {
  cart.splice(productIndex,1); //remove the product from the cart
 } else {
  //if not found
  console.error(`Product with ID ${productId} not found in the cart.`);
 }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal(){
  let totalCost = 0;
  // iterate through the cart
for(let i = 0; i < cart.length; i++ ) {
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

function pay(amount){
  const totalCost = cartTotal();
  const remaining = amount - totalCost;
  
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
