/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);



// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var option = document.createElement('option');
    option.text = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage(cart);
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var itemPicked = document.getElementById('items').value;
  var amountPicked = document.getElementsByTagName('input')[0].value;
  cart.addItem(itemPicked, amountPicked);
  // DONE: suss out the item picked from the select list
  // DONE: get the quantity
  // DONE: using those, add one item to the Cart
} 

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var updateCount = document.getElementById('itemCount');

  updateCount.textContent = ` has ${cart.items.length} items`;
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var itemPicked = document.getElementById('items').value;
  var amountPicked = document.getElementsByTagName('input')[0].value;
  var cartContents = document.getElementById('cartContents');
  cartContents.textContent = `Item: ${itemPicked} quantity: ${amountPicked} `;

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
