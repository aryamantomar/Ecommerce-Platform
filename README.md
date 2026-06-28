# 🛒 E-Commerce Product Listing Application

A responsive e-commerce web application built using **HTML**, **CSS**, and **JavaScript**. This project demonstrates fetching data from a REST API, displaying products, viewing product details, and managing a shopping cart using **LocalStorage**.

---

## 🚀 Features

### 📋 Product Listing

* Fetches product data from the DummyJSON API.
* Displays products in a responsive grid.
* Shows:

  * Product Image
  * Product Name
  * Price
  * Rating
  * Category
* Search products by title.
* Filter products by category.
* Sort products by price and rating.

### 📦 Product Details

* View complete information about a selected product.
* Displays:

  * Multiple Images
  * Product Title
  * Description
  * Price
  * Brand
  * Category
  * Rating
  * Stock Availability
* Add products to the shopping cart.

### 🛒 Shopping Cart

* Add and remove products.
* Increase or decrease product quantity.
* Automatically updates:

  * Total Items
  * Total Price
  * Bill Summary
* Cart data is stored using LocalStorage.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* LocalStorage

---

## 📂 Project Structure

```
ecommerce-app/
│
├── index.html
├── product.html
├── cart.html
│
├── css/
│   ├── style.css
│   ├── product.css
│   └── cart.css
│
├── js/
│   ├── script.js
│   ├── product.js
│   ├── cart.js
│   └── storage.js
│
├── images/
│
└── README.md
```

---

## 🌐 API Endpoints

### Get All Products

```
https://dummyjson.com/products?limit=194
```

### Get Single Product

```
https://dummyjson.com/products/{id}
```

Example:

```
https://dummyjson.com/products/1
```

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-app.git
```

2. Navigate to the project directory

```bash
cd ecommerce-app
```

3. Open `index.html` in your browser.

No additional installation or dependencies are required.

---

## 📸 Screens

* Home Page (Product Listing)
* Product Details Page
* Shopping Cart Page

---

## 📚 Learning Objectives

This project demonstrates:

* Working with REST APIs
* JavaScript Fetch API
* DOM Manipulation
* Event Handling
* LocalStorage
* Responsive Web Design
* Dynamic Page Navigation
* Cart Management Logic

---

## 📈 Future Improvements

* User Authentication
* Wishlist
* Checkout Page
* Payment Gateway Integration
* Product Reviews
* Dark Mode
* Pagination
* Responsive Navigation Menu

---

## 👨‍💻 Author

**Aryaman Tomar**

Built as part of a Full Stack Web Development assignment.

---

## 📄 License

This project is intended for educational and learning purposes.
