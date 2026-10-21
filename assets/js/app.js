/**
 * MOH STUDIO AHMEDABAD - APPLICATION SCRIPT
 * Ultra-Rich Haute Couture Interaction System
 * Curated by Mita Manglani | Ambli, Ahmedabad
 */

// Application State
const appState = {
  heroLooks: MOH_HERO_LOOKS || [],
  activeHeroIndex: 0,
  products: MOH_PRODUCTS || [],
  filteredProducts: MOH_PRODUCTS || [],
  instaPosts: MOH_INSTA_POSTS || [],
  activeCategory: 'All',
  activeDesigner: 'All',
  activeInstaTab: 'posts',
  currency: localStorage.getItem('moh_currency') || 'INR',
  currencyRateUsd: 83.5,
  currencyRateGbp: 108.0,
  currencyRateEur: 90.5,
  cart: JSON.parse(localStorage.getItem('moh_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('moh_wishlist')) || [],
  selectedSize: 'S'
};

// DOM Content Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  initHeroLook();
  renderHeroTabs();
  renderInstaStories();
  renderInstaFeed();
  renderProducts();
  updateCartUI();
  updateWishUI();
});

/* ==========================================================================
   CURRENCY FORMATTER
   ========================================================================== */
function setCurrency(curr) {
  appState.currency = curr;
  localStorage.setItem('moh_currency', curr);
  const select = document.getElementById('currency-picker');
  if (select) select.value = curr;
  renderHeroLook();
  renderProducts();
  renderInstaFeed();
  updateCartUI();
  showToast(`Currency converted to ${curr}`);
}

function formatPrice(amountInInr) {
  if (appState.currency === 'USD') {
    const val = Math.round(amountInInr / appState.currencyRateUsd);
    return `$${val.toLocaleString()}`;
  } else if (appState.currency === 'GBP') {
    const val = Math.round(amountInInr / appState.currencyRateGbp);
    return `£${val.toLocaleString()}`;
  } else if (appState.currency === 'EUR') {
    const val = Math.round(amountInInr / appState.currencyRateEur);
    return `€${val.toLocaleString()}`;
  }
  return `₹${amountInInr.toLocaleString('en-IN')}`;
}

/* ==========================================================================
   HERO LOOKBOOK & HOTSPOTS
   ========================================================================== */
function initHeroLook() {
  renderHeroLook();
}

function renderHeroLook() {
  const look = appState.heroLooks[appState.activeHeroIndex];
  if (!look) return;

  const badge = document.getElementById('hero-badge');
  const img = document.getElementById('hero-img');
  const title = document.getElementById('hero-card-title');
  const meta = document.getElementById('hero-card-meta');
  const hotspotsContainer = document.getElementById('hero-hotspots-container');

  if (badge) badge.textContent = `${look.roman}. ${look.tag}`;
  if (img) {
    img.src = look.image;
    img.alt = look.title;
  }
  if (title) title.textContent = look.title;
  if (meta) {
    meta.textContent = `${look.fabric} • ${formatPrice(look.price)}`;
  }

  // Render Hotspots
  if (hotspotsContainer && look.hotspots) {
    hotspotsContainer.innerHTML = look.hotspots.map(h => `
      <div class="hotspot-pin" style="top: ${h.top}; left: ${h.left};" onclick="toggleHotspot(this, event)">
        +
        <div class="hotspot-popover">
          <strong>${h.label}</strong>
          <span>${h.desc}</span>
        </div>
      </div>
    `).join('');
  }
}

function renderHeroTabs() {
  const container = document.getElementById('heroLookTabs');
  if (!container || !appState.heroLooks) return;

  container.innerHTML = appState.heroLooks.map((look, i) => `
    <button type="button" class="hero-look-btn ${i === appState.activeHeroIndex ? 'active' : ''}" onclick="switchHeroLook(${i}, this)">
      <span class="tab-roman">${look.roman}</span>
      <span class="tab-text">${look.title.split(' ')[0]} ${look.title.split(' ')[1] || ''}</span>
    </button>
  `).join('');
}

function switchHeroLook(index, btn) {
  appState.activeHeroIndex = index;
  document.querySelectorAll('.hero-look-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderHeroLook();
}

function toggleHotspot(pin, event) {
  if (event) event.stopPropagation();
  const isActive = pin.classList.contains('active');
  document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('active'));
  if (!isActive) pin.classList.add('active');
}

// Close active hotspots on document click
document.addEventListener('click', () => {
  document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('active'));
});

function quickAddHeroLook() {
  const look = appState.heroLooks[appState.activeHeroIndex];
  if (!look) return;
  addToCart(look.id, look.title, look.price, look.image, 'Moh Studio Atelier', 'Custom Fit');
}

/* ==========================================================================
   INSTAGRAM STORIES & VIP SALON (Matching Screenshot Exactly)
   ========================================================================== */
