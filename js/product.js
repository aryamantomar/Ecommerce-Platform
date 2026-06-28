const productContainer = document.getElementById("product-details");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

async function fetchProduct(){
    const response = await fetch(

        `https://dummyjson.com/products/${id}`

    );

    const product = await response.json();
    productContainer.innerHTML = `

<img src="${product.thumbnail}" alt="${product.title}">

<div class="details">

<h2>${product.title}</h2>

<p><strong>Price:</strong> $${product.price}</p>

<p><strong>Rating:</strong> ⭐ ${product.rating}</p>

<p><strong>Brand:</strong> ${product.brand}</p>

<p><strong>Category:</strong> ${product.category}</p>

<p><strong>Stock:</strong> ${product.stock}</p>

<p>${product.description}</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

`;
}
function addToCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Product Added!");

}
fetchProduct();