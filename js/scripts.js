// function myFunction(){
//      var name = document.getElementById('submitContactForm').value;
//      alert("Thank you" + name + "for the message");
//      console.log(name);
//  }

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementsByName('name')[0].value;
    alert("Thank you " + name + " for the message.");
    console.log("hellooo");
});



// document.addEventListener("DOMContentLoaded", function() {
//     var modal = document.getElementById("cart-modal");
//     var searchIcon1 = document.getElementById("search-icon");
//     var continueButton = document.querySelector(".contin-button");

//     function myFunction {
//         modal.style.display = "block";
//         loadCartItems();
//     }

//     continueButton.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     function loadCartItems() {
//         var cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = ""; // Clear previous items

//         // Example cart items (this would usually come from a server or local storage)
//         var cartItems = [
//             { name: "Book1", price: "R25,000.00" },
//             { name: "Item 2", price: "$15.00" },
//             { name: "Item 3", price: "$20.00" },
//         ];

//         cartItems.forEach(function(item) {
//             var itemDiv = document.createElement("div");
//             itemDiv.className = "cart-item";
//             itemDiv.innerHTML = `<p>${item.name} - ${item.price}</p>`;
//             cartItemsContainer.appendChild(itemDiv);
//         });
//     }


//     cartButton.onclick = function() {
//         modal.style.display = "block";
//         loadCartItems();
//     }
  
//     closeButton.onclick = function() {
//         modal.style.display = "none";
//     }
  
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
  
//     document.querySelectorAll('.buttonFlight').forEach(function(button) {
//         button.onclick = function() {
//             var itemName = this.getAttribute('data-name');
//             var itemPrice = this.getAttribute('data-price');
//             cart.push({ name: itemName, price: itemPrice });
//             updateCartCount();
//         }
//     });
  
//     updateCartCount();
//   });



// document.addEventListener("DOMContentLoaded", function() {
//     var cart = [];
//     var cartCount = document.getElementById("cart-count");
//     var modal = document.getElementById("cart-modal");
//     var cartButton = document.getElementById("cart-button");
//     var closeButton = document.querySelector(".close-button");

//     function updateCartCount() {
//         cartCount.textContent = cart.length;
//     }

//     function loadCartItems() {
//         var cartItemsContainer = document.getElementById("cart-items");
//         cartItemsContainer.innerHTML = ""; // Clear previous items

//         cart.forEach(function(item) {
//             var itemDiv = document.createElement("div");
//             itemDiv.className = "cart-item";
//             itemDiv.innerHTML = `<p>${item.name} - ${item.price}</p>`;
//             cartItemsContainer.appendChild(itemDiv);
//         });
//     }

//     cartButton.onclick = function() {
//         modal.style.display = "block";
//         loadCartItems();
//     }

//     closeButton.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     document.querySelectorAll('.book-now').forEach(function(button) {
//         button.onclick = function() {
//             var itemName = this.getAttribute('data-name');
//             var itemPrice = this.getAttribute('data-price');
//             cart.push({ name: itemName, price: itemPrice });
//             updateCartCount();
//         }
//     });

//     updateCartCount();
// });


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}