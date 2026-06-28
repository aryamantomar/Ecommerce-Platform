const productsContainer = document.getElementById("products-container");
let products = [];
async function fetchProducts(){
    const response = await fetch(
        "https://dummyjson.com/products?limit=194"
    );
    const data = await response.json();
    products = data.products;
    displayProducts(products);
}
function displayProducts(products){
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">

    <h3>${product.title}</h3>

    <p class="price">$${product.price}</p>

    <p class="rating">
        ⭐ ${product.rating}
    </p>

    <button onclick="viewDetails(${product.id})">
        View Details
    </button>

    <button onclick="addToCart(${product.id})">
        Add to Cart
    </button>
`;
        productsContainer.appendChild(card);
    });

}
fetchProducts();

updateCartCount();
function viewDetails(id){

    window.location.href = `product.html?id=${id}`;

}
function addToCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Product added to cart!");

}
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cart-count").innerText = cart.length;

}
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function(){

    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>

        product.title.toLowerCase().includes(value)

    );

    displayProducts(filtered);

});
const sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", function(){

    let sorted = [...products];

    if(this.value === "low"){

        sorted.sort((a,b)=>a.price-b.price);

    }

    else if(this.value === "high"){

        sorted.sort((a,b)=>b.price-a.price);

    }

    displayProducts(sorted);

});