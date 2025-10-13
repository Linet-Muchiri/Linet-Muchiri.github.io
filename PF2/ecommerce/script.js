const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "Electronics", image: "images/headphones.png" },
  { id: 2, name: "Running Shoes", price: 89.99, category: "Sportswear", image: "images/shoes.png" },
  { id: 3, name: "Coffee Maker", price: 29.99, category: "Home", image: "images/coffeemaker.png" },
  // Add more items...
];

let cartCount = 0;

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const cartDisplay = document.getElementById('cart-count');

// Populate categories
const categories = [...new Set(products.map(p => p.category))];
categories.forEach(cat =>
  categoryFilter.appendChild(new Option(cat, cat))
);

// Render products
function renderProducts(list) {
  productGrid.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h4>${p.name}</h4>
        <p>$${p.price.toFixed(2)}</p>
      </div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

// Add to cart
function addToCart(id) {
  cartCount++;
  cartDisplay.textContent = cartCount;
}

// Filters
function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    p.name.toLowerCase().includes(search)
  );
  renderProducts(filtered);
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

// Initial render
renderProducts(products);
