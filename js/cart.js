const cartItems = document.getElementById("cart-items");
const totalItems = document.getElementById("total-items");
const totalPrice = document.getElementById("total-price");

async function loadCart() {

    // Get the latest cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    // If cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = "<h2>Your cart is empty.</h2>";
        totalItems.innerText = 0;
        totalPrice.innerText = 0;
        return;
    }

    let total = 0;

    for (let id of cart) {

        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();

        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-card">

                <img src="${product.thumbnail}" alt="${product.title}">

                <div class="cart-info">
                    <h3>${product.title}</h3>

                    <p><strong>Price:</strong> $${product.price}</p>

                    <button class="remove-btn" onclick="removeFromCart(${id})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    }

    totalItems.innerText = cart.length;
    totalPrice.innerText = total.toFixed(2);
}

function removeFromCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.indexOf(id);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

loadCart();