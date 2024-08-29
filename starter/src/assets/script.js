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
  cherry = {
    name: "cherry",
    price: 2,
    quantity: 0,
    productId: 1,
    image: "../images/cherry.jpg"
  },

  orange = {
    name: "orange",
    price: 2,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg"
  },

  strawberry = {
    name: "strawberry",
    price: 4                     ,
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
  let productFound = false; //prior to finding product set statement to false
  //using 1st loop to find the product in the array
  for(let i = 0; i < products.length; i++) {
    if(products[i].productId === productId) {
      productFound = true; //if found change statement to true
      const product = products[i]; //now we will check to see if product is in cart w/additonal loop and boolean
      let cartItemFound = false;
      for(let j = 0; j < cart.length; j++){
        if(cart[j].productId === productId){
          cartItemFound = true;
          cart[j].quantity ++;
          break; //if found, exit the loop
        }
      }
      if(!cartItemFound){ //if not found in the cart add it by pushing to cart array
        cart.push({...product,quantity:1}); //use spread operator to expand product object and update quantity
        break; //exit 1st loop if product was found
      }
    }//if product doesn't exist send error message
    if(!productFound){
      console.error(`Sorry a Product with productId ${productId}could not be found.`);
    }
  }
 };                      
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
// function increaseQuantity(productId){

// }
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
// function decreaseQuantity(productId) {

// }
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
// function removeProductFromCart(productId) {

// }
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
// function cartTotal(){

// }
/* Create a function called emptyCart that empties the products from the cart */
// function emptyCart(){

// }
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
// function pay(amount){

// }
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
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
