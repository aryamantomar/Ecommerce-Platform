const cartItems = document.getElementById("cart-items");

const totalItems = document.getElementById("total-items");

const totalPrice = document.getElementById("total-price");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadCart(){

    cartItems.innerHTML="";

    let total=0;

    for(let id of cart){

        const response=await fetch(
            `https://dummyjson.com/products/${id}`
        );

        const product=await response.json();

        total+=product.price;

        cartItems.innerHTML+=`

        <div class="cart-card">

        <img src="${product.thumbnail}">

        <div>

        <h3>${product.title}</h3>

        <p>$${product.price}</p>

        </div>

        </div>

        `;

    }

    totalItems.innerText=cart.length;

    totalPrice.innerText=total;

}
loadCart();