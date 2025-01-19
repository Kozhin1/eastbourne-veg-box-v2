// Product data
const products = [
  {
    id: 1,
    name: 'Small Veg Box',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500',
    description: 'Perfect for 1-2 people. A weekly selection of seasonal vegetables.',
    available: true
  },
  {
    id: 2,
    name: 'Medium Veg Box',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500',
    description: 'Ideal for 2-4 people. A diverse mix of fresh, local vegetables.',
    available: true
  },
  {
    id: 3,
    name: 'Large Veg Box',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500',
    description: 'Great for families. Abundant variety of seasonal produce.',
    available: true
  },
  {
    id: 4,
    name: 'Small Fruit Box',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500',
    description: 'Perfect for 1-2 people. A selection of seasonal fruits.',
    available: true
  },
  {
    id: 5,
    name: 'Medium Fruit Box',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500',
    description: 'Ideal for 2-4 people. A diverse mix of fresh, seasonal fruits.',
    available: true
  },
  {
    id: 6,
    name: 'Large Fruit Box',
    price: 37.99,
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500',
    description: 'Great for families. Abundant variety of seasonal fruits.',
    available: true
  },
  {
    id: 7,
    name: 'Mixed Fruit & Veg Box - Small',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500',
    description: 'Perfect blend of seasonal fruits and vegetables for 1-2 people.',
    available: true
  },
  {
    id: 8,
    name: 'Mixed Fruit & Veg Box - Large',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=500',
    description: 'Our biggest mixed box, perfect for families who love both fruits and vegetables.',
    available: true
  }
];

// Shopping cart state
let cart = [];

// Initialize the app
function initApp() {
  document.querySelector('#app').innerHTML = `
    <header class="header">
      <nav class="nav-container" aria-label="Main navigation">
        <div class="logo" role="banner">EastbourneVegBox</div>
        <ul class="nav-menu" role="menubar">
          <li role="none"><a href="#home" class="active" role="menuitem">Home</a></li>
          <li role="none"><a href="#products" role="menuitem">Our Boxes</a></li>
          <li role="none"><a href="#market" role="menuitem">Market Days</a></li>
          <li role="none"><a href="#about" role="menuitem">About Us</a></li>
        </ul>
        <div class="cart-icon" onclick="toggleCart()" role="button" aria-label="Shopping cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-count" aria-label="Items in cart">0</span>
        </div>
        <button class="hamburger" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </header>

    <main class="main-content" role="main">
      <section class="hero" aria-label="Welcome section">
        <div class="hero-content">
          <h1>Fresh Local Produce<br>Delivered to Your Door</h1>
          <p>Family-run business serving Eastbourne with the finest seasonal fruits and vegetables</p>
          <a href="#products" class="cta-button" role="button">Shop Our Boxes</a>
        </div>
      </section>

      <section class="features" aria-label="Key features">
        <div class="feature">
          <i class="fas fa-leaf" aria-hidden="true"></i>
          <h3>100% Local</h3>
          <p>Supporting local farmers and reducing food miles</p>
        </div>
        <div class="feature">
          <i class="fas fa-truck" aria-hidden="true"></i>
          <h3>Home Delivery</h3>
          <p>Convenient delivery to your doorstep</p>
        </div>
        <div class="feature">
          <i class="fas fa-store" aria-hidden="true"></i>
          <h3>Market Days</h3>
          <p>Find us at Eastbourne Market</p>
        </div>
      </section>

      <section id="products" class="products" aria-label="Product listings">
        <h2>Our Fresh Produce Boxes</h2>
        <div class="product-grid" role="list">
          ${renderProducts()}
        </div>
      </section>

      <section id="market" class="market-info" aria-label="Market information">
        <h2>Visit Us at Eastbourne Market</h2>
        <div class="market-days">
          <div class="market-day">
            <h3>Wednesday</h3>
            <p>8:00 AM - 2:00 PM</p>
          </div>
          <div class="market-day">
            <h3>Saturday</h3>
            <p>8:00 AM - 4:00 PM</p>
          </div>
          <div class="market-day">
            <h3>Sunday</h3>
            <p>10:00 AM - 3:00 PM</p>
          </div>
        </div>
      </section>

      <section id="about" class="about-section" aria-label="About us">
        <div class="about-content">
          <h2>Our Story</h2>
          <div class="about-text">
            <p>EastbourneVegBox started as a humble stall at the Eastbourne Market, where we built strong relationships with local farmers and customers who shared our passion for fresh, quality produce. What began as a market stall has grown into a beloved local business, and we're now excited to bring our carefully selected fruits and vegetables directly to your doorstep.</p>
            <p>While you can still find us at the Eastbourne Market, where we continue to serve our wonderful community, we're expanding our services to offer convenient home delivery options. This allows us to share our love for fresh, local produce with even more families in the Eastbourne area.</p>
            <p>Our commitment remains the same: providing the freshest seasonal produce while supporting local farmers and reducing food miles. Every box we deliver carries with it the same care and quality that our market customers have come to know and trust.</p>
          </div>
        </div>
      </section>
    </main>

    <div class="cart-sidebar" id="cart-sidebar" role="complementary" aria-label="Shopping cart">
      <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="close-cart" onclick="toggleCart()" aria-label="Close cart">&times;</button>
      </div>
      <div class="cart-items" role="list"></div>
      <div class="cart-total"></div>
    </div>

    <div class="checkout-modal" id="checkout-modal" role="dialog" aria-label="Checkout form">
      <div class="checkout-content">
        <h2>Checkout</h2>
        <form id="checkout-form" onsubmit="handleCheckout(event)" aria-label="Order details">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required aria-required="true">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required aria-required="true">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required aria-required="true">
          </div>
          <div class="form-group">
            <label for="address">Delivery Address</label>
            <textarea id="address" name="address" required aria-required="true"></textarea>
          </div>
          <div class="form-group">
            <label>Payment Method</label>
            <div class="payment-options" role="radiogroup" aria-label="Payment options">
              <label>
                <input type="radio" name="payment" value="cash" required aria-required="true">
                Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" value="card" required aria-required="true">
                Card on Delivery
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="notes">Delivery Notes (Optional)</label>
            <textarea id="notes" name="notes" aria-required="false"></textarea>
          </div>
          <button type="submit" class="checkout-button">Place Order</button>
        </form>
      </div>
    </div>

    <nav class="bottom-nav" role="navigation" aria-label="Mobile navigation">
      <a href="#home" aria-label="Home"><i class="fas fa-home" aria-hidden="true"></i></a>
      <a href="#products" aria-label="Our Boxes"><i class="fas fa-box" aria-hidden="true"></i></a>
      <a href="#" onclick="toggleCart()" aria-label="Cart"><i class="fas fa-shopping-cart" aria-hidden="true"></i></a>
      <a href="#market" aria-label="Market Days"><i class="fas fa-store" aria-hidden="true"></i></a>
    </nav>
  `;

  initEventListeners();
}

