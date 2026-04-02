const products = [
  { id: 'cake-chocolate-truffle', name: 'Chocolate Truffle Cake', category: 'Cakes', price: 250, unit: '250g', calories: 420, tags: ['Chocolate', 'Celebration'] },
  { id: 'cake-black-forest', name: 'Black Forest Cake', category: 'Cakes', price: 230, unit: '250g', calories: 390, tags: ['Creamy', 'Celebration'] },
  { id: 'cake-white-forest', name: 'White Forest Cake', category: 'Cakes', price: 240, unit: '250g', calories: 380, tags: ['Creamy', 'Classic'] },
  { id: 'cake-pineapple', name: 'Pineapple Cake', category: 'Cakes', price: 220, unit: '250g', calories: 340, tags: ['Fruit', 'Budget'] },
  { id: 'cake-butterscotch', name: 'Butterscotch Cake', category: 'Cakes', price: 230, unit: '250g', calories: 360, tags: ['Nutty', 'Celebration'] },
  { id: 'cake-red-velvet', name: 'Red Velvet Cake', category: 'Cakes', price: 350, unit: '250g', calories: 450, tags: ['Premium', 'Creamy'] },
  { id: 'cake-coffee-mocha', name: 'Coffee / Mocha Cake', category: 'Cakes', price: 320, unit: '250g', calories: 410, tags: ['Coffee', 'Premium'] },
  { id: 'cake-caramel-crunch', name: 'Caramel Crunch Cake', category: 'Cakes', price: 330, unit: '250g', calories: 430, tags: ['Caramel', 'Premium'] },
  { id: 'cake-chocolate-almond', name: 'Chocolate Almond Cake', category: 'Cakes', price: 340, unit: '250g', calories: 460, tags: ['Chocolate', 'Nutty'] },
  { id: 'cake-pineapple-coconut', name: 'Pineapple Coconut Cake', category: 'Cakes', price: 320, unit: '250g', calories: 370, tags: ['Fruit', 'Tropical'] },
  { id: 'cake-chocolate-mud', name: 'Chocolate Mud Cake', category: 'Cakes', price: 380, unit: '250g', calories: 490, tags: ['Chocolate', 'Premium'] },
  { id: 'cake-dutch-chocolate', name: 'Dutch Chocolate Cake', category: 'Cakes', price: 400, unit: '250g', calories: 500, tags: ['Chocolate', 'Luxury'] },
  { id: 'cake-kitkat', name: 'KitKat Cake', category: 'Cakes', price: 450, unit: '250g', calories: 520, tags: ['Chocolate', 'Kids'] },
  { id: 'cake-oreo', name: 'Oreo Cake', category: 'Cakes', price: 400, unit: '250g', calories: 500, tags: ['Chocolate', 'Kids'] },
  { id: 'cake-nutella', name: 'Nutella Cake', category: 'Cakes', price: 480, unit: '250g', calories: 540, tags: ['Chocolate', 'Luxury'] },
  { id: 'cake-ferrero-rocher', name: 'Ferrero Rocher Cake', category: 'Cakes', price: 500, unit: '250g', calories: 560, tags: ['Chocolate', 'Luxury'] },
  { id: 'cake-rasmalai', name: 'Rasmalai Cake', category: 'Cakes', price: 450, unit: '250g', calories: 470, tags: ['Fusion', 'Premium'] },
  { id: 'cake-caramel-specialty', name: 'Caramel Specialty Cake', category: 'Cakes', price: 350, unit: '250g', calories: 450, tags: ['Caramel', 'Premium'] },

  { id: 'pastry-chocolate', name: 'Chocolate Pastry', category: 'Pastries', price: 90, unit: 'Per Piece', calories: 250, tags: ['Chocolate', 'Budget'] },
  { id: 'pastry-black-forest', name: 'Black Forest Pastry', category: 'Pastries', price: 80, unit: 'Per Piece', calories: 230, tags: ['Creamy', 'Budget'] },
  { id: 'pastry-butterscotch', name: 'Butterscotch Pastry', category: 'Pastries', price: 85, unit: 'Per Piece', calories: 235, tags: ['Nutty'] },
  { id: 'pastry-pineapple', name: 'Pineapple Pastry', category: 'Pastries', price: 80, unit: 'Per Piece', calories: 215, tags: ['Fruit'] },
  { id: 'pastry-red-velvet', name: 'Red Velvet Pastry', category: 'Pastries', price: 130, unit: 'Per Piece', calories: 290, tags: ['Premium'] },
  { id: 'pastry-vanilla-cream', name: 'Vanilla Cream Pastry', category: 'Pastries', price: 75, unit: 'Per Piece', calories: 210, tags: ['Creamy'] },
  { id: 'pastry-strawberry', name: 'Strawberry Pastry', category: 'Pastries', price: 100, unit: 'Per Piece', calories: 240, tags: ['Fruit'] },
  { id: 'pastry-fresh-fruit', name: 'Fresh Fruit Pastry', category: 'Pastries', price: 120, unit: 'Per Piece', calories: 220, tags: ['Fruit', 'Balanced'] },
  { id: 'pastry-blueberry', name: 'Blueberry Pastry', category: 'Pastries', price: 130, unit: 'Per Piece', calories: 255, tags: ['Fruit', 'Premium'] },
  { id: 'pastry-coffee', name: 'Coffee / Mocha Pastry', category: 'Pastries', price: 110, unit: 'Per Piece', calories: 265, tags: ['Coffee'] },
  { id: 'pastry-rainbow', name: 'Rainbow Pastry', category: 'Pastries', price: 140, unit: 'Per Piece', calories: 300, tags: ['Kids', 'Premium'] },
  { id: 'pastry-choco-crunch', name: 'Choco Crunch Pastry', category: 'Pastries', price: 120, unit: 'Per Piece', calories: 280, tags: ['Chocolate'] },
  { id: 'pastry-ferrero', name: 'Ferrero Rocher Pastry', category: 'Pastries', price: 150, unit: 'Per Piece', calories: 320, tags: ['Luxury', 'Chocolate'] },

  { id: 'donut-classic', name: 'Classic Donut', category: 'Donuts', price: 60, unit: 'Per Piece', calories: 190, tags: ['Budget'] },
  { id: 'donut-sugar-glazed', name: 'Sugar Glazed Donut', category: 'Donuts', price: 70, unit: 'Per Piece', calories: 210, tags: ['Classic'] },
  { id: 'donut-chocolate-glazed', name: 'Chocolate Glazed Donut', category: 'Donuts', price: 90, unit: 'Per Piece', calories: 240, tags: ['Chocolate'] },
  { id: 'donut-strawberry-glazed', name: 'Strawberry Glazed Donut', category: 'Donuts', price: 90, unit: 'Per Piece', calories: 230, tags: ['Fruit'] },
  { id: 'donut-caramel-glazed', name: 'Caramel Glazed Donut', category: 'Donuts', price: 95, unit: 'Per Piece', calories: 250, tags: ['Caramel'] },
  { id: 'donut-vanilla-cream', name: 'Vanilla Cream Donut', category: 'Donuts', price: 100, unit: 'Per Piece', calories: 260, tags: ['Creamy'] },
  { id: 'donut-chocolate-cream', name: 'Chocolate Cream Filled Donut', category: 'Donuts', price: 120, unit: 'Per Piece', calories: 285, tags: ['Chocolate'] },
  { id: 'donut-custard', name: 'Custard Filled Donut', category: 'Donuts', price: 110, unit: 'Per Piece', calories: 270, tags: ['Creamy'] },
  { id: 'donut-strawberry-filled', name: 'Strawberry Filled Donut', category: 'Donuts', price: 120, unit: 'Per Piece', calories: 270, tags: ['Fruit'] },
  { id: 'donut-blueberry-filled', name: 'Blueberry Filled Donut', category: 'Donuts', price: 130, unit: 'Per Piece', calories: 275, tags: ['Fruit'] },
  { id: 'donut-nutella-filled', name: 'Nutella Filled Donut', category: 'Donuts', price: 150, unit: 'Per Piece', calories: 320, tags: ['Chocolate', 'Luxury'] },

  { id: 'croissant-butter', name: 'Butter Croissant', category: 'Croissants', price: 80, unit: 'Per Piece', calories: 230, tags: ['Classic'] },
  { id: 'croissant-chocolate', name: 'Chocolate Croissant', category: 'Croissants', price: 120, unit: 'Per Piece', calories: 290, tags: ['Chocolate'] },
  { id: 'croissant-cheese', name: 'Cheese Croissant', category: 'Croissants', price: 130, unit: 'Per Piece', calories: 300, tags: ['Savory'] },
  { id: 'croissant-almond', name: 'Almond Croissant', category: 'Croissants', price: 150, unit: 'Per Piece', calories: 310, tags: ['Nutty'] },

  { id: 'brownie-fudge', name: 'Chocolate / Fudge Brownie', category: 'Brownies', price: 100, unit: 'Per Piece', calories: 280, tags: ['Chocolate'] },
  { id: 'brownie-walnut', name: 'Walnut Brownie', category: 'Brownies', price: 130, unit: 'Per Piece', calories: 320, tags: ['Nutty'] },
  { id: 'brownie-oreo', name: 'Oreo Brownie', category: 'Brownies', price: 140, unit: 'Per Piece', calories: 330, tags: ['Chocolate'] },
  { id: 'brownie-caramel', name: 'Caramel Brownie', category: 'Brownies', price: 140, unit: 'Per Piece', calories: 335, tags: ['Caramel'] },
  { id: 'brownie-chocolate-almond', name: 'Chocolate Almond Brownie', category: 'Brownies', price: 150, unit: 'Per Piece', calories: 340, tags: ['Nutty', 'Chocolate'] },
  { id: 'brownie-lava', name: 'Melting / Lava Brownie', category: 'Brownies', price: 180, unit: 'Per Piece', calories: 370, tags: ['Luxury', 'Chocolate'] },

  { id: 'dessert-platter', name: 'Dessert Platter', category: 'Other Desserts', price: 500, unit: 'Platter', calories: 780, tags: ['Celebration', 'Sharing'] },
  { id: 'waffles', name: 'Waffles', category: 'Other Desserts', price: 180, unit: 'Plate', calories: 360, tags: ['Casual Craving'] },
  { id: 'fruit-cake', name: 'Fruit Cake', category: 'Other Desserts', price: 900, unit: 'Per Kg', calories: 1600, tags: ['Fruit', 'Celebration'] },
  { id: 'brownie-icecream', name: 'Brownie with Ice Cream', category: 'Other Desserts', price: 220, unit: 'Serving', calories: 420, tags: ['Chocolate', 'Date Night'] },
  { id: 'chocolate-mousse', name: 'Chocolate Mousse', category: 'Other Desserts', price: 150, unit: 'Cup', calories: 260, tags: ['Chocolate', 'Creamy'] },
];

