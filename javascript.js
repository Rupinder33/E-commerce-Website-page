// Define products with images
const products = [
    { id: 1, name: 'Anarkali', price: 10.00, image: 'anarkali.jpg' },
    { id: 2, name: 'Gown', price: 20.00, image: 'bottlegreen.webp' },
    { id: 3, name: 'Dhoti Kurta', price: 35.99, image: 'Dhoti Kurta.webp' },
    { id: 4, name: 'Kurta', price: 30.99, image: 'kurta.jpg'},
    { id: 5, name: 'Lehnga Choli', price: 25.99, image: 'lehnga choli.jpg'},
    { id: 6, name: 'Lehnga', price: 15.99, image: 'lehnga.jpg'},
    { id: 7, name: 'Kurta', price: 20.99, image: 'orange.webp'},
    { id: 8, name: 'Sherwani', price: 15.99, image: 'sherwani.jpg'},
    { id: 9, name: 'Frock', price: 15.99, image: 'white frock.webp'}
   
];

let cart = [];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productDiv);
    });
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    const totalCost = document.getElementById('total-cost');
    totalCost.textContent = calculateTotal().toFixed(2);
}


function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}


displayProducts();