// Render products with improved accessibility
function renderProducts() {
  return products.map(product => `
    <div class="product-card" role="listitem">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price" aria-label="Price">£${product.price.toFixed(2)}</p>
        <p class="description">${product.description}</p>
        <button 
          onclick="addToCart(${product.id})"
          class="add-to-cart"
          ${!product.available ? 'disabled' : ''}
          aria-label="${product.available ? 'Add ' + product.name + ' to cart' : product.name + ' out of stock'}"
        >
          ${product.available ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
    showNotification('Added to cart!');
    updateCartCount();
  }
}

function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cart.length;
}

function updateCart() {
  const cartItems = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" role="listitem">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>£${item.price.toFixed(2)}</p>
      </div>
      <button onclick="removeFromCart(${item.id})" class="remove-item" aria-label="Remove ${item.name} from cart">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.innerHTML = `
    <div class="total">
      <span>Total:</span>
      <span>£${total.toFixed(2)}</span>
    </div>
    <button onclick="showCheckout()" class="checkout-button">Proceed to Checkout</button>
  `;
}

function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    cart.splice(index, 1);
    updateCart();
    updateCartCount();
    showNotification('Item removed from cart');
  }
}

function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.toggle('active');
}

function showCheckout() {
  const modal = document.getElementById('checkout-modal');
  modal.classList.add('active');
  toggleCart();
}

function handleCheckout(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderData = {
    customer: {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
    },
    payment: formData.get('payment'),
    notes: formData.get('notes'),
    items: cart.map(item => ({
      name: item.name,
      price: item.price
    })),
    total: cart.reduce((sum, item) => sum + item.price, 0)
  };

  // Send order email using formsubmit.co
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://formsubmit.co/your-email@example.com'; // Replace with your email

  // Add order details to form
  const orderDetails = document.createElement('input');
  orderDetails.type = 'hidden';
  orderDetails.name = 'order';
  orderDetails.value = JSON.stringify(orderData, null, 2);
  form.appendChild(orderDetails);

  document.body.appendChild(form);
  form.submit();

  // Clear cart and close modal
  cart = [];
  updateCart();
  updateCartCount();
  document.getElementById('checkout-modal').classList.remove('active');
  showNotification('Order placed successfully! We will contact you shortly.');
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.setAttribute('role', 'alert');
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function initEventListeners() {
  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      navMenu.classList.remove('active');
    }
  });

  // Close modal when clicking outside
  const modal = document.getElementById('checkout-modal');
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Make functions available globally
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.toggleCart = toggleCart;
  window.showCheckout = showCheckout;
  window.handleCheckout = handleCheckout;
}

// Initialize the app
initApp();