const state = {
  cart: JSON.parse(localStorage.getItem('cravelab-cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('cravelab-wishlist') || '[]'),
  profile: JSON.parse(localStorage.getItem('cravelab-profile') || 'null'),
  orders: JSON.parse(localStorage.getItem('cravelab-orders') || '[]'),
  savedDesigns: JSON.parse(localStorage.getItem('cravelab-designs') || '[]'),
  filters: { category: 'all', search: '', sort: 'default' }
};

const productGrid = document.getElementById('productGrid');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const categoryChips = document.getElementById('categoryChips');
const cartItems = document.getElementById('cartItems');
const wishlistItems = document.getElementById('wishlistItems');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutSummary = document.getElementById('checkoutSummary');
const orderHistoryText = document.getElementById('orderHistoryText');
const savedDesignsText = document.getElementById('savedDesignsText');
const trackingResult = document.getElementById('trackingResult');
const bakeResult = document.getElementById('bakeResult');
const uploadPreview = document.getElementById('uploadPreview');
const cravewiseResult = document.getElementById('cravewiseResult');

function currency(value) {
  return `₹${value.toLocaleString('en-IN')}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function persist() {
  localStorage.setItem('cravelab-cart', JSON.stringify(state.cart));
  localStorage.setItem('cravelab-wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('cravelab-profile', JSON.stringify(state.profile));
  localStorage.setItem('cravelab-orders', JSON.stringify(state.orders));
  localStorage.setItem('cravelab-designs', JSON.stringify(state.savedDesigns));
}

function getCategories() {
  return ['all', ...new Set(products.map(p => p.category))];
}

function setupCategories() {
  getCategories().forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category === 'all' ? 'All Categories' : category;
    categoryFilter.appendChild(option);

    const chip = document.createElement('button');
    chip.className = `chip ${category === 'all' ? 'active' : ''}`;
    chip.dataset.category = category;
    chip.textContent = category === 'all' ? 'All' : category;
    chip.addEventListener('click', () => {
      state.filters.category = category;
      categoryFilter.value = category;
      updateChipState();
      renderProducts();
    });
    categoryChips.appendChild(chip);
  });
}

function updateChipState() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === state.filters.category);
  });
}

function getVisibleProducts() {
  let filtered = [...products];

  if (state.filters.category !== 'all') {
    filtered = filtered.filter(p => p.category === state.filters.category);
  }

  if (state.filters.search.trim()) {
    const q = state.filters.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  switch (state.filters.sort) {
    case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  return filtered;
}

function isWishlisted(id) {
  return state.wishlist.includes(id);
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  productGrid.innerHTML = '';

  if (!visibleProducts.length) {
    productGrid.innerHTML = `<div class="glass-card"><strong>No desserts found.</strong><p>Try a different keyword or category.</p></div>`;
    return;
  }

  visibleProducts.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-top">
        <span class="badge">${product.category}</span>
        <button class="small-btn wishlist-toggle" data-id="${product.id}">${isWishlisted(product.id) ? '♥' : '♡'}</button>
      </div>
      <div>
        <h3>${product.name}</h3>
        <p>${product.tags.join(' • ')}</p>
      </div>
      <div class="product-meta">
        <small>${product.unit}</small>
        <small>~${product.calories} cal</small>
      </div>
      <div class="price-row">
        <strong>${currency(product.price)}</strong>
        <span>${product.unit}</span>
      </div>
      <div class="product-actions">
        <button class="btn btn-secondary quick-view" data-id="${product.id}">Quick View</button>
        <button class="btn btn-primary add-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function findProduct(id) {
  return products.find(p => p.id === id);
}

function addToCart(id) {
  const item = state.cart.find(entry => entry.id === id);
  if (item) item.qty += 1;
  else state.cart.push({ id, qty: 1 });
  persist();
  updateCart();
  showToast('Added to cart');
}

function toggleWishlist(id) {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter(itemId => itemId !== id);
    showToast('Removed from wishlist');
  } else {
    state.wishlist.push(id);
    showToast('Saved to wishlist');
  }
  persist();
  updateWishlist();
  renderProducts();
}

function updateQuantity(id, delta) {
  const item = state.cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(entry => entry.id !== id);
  }
  persist();
  updateCart();
}

function updateCart() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => {
    const product = findProduct(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  cartSubtotal.textContent = currency(subtotal);
  cartTotal.textContent = currency(subtotal + (state.cart.length ? 99 : 0));

  if (!state.cart.length) {
    cartItems.innerHTML = '<div class="cart-item">Your cart is empty. Add desserts from the shop.</div>';
    return;
  }

  cartItems.innerHTML = state.cart.map(item => {
    const product = findProduct(item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <strong>${product.name}</strong>
        <p>${currency(product.price)} × ${item.qty}</p>
        <div class="qty-row">
          <button data-action="decrease" data-id="${product.id}">−</button>
          <span>${item.qty}</span>
          <button data-action="increase" data-id="${product.id}">+</button>
          <button class="remove-btn" data-action="remove" data-id="${product.id}">Remove</button>
        </div>
      </div>
    `;
  }).join('');
}