function renderInstaStories() {
  const container = document.getElementById('instaStoriesRow');
  if (!container || !MOH_STORY_HIGHLIGHTS) return;

  container.innerHTML = MOH_STORY_HIGHLIGHTS.map(story => `
    <div class="story-item" onclick="openStoryModal('${story.id}')">
      <div class="story-circle-wrap">
        <div class="story-ring-gold">
          <img src="${story.image}" alt="${story.label}" class="story-thumb">
        </div>
      </div>
      <span class="story-name">${story.label}</span>
    </div>
  `).join('');
}

function switchInstaTab(tab, btn) {
  appState.activeInstaTab = tab;
  document.querySelectorAll('.insta-nav-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderInstaFeed();
}

function renderInstaFeed() {
  const grid = document.getElementById('instaFeedGrid');
  if (!grid || !appState.instaPosts) return;

  let posts = [...appState.instaPosts];
  if (appState.activeInstaTab === 'reels') {
    posts = posts.filter((_, i) => i % 2 === 0);
  } else if (appState.activeInstaTab === 'tagged') {
    posts = posts.filter((_, i) => i % 3 === 0);
  }

  grid.innerHTML = posts.map(post => `
    <div class="insta-post-card" onclick="viewInstaPost('${post.id}')">
      <div class="post-media-wrap">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <span class="post-overlay-tag">${post.tag}</span>
        
        <div class="post-hover-overlay">
          <div class="post-stats-overlay">
            <span><i class="fas fa-heart"></i> ${post.likes}</span>
            <span><i class="fas fa-comment"></i> ${post.comments}</span>
          </div>
          <span class="post-hover-title">${post.title}</span>
          <span class="post-hover-price">${formatPrice(post.price)}</span>
          <button type="button" class="post-shop-btn" onclick="event.stopPropagation(); quickAddFromPost('${post.id}')">
            ✦ Shop Look
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function viewInstaPost(postId) {
  const post = appState.instaPosts.find(p => p.id === postId);
  if (!post) return;
  openQuickViewByTitle(post.title);
}

function quickAddFromPost(postId) {
  const post = appState.instaPosts.find(p => p.id === postId);
  if (!post) return;
  addToCart(post.id, post.title, post.price, post.image, post.designer, 'Custom Fit');
}

/* ==========================================================================
   INSTAGRAM STORY VIEWER MODAL
   ========================================================================== */
let storyTimer = null;

function openStoryModal(storyId) {
  const story = MOH_STORY_HIGHLIGHTS.find(s => s.id === storyId);
  if (!story) return;

  const modalImg = document.getElementById('story-modal-img');
  const modalTitle = document.getElementById('story-modal-title');
  const modalCaption = document.getElementById('story-modal-caption');
  const fill = document.getElementById('storyProgress');

  if (modalImg) modalImg.src = story.image;
  if (modalTitle) modalTitle.textContent = story.label;
  if (modalCaption) modalCaption.textContent = story.caption;

  const modal = document.getElementById('storyModal');
  if (modal) modal.classList.add('active');

  // Reset & run story progress animation
  if (fill) {
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = '100%'; }, 50);
  }

  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    closeStoryModal();
  }, 6000);
}

function closeStoryModal() {
  clearTimeout(storyTimer);
  const modal = document.getElementById('storyModal');
  if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   CATALOGUE FILTERING & STAGGERED RUNWAY RENDERING
   ========================================================================== */
function filterCategory(cat, btn) {
  appState.activeCategory = cat;
  if (btn) {
    document.querySelectorAll('.catalogue-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  applyFilters();
}

function filterDesigner(designer, btn) {
  appState.activeDesigner = designer;
  if (btn) {
    document.querySelectorAll('.label-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  applyFilters();
}

function applyFilters() {
  let list = [...appState.products];

  if (appState.activeCategory !== 'All') {
    list = list.filter(p => p.category === appState.activeCategory);
  }

  if (appState.activeDesigner !== 'All') {
    list = list.filter(p => p.designer === appState.activeDesigner);
  }

  appState.filteredProducts = list;
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  const counter = document.getElementById('catalogueCounter');
  if (!container) return;

  const items = appState.filteredProducts;

  if (counter) {
    counter.textContent = `${items.length} SILHOUETTES LIVE`;
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
        <span style="font-size: 2rem; color: var(--accent-gold);">✦</span>
        <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin: 12px 0 8px; color: var(--charcoal);">No Silhouettes Found</h3>
        <p style="color: var(--muted); font-size: 0.95rem; margin-bottom: 24px;">Try clearing label filters to explore all creations.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map((product, idx) => {
    const isWish = appState.wishlist.some(w => w.id === product.id);
    const isFeature = idx === 0 || idx === 6 || idx === 12;

    return `
      <div class="product-card ${isFeature ? 'feature-card' : ''}" data-id="${product.id}">
        <div class="card-media">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          
          <span class="card-badge">${product.collection}</span>
          
          <button class="card-wish-btn ${isWish ? 'active' : ''}" onclick="toggleWish('${product.id}', event)" title="Save Silhouette">
            <i class="${isWish ? 'fas' : 'far'} fa-heart"></i>
          </button>

          <div class="card-hover-drawer">
            <button type="button" class="card-action-btn quick-bag" onclick="quickAddProduct('${product.id}')">
              + Quick Bag
            </button>
            <button type="button" class="card-action-btn quick-view" onclick="openQuickView('${product.id}')">
              View
            </button>
          </div>
        </div>

        <div class="card-body">
          <div class="card-label-row">
            <span class="card-label">${product.designer}</span>
            <span class="card-pill-tag">${product.category.split(' ')[0]}</span>
          </div>

          <h3 class="card-title" onclick="openQuickView('${product.id}')">${product.title}</h3>
          <p class="card-craft">${product.fabric} &bull; ${product.craft}</p>
          
          <div class="card-price-row">
            <div>
              <span class="card-price">${formatPrice(product.price)}</span>
              <span class="card-bespoke-tag">Bespoke Fit</span>
            </div>
            <button type="button" class="card-direct-wa" onclick="inquireProductWhatsApp('${product.id}')" title="Direct Stylist Inquiry">
              <i class="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  appState.activeCategory = 'All';
  appState.activeDesigner = 'All';
  document.querySelectorAll('.catalogue-tab-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.querySelectorAll('.label-pill').forEach((b, i) => b.classList.toggle('active', i === 0));
  applyFilters();
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
function openQuickView(productId) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('qv-img').src = product.image;
  document.getElementById('qv-designer').textContent = product.designer.toUpperCase();
  document.getElementById('qv-title').textContent = product.title;
  document.getElementById('qv-price').textContent = formatPrice(product.price);
  document.getElementById('qv-desc').textContent = product.description;
  document.getElementById('qv-fabric').textContent = product.fabric;
  document.getElementById('qv-craft').textContent = product.craft;
  document.getElementById('qv-silhouette').textContent = product.silhouette;
  document.getElementById('qv-dispatch').textContent = product.deliveryTime;

  const addBtn = document.getElementById('qv-add-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(product.id, product.title, product.price, product.image, product.designer, appState.selectedSize);
      closeQuickView();
    };
  }

  const waBtn = document.getElementById('qv-wa-btn');
  if (waBtn) {
    const text = encodeURIComponent(`Hello MOH Studio Ahmedabad! I would like to inquire about "${product.title}" (${formatPrice(product.price)}). Can you share availability and customization options?`);
    waBtn.href = `https://wa.me/919925000297?text=${text}`;
  }

  document.getElementById('quickViewModal')?.classList.add('active');
}

function openQuickViewByTitle(title) {
  const product = appState.products.find(p => p.title.toLowerCase().includes(title.toLowerCase().split(' ')[0]));
  if (product) {
    openQuickView(product.id);
  } else {
    scrollToSection('catalogue');
  }
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('active');
}

function selectSize(btn) {
  document.querySelectorAll('.size-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  appState.selectedSize = btn.textContent.trim();
}

/* ==========================================================================
   CART & BAG DRAWER (With WhatsApp Checkout)
   ========================================================================== */
function openCart() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('drawerOverlay')?.classList.add('active');
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('drawerOverlay')?.classList.remove('active');
}

function addToCart(id, title, price, image, designer, size) {
  const existing = appState.cart.find(item => item.id === id && item.size === size);
  if (existing) {
    existing.quantity += 1;
  } else {
    appState.cart.push({ id, title, price, image, designer, size: size || 'S', quantity: 1 });
  }
  saveCart();
  updateCartUI();
  openCart();
  showToast(`Added "${title}" to your Atelier Bag`);
}

function quickAddProduct(id) {
  const product = appState.products.find(p => p.id === id);
  if (!product) return;
  addToCart(product.id, product.title, product.price, product.image, product.designer, 'Custom Fit');
}

function updateCartQty(id, size, change) {
  const item = appState.cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    appState.cart = appState.cart.filter(i => !(i.id === id && i.size === size));
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(id, size) {
  appState.cart = appState.cart.filter(i => !(i.id === id && i.size === size));
  saveCart();
  updateCartUI();
  showToast("Silhouette removed from bag");
}

function clearCart() {
  appState.cart = [];
  saveCart();
  updateCartUI();
  showToast("Atelier Bag cleared");
}

function saveCart() {
  localStorage.setItem('moh_cart', JSON.stringify(appState.cart));
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-badge');
  const drawerCount = document.getElementById('drawerItemCount');
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');

  const totalItems = appState.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = `${totalItems} Silhouettes`;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-cart-icon">✦</span>
        <h4>Your Atelier Bag Is Empty</h4>
        <p>Explore our Capsule 2026 collection to reserve limited small-batch creations.</p>
        <button class="btn btn-primary" onclick="closeCart(); scrollToSection('catalogue')">Explore Collections</button>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <span class="cart-item-designer">${item.designer}</span>
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-size">Size / Fit: <strong>${item.size}</strong></div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        
        <div class="cart-qty-row">
          <div class="qty-stepper">
            <button type="button" onclick="updateCartQty('${item.id}', '${item.size}', -1)">-</button>
            <span>${item.quantity}</span>
            <button type="button" onclick="updateCartQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
          <button type="button" class="cart-remove-btn" onclick="removeCartItem('${item.id}', '${item.size}')">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function checkoutWhatsApp() {
  if (appState.cart.length === 0) {
    showToast("Your Atelier Bag is empty!");
    return;
  }

  const itemsList = appState.cart.map((item, idx) => 
    `${idx + 1}. *${item.title}* (Size: ${item.size}, Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
  ).join('\n');

  const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const orderId = `MOH-${Math.floor(100000 + Math.random() * 900000)}`;

  const message = `✨ *MOH STUDIO AHMEDABAD - BESPOKE ORDER INQUIRY*\n` +
    `----------------------------------------\n` +
    `*Order Ref:* #${orderId}\n` +
    `*Client Currency:* ${appState.currency}\n\n` +
    `*Selected Silhouettes:*\n${itemsList}\n\n` +
    `*Total Estimated Subtotal:* ${formatPrice(subtotal)}\n` +
    `----------------------------------------\n` +
    `Please share fitting schedule, fabric customization options, and insured courier dispatch timeline.`;

  const waUrl = `https://wa.me/919925000297?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

function inquireProductWhatsApp(productId) {
  const p = appState.products.find(item => item.id === productId);
  if (!p) return;
  const text = encodeURIComponent(`Hello MOH Studio! I would like to inquire about "${p.title}" (${formatPrice(p.price)}). Can you share availability and customization options?`);
  window.open(`https://wa.me/919925000297?text=${text}`, '_blank');
}

/* ==========================================================================
   WISHLIST SYSTEM
   ========================================================================== */
function toggleWish(id, event) {
  if (event) event.stopPropagation();
  const existingIdx = appState.wishlist.findIndex(w => w.id === id);
  if (existingIdx > -1) {
    appState.wishlist.splice(existingIdx, 1);
    showToast("Silhouette removed from wishlist");
  } else {
    const product = appState.products.find(p => p.id === id);
    if (product) {
      appState.wishlist.push({ id: product.id, title: product.title });
      showToast(`Saved "${product.title}" to Wishlist`);
    }
  }
  localStorage.setItem('moh_wishlist', JSON.stringify(appState.wishlist));
  updateWishUI();
  renderProducts();
}

function updateWishUI() {
  const wishBadge = document.getElementById('wish-badge');
  if (wishBadge) wishBadge.textContent = appState.wishlist.length;
}

/* ==========================================================================
   BRIDAL APPOINTMENT BOOKING MODAL
   ========================================================================== */
function openAppointmentModal() {
  document.getElementById('appointmentModal')?.classList.add('active');
}

function closeAppointmentModal() {
  document.getElementById('appointmentModal')?.classList.remove('active');
}

function submitAppointment(event) {
  event.preventDefault();
  const name = document.getElementById('apt-name')?.value || '';
  const phone = document.getElementById('apt-phone')?.value || '';
  const occasion = document.getElementById('apt-occasion')?.value || '';
  const date = document.getElementById('apt-date')?.value || '';

  const message = `👑 *MOH STUDIO AHMEDABAD - BRIDAL STYLING APPOINTMENT*\n` +
    `----------------------------------------\n` +
    `*Client Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Occasion / Interest:* ${occasion}\n` +
    `*Preferred Date:* ${date}\n` +
    `*Flagship Salon:* Behind R.K. Party Plot, Ambli, Ahmedabad\n` +
    `----------------------------------------\n` +
    `Hello Mita Manglani! I would like to confirm my personalized bridal fitting session.`;

  window.open(`https://wa.me/919925000297?text=${encodeURIComponent(message)}`, '_blank');
  closeAppointmentModal();
  showToast("Bridal Appointment request sent to Concierge!");
}

/* ==========================================================================
   TOAST NOTIFICATIONS & SMOOTH SCROLLING
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-pill';
  toast.innerHTML = `<span class="toast-dot">✦</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleMobileNav() {
  const nav = document.querySelector('.nav-links');
  if (nav) nav.classList.toggle('mobile-open');
}