function updateWishlist() {
  wishlistCount.textContent = state.wishlist.length;
  if (!state.wishlist.length) {
    wishlistItems.innerHTML = '<div class="wishlist-item">No saved items yet.</div>';
    return;
  }

  wishlistItems.innerHTML = state.wishlist.map(id => {
    const product = findProduct(id);
    if (!product) return '';
    return `
      <div class="wishlist-item">
        <strong>${product.name}</strong>
        <p>${product.category} • ${currency(product.price)}</p>
        <div class="product-actions">
          <button class="btn btn-secondary" data-wishlist-remove="${product.id}">Remove</button>
          <button class="btn btn-primary" data-wishlist-add="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }).join('');
}

function openPanel(id) {
  document.getElementById(id).classList.add('open');
}

function closePanel(id) {
  document.getElementById(id).classList.remove('open');
}

function populateCheckout() {
  if (!state.cart.length) {
    checkoutSummary.innerHTML = '<div class="checkout-item">Your cart is empty.</div>';
    return;
  }

  const list = state.cart.map(item => {
    const product = findProduct(item.id);
    return `
      <div class="checkout-item">
        <strong>${product.name}</strong>
        <p>${item.qty} × ${currency(product.price)} = ${currency(item.qty * product.price)}</p>
      </div>
    `;
  }).join('');
  checkoutSummary.innerHTML = `${list}<div class="checkout-item"><strong>Total payable: ${cartTotal.textContent}</strong></div>`;
}

function quickView(id) {
  const product = findProduct(id);
  if (!product) return;
  showToast(`${product.name} • ${product.category} • ${currency(product.price)} • approx ${product.calories} cal`);
}

function bindGlobalEvents() {
  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('.add-cart')) {
      addToCart(target.closest('.add-cart').dataset.id);
    }

    if (target.closest('.wishlist-toggle')) {
      toggleWishlist(target.closest('.wishlist-toggle').dataset.id);
    }

    if (target.closest('.quick-view')) {
      quickView(target.closest('.quick-view').dataset.id);
    }

    if (target.dataset.action === 'increase') updateQuantity(target.dataset.id, 1);
    if (target.dataset.action === 'decrease') updateQuantity(target.dataset.id, -1);
    if (target.dataset.action === 'remove') {
      state.cart = state.cart.filter(item => item.id !== target.dataset.id);
      persist();
      updateCart();
    }

    if (target.dataset.wishlistRemove) {
      toggleWishlist(target.dataset.wishlistRemove);
    }

    if (target.dataset.wishlistAdd) {
      addToCart(target.dataset.wishlistAdd);
      toggleWishlist(target.dataset.wishlistAdd);
    }

    if (target.classList.contains('add-featured')) {
      addToCart(target.dataset.productId);
    }

    if (target.dataset.close) {
      closePanel(target.dataset.close);
    }
  });
}

function bindHeaderActions() {
  document.getElementById('cartBtn').addEventListener('click', () => openPanel('cartPanel'));
  document.getElementById('wishlistBtn').addEventListener('click', () => openPanel('wishlistPanel'));
  document.getElementById('accountBtn').addEventListener('click', () => openPanel('accountPanel'));
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });
}

function bindShopControls() {
  categoryFilter.addEventListener('change', (e) => {
    state.filters.category = e.target.value;
    updateChipState();
    renderProducts();
  });
  sortSelect.addEventListener('change', (e) => {
    state.filters.sort = e.target.value;
    renderProducts();
  });
  searchInput.addEventListener('input', (e) => {
    state.filters.search = e.target.value;
    renderProducts();
  });
}

function bindBakeForm() {
  const bakeForm = document.getElementById('bakeForm');
  const cakeImageInput = document.getElementById('cakeImageInput');

  cakeImageInput.addEventListener('change', (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      uploadPreview.innerHTML = `<img src="${reader.result}" alt="Cake inspiration preview" />`;
    };
    reader.readAsDataURL(file);
  });

  bakeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(bakeForm);
    const occasion = formData.get('occasion');
    const skill = formData.get('skill');
    const dessertType = formData.get('dessertType');
    const tiers = Number(formData.get('tiers'));
    const complexity = Number(formData.get('complexity'));
    const serves = Number(formData.get('serves'));
    const notes = formData.get('notes');

    let score = complexity + tiers * 1.5 + Math.ceil(serves / 20);
    if (skill === 'Beginner') score += 2;
    if (skill === 'Advanced') score -= 1;

    let sessions = 1;
    let label = 'Easy';
    if (score >= 9 && score < 15) {
      sessions = 2;
      label = 'Medium';
    } else if (score >= 15) {
      sessions = 3;
      label = 'Difficult';
    }

    const bookingEstimate = sessions * 1499 + tiers * 399;
    const readyMadeEstimate = 1800 + serves * 35 + tiers * 450 + complexity * 60;

    const design = {
      occasion,
      skill,
      dessertType,
      tiers,
      complexity,
      serves,
      notes,
      sessions,
      label,
      createdAt: new Date().toLocaleString()
    };

    state.savedDesigns.unshift(design);
    state.savedDesigns = state.savedDesigns.slice(0, 5);
    persist();
    refreshAccountHighlights();

    bakeResult.innerHTML = `
      <strong>Difficulty:</strong> ${label}<br>
      <strong>Recommended sessions:</strong> ${sessions}<br>
      <strong>Workshop booking estimate:</strong> ${currency(bookingEstimate)}<br>
      <strong>Ready-made order estimate:</strong> ${currency(readyMadeEstimate)}<br><br>
      <strong>Suggested flow:</strong><br>
      1. Flavor & base planning<br>
      2. Structure and frosting setup<br>
      ${sessions >= 2 ? '3. Decoration and finishing workshop<br>' : ''}
      ${sessions >= 3 ? '4. Advanced detailing and delivery prep<br>' : ''}
      <br>
      <strong>Occasion:</strong> ${occasion}<br>
      <strong>Dessert type:</strong> ${dessertType}<br>
      <strong>Serves:</strong> ${serves}<br>
      <strong>Notes:</strong> ${notes || 'No extra notes provided.'}
    `;
    showToast('Cake plan analyzed and saved');
  });
}

function bindCraveWise() {
  document.getElementById('calorieForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const remaining = Number(data.get('remaining'));
    const preference = data.get('preference');
    const occasion = data.get('occasion');

    const recommended = products
      .filter(product => product.calories <= remaining)
      .filter(product => preference === 'Any' || product.tags.includes(preference) || product.name.includes(preference))
      .sort((a, b) => a.calories - b.calories)
      .slice(0, 5);

    if (!recommended.length) {
      cravewiseResult.innerHTML = `<p>No direct matches found under ${remaining} calories. Try increasing your remaining allowance or selecting “Any”.</p>`;
      return;
    }

    cravewiseResult.innerHTML = `
      <p><strong>Occasion:</strong> ${occasion} • <strong>Calorie limit:</strong> ${remaining}</p>
      ${recommended.map(item => `
        <div class="checkout-item">
          <strong>${item.name}</strong>
          <p>${item.category} • ${currency(item.price)} • approx ${item.calories} cal</p>
          <button class="btn btn-secondary add-cart" data-id="${item.id}">Add to Cart</button>
        </div>
      `).join('')}
    `;
  });
}

function bindContactForm() {
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    showToast(`Thanks ${form.get('name')}! Your inquiry has been recorded.`);
    event.target.reset();
  });
}

function bindAccount() {
  const accountForm = document.getElementById('accountForm');

  if (state.profile) {
    accountForm.querySelector('input[name="name"]').value = state.profile.name || '';
    accountForm.querySelector('input[name="email"]').value = state.profile.email || '';
    accountForm.querySelector('input[name="phone"]').value = state.profile.phone || '';
  }

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(accountForm);
    state.profile = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone')
    };
    persist();
    showToast('Profile saved');
  });

  document.getElementById('trackOrderBtn').addEventListener('click', () => {
    const trackingInput = document.getElementById('trackingInput').value.trim();
    if (!trackingInput) {
      trackingResult.textContent = 'Enter an order ID first.';
      return;
    }

    const statuses = ['Order Received', 'In Kitchen', 'Decorating', 'Out for Delivery', 'Delivered'];
    const index = trackingInput.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % statuses.length;
    trackingResult.textContent = `${trackingInput}: ${statuses[index]}`;
  });
}

function refreshAccountHighlights() {
  orderHistoryText.textContent = state.orders.length
    ? `${state.orders.length} mock order(s) placed. Latest: ${state.orders[0].id} - ${state.orders[0].status}`
    : 'No orders placed yet.';

  savedDesignsText.textContent = state.savedDesigns.length
    ? `${state.savedDesigns.length} saved design(s). Latest: ${state.savedDesigns[0].dessertType} for ${state.savedDesigns[0].occasion}.`
    : 'No saved designs yet. Use BakeYourOwnCake to generate one.';
}

function bindCheckout() {
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (!state.cart.length) {
      showToast('Your cart is empty');
      return;
    }
    populateCheckout();
    checkoutModal.showModal();
  });

  document.getElementById('clearCartBtn').addEventListener('click', () => {
    state.cart = [];
    persist();
    updateCart();
    showToast('Cart cleared');
  });

  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    const address = document.getElementById('checkoutAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;

    if (!address) {
      showToast('Please enter a delivery address');
      return;
    }

    const subtotal = state.cart.reduce((sum, item) => {
      const product = findProduct(item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);

    const order = {
      id: `CL-${1000 + state.orders.length + 1}`,
      items: [...state.cart],
      amount: subtotal + 99,
      payment,
      address,
      status: 'Order Received',
      placedAt: new Date().toLocaleString()
    };

    state.orders.unshift(order);
    state.cart = [];
    persist();
    updateCart();
    refreshAccountHighlights();
    checkoutModal.close();
    document.getElementById('checkoutAddress').value = '';
    showToast(`Mock order ${order.id} placed successfully`);
  });
}

function init() {
  setupCategories();
  renderProducts();
  updateCart();
  updateWishlist();
  refreshAccountHighlights();
  bindGlobalEvents();
  bindHeaderActions();
  bindShopControls();
  bindBakeForm();
  bindCraveWise();
  bindContactForm();
  bindAccount();
  bindCheckout();
}

init();