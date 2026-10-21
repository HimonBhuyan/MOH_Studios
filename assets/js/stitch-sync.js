/**
 * MOH ATELIER AHMEDABAD - UNIFIED LIVE STORE ENGINE
 * Synchronized State for Currency, Wishlist, Concierge Search, Modals & Dynamic PDP
 */

// Master Catalog Registry
const MOH_CATALOG = [
  {
    id: "gilded-ochre",
    title: "Gilded Ochre Lehenga Ensemble",
    subtitle: "Celebration Heirloom Masterpiece",
    category: "Bridal Trousseau",
    price: 125000,
    fabric: "Pure Handspun Mulberry Silk",
    craft: "Marodi Hand Embroidery & Fine Zardozi",
    timeline: "4 to 6 Weeks Crafted",
    tag: "ARTISANAL EDITION № 09/25 · 48 KARIGAR HOURS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqYx4SDYeiPd1mblO6w1smHfupr4H9dP8d7A49S4KRt1kxw44QFF6ULiwg7jAgT926ltu2L7y8XsnJOZhAEujhLoac-yYDLArgst1DCu9jtbbcCAE-NaYLoMEbo6p5ru2LALBrmZyDZXjz451CdW_Al-Q5zfVlalNqGkZbXQuidLnG27bu8DCzMzzsfR1YZ6NXDhVhDYjpLvknx95v6gy9PWys_ybDvaXRDT2v0HI7Vr6HcdF4D41Q",
    description: "An intricate gilded ochre yellow lehenga ensemble featuring marodi hand embroidery and fine zardozi work, standing gracefully in a warm sunlit Ahmedabad courtyard atelier."
  },
  {
    id: "saffron-zari",
    title: "Saffron Zari Lehenga Ensemble",
    subtitle: "Heirloom Bespoke Bridal",
    category: "Bridal Trousseau",
    price: 145000,
    fabric: "Hand-spun Chanderi Silk & Dabka",
    craft: "Heirloom Zardozi & Dabka Needlecraft",
    timeline: "5 to 6 Weeks Crafted",
    tag: "HEIRLOOM BESPOKE · 48H KARIGAR WORK",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7DbyKAhUiqlQzYtUTOil5MEjWocMoCR7x2Zeo3Z8OC0VZYEp2M3Q6w2Fc4DZgzellqRrdPTxpOJhb_N0bK0QbPdFU9xzcqWLgW0t2gerSzRrUKP96MU04wkYCsUHP1MOU5QShT9dEFkAlKat0gy8VUczq2djACdJD5JdeglI6dozVows-Z6BHye4rkTkpaE5xsFG2nrR-I4QwkBmETO-wFPBdP7xmPKeJpsi5EXbYB0Sx8tQdk2s",
    description: "Opulent saffron ochre silk lehenga with heavy metallic gold zardozi embroidery displayed on a couture mannequin inside a warm sunlit Ahmedabad atelier studio."
  },
  {
    id: "russet-silk",
    title: "Russet Raw Silk Kurta Set",
    subtitle: "Festive Soirée Edition",
    category: "Festive Anarkalis",
    price: 44000,
    fabric: "Wild Mulberry Silk & Gota",
    craft: "Delicate Antique Copper Gota Patti",
    timeline: "Ready to Ship · 48 Hours",
    tag: "READY TO SHIP · ARCHIVE RUN 3 ENSEMBLES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCVjoeMlvZbqtdpE1HKWEJ3CGbGyTKEkYiVWKgFv-YxA9rLhTfG0izmzPi-UgXgal334K7GuETGzYyI4u2H6rH-obzA6Tx7xg3RzJwTSXgGIsxhAnRt9vMLCK-eug7MyuGwFrEBfkHibqAA50bvDvtV9F2_fJVk3Lyl7kRF_tW9RKrYuKRe86osb8OXIetNNlBOsDnvbdpSaIe_y-cRmwPbv7AslfiWfq-DJ2_pLNgM1lRId40aJdn",
    description: "Earthy russet brown raw silk tunic kurta set with delicate antique copper gota patti neck embroidery."
  },
  {
    id: "midnight-velvet",
    title: "Midnight Velvet Cape Ensemble",
    subtitle: "Cocktail & Sangeet Soirée",
    category: "Draped Capes",
    price: 78000,
    fabric: "Micro-Velvet Drapes & Cut-Dana",
    craft: "Hand-stitched Bugle Beads & Dana Beading",
    timeline: "3 to 4 Weeks Crafted",
    tag: "STUDIO EDITION · STRICT LIMITED RELEASE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdZ4gY5cRPoyGFL4rFL0JPgYvtmayYu2Gd7h465rN5JXEcN_UX2bI3N1yFCu2GTCh5yROkKWU70vsFILXz7479RXCmRlto9jLKHjYz_HjpirmvyO-hqmaT2-Gbt7qzzgDAFK7Qn2FYgOrV37R-qd6JKbwF1e65sqpcAK7EPLARdIUDt5bKVfdeZr0CCxWERmty4XVpH0cvIIgiDtqcrh53inC5npA4x7oHFM95M-bZgzqTBE1-0t4J",
    description: "Flowing midnight navy velvet cape ensemble adorned with hand-stitched bugle beads and cut-dana work."
  },
  {
    id: "chandballi-anarkali",
    title: "Chandballi Silk Anarkali",
    subtitle: "Trousseau Series Edition",
    category: "Festive Anarkalis",
    price: 58000,
    fabric: "Ivory Chanderi Weave",
    craft: "Metallic Mukaish Foil & Chandballi Motifs",
    timeline: "2 to 3 Weeks Crafted",
    tag: "HEIRLOOM BESPOKE · 24 HAND-CUT KALIS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO79_YLeYnz9v5gf0XT1hBAWn3Q1W3xUZjESB89mK9CmgB75uXjWZem-gx2mPfcezDFoYqQjR1i_73dLGeIpSExhdtkOBW8YW_BLY5CBTPvtnNo9vRztQOnDp9_rc_nUvWBFuMJpM5ZOkljq-F1dN8aal5s2n57oZjrWxMGyGWwBEXF3Jn8kL85jGPszKIPkk85wI_OFFsP4Vb-W-QkRRroIHegqRYC-NzC_d3aVwKGy40kk0A3zWT",
    description: "Ivory and champagne gold Chanderi silk floor-length Anarkali with intricate Chandballi motif embroidery on flare."
  },
  {
    id: "tangerine-sharara",
    title: "Tangerine Resham Sharara Set",
    subtitle: "Energetic Festive Pret",
    category: "Draped Capes",
    price: 52000,
    fabric: "Silk Crepe Sharara",
    craft: "Vibrant Resham Thread Floral Work",
    timeline: "2 to 3 Weeks Crafted",
    tag: "STUDIO EDITION · LIMITED RUN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBau_sNDAeeLEGUxclbzzV9yt3ksV-ATCCEyHLF9ERvlEV06cWS4t5hbCkX3GlhewzXgxOkTdqJySidENsoXis-urqFudHSX3m4HA_zRy8RSiKkvRGr0em7GyH1Gtf4ipjjJg8-xthmOpRtPwdKitNH-dljNsyN7qO8D4vRgDDdtnh_yP4LGC0ier8VDZsWhCh31ySeRBLZNqPtpCVAcWLJ_SzF9W4oWosu3cXUggWir5pHWqIaHCvv",
    description: "Energetic tangerine orange silk crepe sharara suit with vibrant multi-color resham thread floral motifs."
  },
  {
    id: "aurelia-sharara",
    title: "Aurelia Silk Sharara Set",
    subtitle: "Bodakdev Exclusive Drop",
    category: "Festive Anarkalis",
    price: 78500,
    fabric: "Forest Green Mulberry Silk",
    craft: "Pure Zardozi Marodi & Dabka Yoke",
    timeline: "3 to 4 Weeks Crafted",
    tag: "PURE ZARDOZI MARODI · BODAKDEV EXCLUSIVE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwfwLiFjEosq3vRXJZ2XAXF5kg_Zxd4Ez3KRzu0E4WY9rn3KHspI451Z592iI1PF1GL0hwRLTUwLh-VhvGmiJxMPwRp-OafrMEW7Z3uXTutngyD9RpS-_Ixyr5S_4JSyQaXqkB8oMBPfjP3iDXj-u8C724tpFE49_u-tyrXV386hXAi5hX5mZSCt4rxSfdqMbyPCndQFWUAlzJKHEyk14Noy-fgqe8117H9pPgftQ3qCKzaZ7vGRj6",
    description: "Emerald raw silk short kurti with heavy gota patti and zardozi yoke paired with crinkled sharara pants."
  },
  {
    id: "noor-kaftan",
    title: "Noor Draped Kaftan Gown",
    subtitle: "Festive Capsule Silhouette",
    category: "Draped Capes",
    price: 62000,
    fabric: "Deep Plum Organza",
    craft: "Antique Gold Dabka Neckline",
    timeline: "2 to 3 Weeks Crafted",
    tag: "HAND-SPUN TISSUE · FESTIVE CAPSULE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzu-u6wZ3VfRoSsdnjYa2YstIzKdQSt-ufOoU9VQrggdYbhvkivCdOCvKWUj8Y9spH9KQir_P8KKB-gt64T_n3WspBP_lYXkqvdHhKE2zRi9hwD3QNrVMrm7Puz5WCOeNXtEOzyjGwegknAta4v6y7mfRQ4SXlWbVspvAIeb6Otg-o6OLBXoFsCP5y__vfvJiuxpq6I2d8RFuTNTYcKf_pxvHrKf8mbT_oFmgxJQlystXYLnYaDd_M",
    description: "Deep plum raw silk tunic with sheer tissue gold dupatta and delicate dabka neckline details."
  },
  {
    id: "chandani-lehenga",
    title: "Chandani Zardozi Lehenga",
    subtitle: "Imperial Bridal Suite",
    category: "Bridal Trousseau",
    price: 185000,
    fabric: "Ivory Hand-Spun Silk & Real Pearls",
    craft: "Single-Needle Zardozi & Sitara Sequin",
    timeline: "6 to 8 Weeks Crafted",
    tag: "HEIRLOOM BRIDAL · CONSULTATION ONLY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK1KAvOvC9XzuujWDvNRN0xwgX7MCxw_2QyLK7qVD7CkA807UxbAb5mPajCj4LNeWRxXviO3fQ1IHs7ZVgce-Zw7J2eUL0c07jq8G-72_8artHc1ncYnXqQEjOLF0oCQHs4D2O7SxQz0pAGxDNGkagS_q0JvfvjWAi2onLnbMg40b8lvlu4CG9GTy_66jlbt4eJhoSknGHdhD5tKqP7E117mTFfj4wgmn9c68Kmk-zmLuyCT01l4zE",
    description: "Ivory and pale champagne gold lehenga with real hand-cut sitara sequin work and gossamer veil."
  },
  {
    id: "kesari-cape",
    title: "Kesari Asymmetric Cape",
    subtitle: "Cocktail & Sangeet Pret",
    category: "Draped Capes",
    price: 54000,
    fabric: "Ochre Georgette with Sitara",
    craft: "Hand-Cut Mirrorwork & Asymmetric Cut",
    timeline: "2 to 3 Weeks Crafted",
    tag: "HAND-CUT MIRROR · COCKTAIL & SANGEET",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATASGudGaeFmdjk89fuU0Q4fY0nEjgkFB03N_Jt6kgeMMXdo_9rgA61fua7GpVH1WYP9wrGrwI62plBOhrlgSABOidei4W_fD4s25SpZguuUd2mDJZM92oJzKakzjAL0bG-H00jpcjna5_tH0R_uRgM03ypTov5uTySp1i7APLw9G4hEmO2cecQcBLCuYsmuGK1kHxutmY65DpyjlYrcV3CdU4g2UuKDvhw_U8Fu7R6yALFDHn3gJY",
    description: "Ochre yellow one-shoulder draped georgette cape paired with embroidered cigarette pants."
  }
];

// App State
let currentCurrency = localStorage.getItem('moh_currency') || 'INR';
const usdRate = 83.5;
let personalWishlist = JSON.parse(localStorage.getItem('moh_wishlist') || '[]');

// Format Price Helper
function formatPrice(inrAmount) {
  if (currentCurrency === 'USD') {
    return '$' + Math.round(inrAmount / usdRate).toLocaleString('en-US');
  }
  return '₹' + inrAmount.toLocaleString('en-IN');
}

// Currency Engine
function setCurrency(curr) {
  currentCurrency = curr;
  localStorage.setItem('moh_currency', curr);
  updateCurrencyDisplay();
  
  document.querySelectorAll('[data-inr-price]').forEach(el => {
    const inr = parseInt(el.getAttribute('data-inr-price'), 10);
    el.textContent = formatPrice(inr);
  });
  
  renderWishlistDrawerItems();
}

function updateCurrencyDisplay() {
  document.querySelectorAll('.currency-inr-btn').forEach(btn => {
    btn.classList.toggle('font-bold', currentCurrency === 'INR');
    btn.classList.toggle('text-white', currentCurrency === 'INR');
    btn.classList.toggle('text-[#ffdeac]', currentCurrency === 'INR');
  });
  document.querySelectorAll('.currency-usd-btn').forEach(btn => {
    btn.classList.toggle('font-bold', currentCurrency === 'USD');
    btn.classList.toggle('text-white', currentCurrency === 'USD');
    btn.classList.toggle('text-[#ffdeac]', currentCurrency === 'USD');
  });
}

// Wishlist Engine
function toggleWishlistPiece(id, event) {
  if (event) event.stopPropagation();
  const idx = personalWishlist.indexOf(id);
  if (idx > -1) {
    personalWishlist.splice(idx, 1);
  } else {
    personalWishlist.push(id);
  }
  localStorage.setItem('moh_wishlist', JSON.stringify(personalWishlist));
  updateWishlistBadges();
  renderWishlistDrawerItems();
}

function updateWishlistBadges() {
  const count = personalWishlist.length;
  document.querySelectorAll('.wishlist-count-badge').forEach(el => {
    el.textContent = count;
  });
  document.querySelectorAll('.wishlist-heart-btn').forEach(btn => {
    const pid = btn.getAttribute('data-product-id');
    if (pid && personalWishlist.includes(pid)) {
      btn.classList.add('text-secondary', 'fill-secondary');
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) icon.classList.add('font-bold');
    } else {
      btn.classList.remove('text-secondary', 'fill-secondary');
    }
  });
}

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistOverlay');
  if (drawer && overlay) {
    renderWishlistDrawerItems();
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistOverlay');
  if (drawer && overlay) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
  }
}

function renderWishlistDrawerItems() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;
  
  if (personalWishlist.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-outline space-y-3">
        <span class="material-symbols-outlined text-[36px] text-secondary/40">favorite_border</span>
        <p class="font-editorial italic text-base text-primary">Your personal archive is empty.</p>
        <p class="text-xs uppercase tracking-wider">Explore our monographs and save bespoke silhouettes.</p>
      </div>
    `;
    return;
  }
  
  const savedPieces = MOH_CATALOG.filter(p => personalWishlist.includes(p.id));
  container.innerHTML = savedPieces.map(p => `
    <div class="flex items-center gap-4 py-4 border-b border-[#e7c185]/30 group">
      <img src="${p.image}" alt="${p.title}" class="w-16 h-20 object-cover border border-[#e7c185]/40 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <span class="text-[9px] uppercase tracking-widest text-secondary block truncate">${p.category}</span>
        <h5 class="font-editorial text-[16px] text-primary truncate leading-tight">${p.title}</h5>
        <span class="text-[13px] font-semibold text-primary block mt-1">${formatPrice(p.price)}</span>
      </div>
      <div class="flex flex-col items-end gap-2 flex-shrink-0">
        <a href="product.html?id=${p.id}" class="text-[10px] uppercase tracking-wider text-secondary hover:text-primary font-medium">View</a>
        <button onclick="toggleWishlistPiece('${p.id}', event)" class="text-outline hover:text-red-500 text-[16px] p-1">
          <span class="material-symbols-outlined text-[16px]">delete</span>
        </button>
      </div>
    </div>
  `).join('');
}

function shareWishlistToWhatsApp() {
  if (personalWishlist.length === 0) {
    alert("Please add silhouettes to your Personal Archive first.");
    return;
  }
  const savedPieces = MOH_CATALOG.filter(p => personalWishlist.includes(p.id));
  const itemsText = savedPieces.map((p, i) => `${i + 1}. ${p.title} (${formatPrice(p.price)})`).join('%0A');
  const msg = `Hello MOH Atelier Ahmedabad! I have saved these silhouettes to my Personal Archive and would like to inquire about bespoke fittings:%0A%0A${itemsText}`;
  window.open(`https://wa.me/919925000297?text=${msg}`, '_blank');
}

// Concierge Live Search Engine
function openConciergeSearch() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    const input = document.getElementById('conciergeSearchInput');
    if (input) {
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }
}

function closeConciergeSearch() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
}

function renderSearchResults(query) {
  const container = document.getElementById('searchResultsContainer');
  if (!container) return;
  const q = query.toLowerCase().trim();
  
  const matches = MOH_CATALOG.filter(p => 
    !q || p.title.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) || 
    p.craft.toLowerCase().includes(q) || 
    p.fabric.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-outline">
        <p class="font-editorial italic text-lg text-primary">No silhouettes matching "${query}" found.</p>
        <p class="text-xs uppercase tracking-widest mt-1">Try searching "lehenga", "zardozi", "cape", or "silk".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(p => `
    <a href="product.html?id=${p.id}" class="flex items-center gap-4 p-3 bg-white border border-[#e7c185]/30 hover:border-primary transition-all group">
      <img src="${p.image}" alt="${p.title}" class="w-14 h-18 object-cover border border-[#e7c185]/40 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <span class="text-[9px] uppercase tracking-widest text-secondary block">${p.category}</span>
        <h4 class="font-editorial text-[17px] text-primary group-hover:text-secondary transition-colors truncate">${p.title}</h4>
        <p class="text-[12px] text-outline font-light truncate">${p.fabric} · ${p.craft}</p>
      </div>
      <div class="text-right flex-shrink-0">
        <span class="text-[14px] font-semibold text-primary block">${formatPrice(p.price)}</span>
        <span class="text-[9px] uppercase tracking-wider text-secondary">View Drape →</span>
      </div>
    </a>
  `).join('');
}

// Salon Suite Appointment Modal
function openSalonAppointmentModal(presetOccasion) {
  const modal = document.getElementById('salonModal');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    if (presetOccasion) {
      const select = document.getElementById('salonOccasionSelect');
      if (select) select.value = presetOccasion;
    }
  }
}

function closeSalonAppointmentModal() {
  const modal = document.getElementById('salonModal');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
}

function submitSalonBooking(event) {
  event.preventDefault();
  const name = document.getElementById('salonNameInput')?.value || '';
  const phone = document.getElementById('salonPhoneInput')?.value || '';
  const occasion = document.getElementById('salonOccasionSelect')?.value || 'Bridal Trousseau Fitting';
  const date = document.getElementById('salonDateInput')?.value || '';

  const msg = `👑 *MOH ATELIER AHMEDABAD - PRIVATE SALON APPOINTMENT*%0A` +
    `----------------------------------------%0A` +
    `*Patron Name:* ${encodeURIComponent(name)}%0A` +
    `*Contact:* ${encodeURIComponent(phone)}%0A` +
    `*Occasion:* ${encodeURIComponent(occasion)}%0A` +
    `*Target Date:* ${encodeURIComponent(date)}%0A` +
    `*Studio:* Behind R.K. Party Plot, PRL Colony, Sindhu Bhavan Road, Ambli, Ahmedabad%0A` +
    `----------------------------------------%0A` +
    `Hello Mita Manglani! I would like to reserve an intimate bridal salon consultation.`;

  window.open(`https://wa.me/919925000297?text=${msg}`, '_blank');
  closeSalonAppointmentModal();
}

// Live Filter Engine for collections.html
function filterCollectionsCategory(cat, btn) {
  if (btn) {
    document.querySelectorAll('.filter-category-btn').forEach(b => {
      b.classList.remove('bg-primary', 'text-[#faf8f5]');
      b.classList.add('bg-surface', 'text-on-surface-variant');
    });
    btn.classList.add('bg-primary', 'text-[#faf8f5]');
    btn.classList.remove('bg-surface', 'text-on-surface-variant');
  }

  const articles = document.querySelectorAll('[data-product-category]');
  let visibleCount = 0;
  articles.forEach(art => {
    const pieceCat = art.getAttribute('data-product-category');
    if (cat === 'All' || pieceCat === cat) {
      art.style.display = 'flex';
      visibleCount++;
    } else {
      art.style.display = 'none';
    }
  });

  const counter = document.getElementById('filterCountDisplay');
  if (counter) {
    counter.textContent = `EXHIBIT 01–${visibleCount < 10 ? '0' + visibleCount : visibleCount} OF ${MOH_CATALOG.length}`;
  }
}

// Dynamic PDP Renderer for product.html
function initDynamicProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'gilded-ochre';
  const p = MOH_CATALOG.find(item => item.id === productId) || MOH_CATALOG[0];

  const mainImg = document.getElementById('mainCoutureImage');
  if (mainImg) {
    mainImg.src = p.image;
    mainImg.alt = p.title;
  }

  const titleEl = document.querySelector('h1.font-headline-lg');
  if (titleEl) titleEl.textContent = p.title;

  const priceEl = document.querySelector('.font-headline-md');
  if (priceEl) {
    priceEl.setAttribute('data-inr-price', p.price);
    priceEl.textContent = formatPrice(p.price);
  }

  const breadcrumbEl = document.querySelector('.current-breadcrumb-title');
  if (breadcrumbEl) breadcrumbEl.textContent = p.title;

  // WhatsApp Concierge Button update
  const waBtn = document.querySelector('a[href*="wa.me/91"]');
  if (waBtn) {
    const waText = encodeURIComponent(`Hello MOH Atelier! I would like to commission "${p.title}" (${formatPrice(p.price)}). Can you share available fitting slots?`);
    waBtn.href = `https://wa.me/919925000297?text=${waText}`;
  }

  // Dynamic PDP Wishlist Button
  const pdpWishBtn = document.getElementById('pdpWishlistBtn');
  if (pdpWishBtn) {
    pdpWishBtn.setAttribute('data-product-id', p.id);
    pdpWishBtn.onclick = (e) => {
      toggleWishlistPiece(p.id, e);
      updatePdpWishlistState(p.id);
    };
    updatePdpWishlistState(p.id);
  }
}

function updatePdpWishlistState(id) {
  const pdpWishBtn = document.getElementById('pdpWishlistBtn');
  if (!pdpWishBtn) return;
  const icon = pdpWishBtn.querySelector('.material-symbols-outlined');
  const isSaved = personalWishlist.includes(id);
  if (isSaved) {
    pdpWishBtn.classList.add('border-primary', 'text-secondary');
    if (icon) {
      icon.textContent = 'favorite';
      icon.classList.add('text-secondary');
    }
  } else {
    pdpWishBtn.classList.remove('border-primary', 'text-secondary');
    if (icon) {
      icon.textContent = 'favorite_border';
      icon.classList.remove('text-secondary');
    }
  }
}

// Mobile Navigation Drawer Toggle
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  if (drawer && overlay) {
    const isClosed = drawer.classList.contains('-translate-x-full');
    if (isClosed) {
      drawer.classList.remove('-translate-x-full');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.add('-translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }
}

// PDP Color Hue Switcher
function setAtelierHue(name, colorHex, btn) {
  const label = document.getElementById('activeHueLabel');
  if (label) label.innerText = name;
  document.querySelectorAll('.hue-swatch-btn').forEach(b => {
    b.classList.remove('border-primary');
    b.classList.add('border-outline-variant', 'opacity-85');
  });
  if (btn) {
    btn.classList.add('border-primary');
    btn.classList.remove('border-outline-variant', 'opacity-85');
  }
}

// PDP Image Drape Switcher
function switchVisualDrape(idx, btn) {
  const mainImg = document.getElementById('mainCoutureImage');
  const thumbImgs = document.querySelectorAll('.gallery-thumb img');
  if (mainImg && thumbImgs[idx]) {
    mainImg.src = thumbImgs[idx].src;
  }
  document.querySelectorAll('.gallery-thumb').forEach(b => {
    b.classList.remove('border-2', 'border-primary');
    b.classList.add('border', 'border-outline-variant', 'opacity-80');
  });
  if (btn) {
    btn.classList.remove('border-outline-variant', 'opacity-80');
    btn.classList.add('border-2', 'border-primary');
  }
}

// PDP Tailoring Selection
let currentPdpSize = 'Custom Bespoke Fit';

function selectFitting(type, btnEl) {
  const bespokeCard = document.getElementById('bespokeTailorCard');
  const bespokeDot = document.getElementById('bespokeIndicatorDot');
  const sizeTabs = document.querySelectorAll('.standard-size-tab');
  const notice = document.getElementById('fitNoticeMsg');

  if (type === 'bespoke') {
    currentPdpSize = 'Custom Bespoke Fit';
    if (bespokeCard) {
      bespokeCard.classList.add('bg-[#1f1b19]', 'text-[#fbf9f6]', 'border-secondary/60');
      bespokeCard.classList.remove('bg-surface-container', 'text-primary');
    }
    if (bespokeDot) bespokeDot.classList.remove('opacity-0');
    sizeTabs.forEach(tab => {
      tab.classList.remove('bg-primary', 'text-surface', 'border-primary');
      tab.classList.add('bg-surface-container', 'text-primary');
    });
    if (notice) notice.innerText = 'Bespoke fit selected: Atelier pattern team connects over Zoom & WhatsApp within 24h.';
  } else {
    currentPdpSize = `Standard Size ${type}`;
    if (bespokeCard) {
      bespokeCard.classList.remove('bg-[#1f1b19]', 'text-[#fbf9f6]', 'border-secondary/60');
      bespokeCard.classList.add('bg-surface-container', 'text-primary');
    }
    if (bespokeDot) bespokeDot.classList.add('opacity-0');
    sizeTabs.forEach(tab => {
      tab.classList.remove('bg-primary', 'text-surface', 'border-primary');
      tab.classList.add('bg-surface-container', 'text-primary');
    });
    if (btnEl) {
      btnEl.classList.add('bg-primary', 'text-surface', 'border-primary');
      btnEl.classList.remove('bg-surface-container', 'text-primary');
    }
    if (notice) notice.innerText = `Standard Size ${type} chosen. Seamless 3-inch seam margins included for custom adjustments.`;
  }
}

function addToCartFromPdp() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'gilded-ochre';
  addToCart(productId, currentPdpSize, 1);
}

// Accordion Drawers for Craftsmanship Notes
function toggleAccordionDrawer(drawerId) {
  const el = document.getElementById(drawerId);
  const icon = document.getElementById('craft-icon-' + drawerId.split('-')[1]);
  if (!el) return;

  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
    if (icon) {
      icon.innerText = 'remove';
      icon.classList.add('rotate-180');
    }
  } else {
    el.classList.add('hidden');
    if (icon) {
      icon.innerText = 'add';
      icon.classList.remove('rotate-180');
    }
  }
}

// Generic Modal Controller
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// Trunk Viewing Submit
function handleTrunkSubmit(e) {
  if (e) e.preventDefault();
  alert('Thank you. A senior couture advisor from MOH Atelier Ahmedabad will connect with your private appointment details via WhatsApp.');
  toggleModal('trunkModal');
}

/* ==========================================================================
   MAISON CART & CHECKOUT ENGINE
   ========================================================================== */
let mohCart = JSON.parse(localStorage.getItem('moh_cart_v2') || '[]');

function saveCart() {
  localStorage.setItem('moh_cart_v2', JSON.stringify(mohCart));
  updateCartBadges();
  renderCartDrawer();
  if (window.location.pathname.includes('checkout.html')) {
    initCheckoutPage();
  }
}

function addToCart(productId, size = 'Custom Fit', qty = 1, e) {
  if (e) e.stopPropagation();
  const p = MOH_CATALOG.find(item => item.id === productId);
  if (!p) return;

  const existing = mohCart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += qty;
  } else {
    mohCart.push({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image,
      category: p.category,
      craft: p.craft,
      size: size,
      quantity: qty
    });
  }

  saveCart();
  showCartToast(`Added "${p.title}" to Maison Bag`);
  openCartDrawer();
}

function updateCartQuantity(productId, size, change) {
  const item = mohCart.find(i => i.id === productId && i.size === size);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    mohCart = mohCart.filter(i => !(i.id === productId && i.size === size));
  }
  saveCart();
}

function removeCartItem(productId, size) {
  mohCart = mohCart.filter(i => !(i.id === productId && i.size === size));
  saveCart();
}

function clearCart() {
  mohCart = [];
  saveCart();
}

function getCartSubtotal() {
  return mohCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartBadges() {
  const totalQty = mohCart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'inline-flex' : 'none';
  });
}

function openCartDrawer() {
  injectCartDrawerIfMissing();
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    renderCartDrawer();
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartDrawerSubtotal');
  if (!container) return;

  if (mohCart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-outline space-y-3 px-4">
        <span class="material-symbols-outlined text-[42px] text-secondary/40">shopping_bag</span>
        <p class="font-editorial italic text-lg text-primary">Your Maison Bag is empty.</p>
        <p class="text-xs uppercase tracking-wider text-on-surface-variant font-light">Explore our curated anthologies and reserve hand-embroidered silhouettes.</p>
        <a href="collections.html" onclick="closeCartDrawer()" class="inline-block mt-3 px-6 py-2.5 bg-[#1f1b19] text-[#ffd799] text-[10px] uppercase tracking-[0.24em] font-medium border border-[#765928]/40">Explore Collections</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    return;
  }

  container.innerHTML = mohCart.map(item => `
    <div class="flex items-start gap-3 py-4 border-b border-[#e7c185]/20 group">
      <img src="${item.image}" alt="${item.title}" class="w-16 h-20 object-cover border border-[#e7c185]/40 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <span class="text-[9px] uppercase tracking-widest text-secondary block truncate">${item.category}</span>
        <h5 class="font-editorial text-[15px] text-primary truncate leading-tight">${item.title}</h5>
        <div class="text-[10px] text-outline font-light mt-0.5">Fit: <span class="text-primary font-medium">${item.size}</span></div>
        <div class="flex items-center justify-between mt-2">
          <span class="text-[12px] font-semibold text-primary">${formatPrice(item.price * item.quantity)}</span>
          <div class="flex items-center border border-[#e7c185]/40 bg-white">
            <button onclick="updateCartQuantity('${item.id}', '${item.size}', -1)" class="w-6 h-6 flex items-center justify-center text-primary hover:bg-[#fbf9f6] text-xs cursor-pointer">-</button>
            <span class="w-7 text-center text-[11px] font-medium">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', '${item.size}', 1)" class="w-6 h-6 flex items-center justify-center text-primary hover:bg-[#fbf9f6] text-xs cursor-pointer">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeCartItem('${item.id}', '${item.size}')" class="text-outline hover:text-red-500 text-[18px] p-1 flex-shrink-0 cursor-pointer" title="Remove silhouette">
        <span class="material-symbols-outlined text-[17px]">delete</span>
      </button>
    </div>
  `).join('');

  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(getCartSubtotal());
  }
}

function shareCartToWhatsApp() {
  if (mohCart.length === 0) {
    alert("Your Maison Bag is empty. Please add silhouettes first.");
    return;
  }
  const itemsText = mohCart.map((p, i) => `${i + 1}. *${p.title}* (Fit: ${p.size}) x ${p.quantity} = ${formatPrice(p.price * p.quantity)}`).join('%0A');
  const subtotal = formatPrice(getCartSubtotal());
  const msg = `👑 *MOH ATELIER AHMEDABAD - CART ORDER INQUIRY*%0A` +
    `----------------------------------------%0A` +
    `${itemsText}%0A` +
    `----------------------------------------%0A` +
    `*Estimated Subtotal:* ${subtotal}%0A` +
    `*Currency:* ${currentCurrency}%0A` +
    `----------------------------------------%0A` +
    `Hello MOH Atelier! I would like to reserve and confirm these pieces from my Maison Bag.`;

  window.open(`https://wa.me/919925000297?text=${msg}`, '_blank');
}

function proceedToCheckout() {
  if (mohCart.length === 0) {
    alert("Please add silhouettes to your Maison Bag before checking out.");
    return;
  }
  closeCartDrawer();
  window.location.href = 'checkout.html';
}

function showCartToast(message) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.className = 'fixed top-20 right-6 z-50 bg-[#1a1514] text-[#ffd799] border border-[#ffd799]/40 px-5 py-3 shadow-2xl flex items-center gap-3 transition-all duration-300 transform -translate-y-6 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
    <span class="text-[11px] uppercase tracking-[0.2em] font-medium text-white">${message}</span>
  `;

  toast.classList.remove('-translate-y-6', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('-translate-y-6', 'opacity-0', 'pointer-events-none');
  }, 3200);
}

function injectCartDrawerIfMissing() {
  if (document.getElementById('cartDrawer')) return;

  const overlay = document.createElement('div');
  overlay.id = 'cartOverlay';
  overlay.className = 'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300';
  overlay.onclick = closeCartDrawer;

  const drawer = document.createElement('aside');
  drawer.id = 'cartDrawer';
  drawer.className = 'fixed top-0 right-0 bottom-0 w-96 max-w-[92vw] bg-[#fbf9f6] border-l border-[#e7c185]/40 z-50 translate-x-full transition-transform duration-300 flex flex-col justify-between p-6 shadow-2xl';
  drawer.innerHTML = `
    <div class="flex flex-col h-full justify-between">
      <div>
        <div class="flex items-center justify-between pb-5 border-b border-[#e7c185]/30">
          <div>
            <span class="block font-editorial text-2xl tracking-[0.2em] uppercase text-[#120e0d]">Maison Bag</span>
            <span class="block text-[9px] tracking-[0.3em] uppercase text-[#765928] font-medium mt-0.5">Selected Silhouettes (<span class="cart-count-badge">0</span>)</span>
          </div>
          <button onclick="closeCartDrawer()" class="p-2 text-primary hover:text-secondary cursor-pointer" aria-label="Close Bag">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <div id="cartItemsContainer" class="max-h-[56vh] overflow-y-auto divide-y divide-[#e7c185]/20 py-2 pr-1"></div>
      </div>
      <div class="pt-5 border-t border-[#e7c185]/30 space-y-3">
        <div class="flex items-center justify-between text-primary mb-2">
          <span class="text-[11px] uppercase tracking-[0.24em] font-light">Subtotal:</span>
          <span id="cartDrawerSubtotal" class="font-headline-sm text-[18px] font-semibold text-primary">₹0</span>
        </div>
        <p class="text-[10px] text-outline font-light italic">Insured heritage courier across India · Worldwide diaspora dispatch.</p>
        <button onclick="proceedToCheckout()" class="w-full py-3.5 bg-[#1f1b19] hover:bg-black text-[#ffd799] hover:text-white text-[11px] tracking-[0.24em] uppercase font-medium flex items-center justify-center gap-2 border border-[#765928]/40 transition-all shadow-md cursor-pointer">
          <span class="material-symbols-outlined text-[17px]">credit_card</span>
          <span>Proceed to Checkout Summary →</span>
        </button>
        <button onclick="shareCartToWhatsApp()" class="w-full py-2.5 border border-[#765928]/40 text-primary hover:bg-[#1f1b19] hover:text-[#ffd799] text-[10px] tracking-[0.22em] uppercase font-medium flex items-center justify-center gap-2 transition-all cursor-pointer">
          <span class="material-symbols-outlined text-[16px]">forum</span>
          <span>Order via WhatsApp Direct</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);
}

/* ==========================================================================
   FLOATING WHATSAPP BUTTON (ALL PAGES)
   ========================================================================== */
function injectFloatingWhatsAppWidget() {
  if (document.getElementById('floatingWhatsAppWidget')) return;

  const widget = document.createElement('div');
  widget.id = 'floatingWhatsAppWidget';
  widget.className = 'fixed bottom-6 right-6 z-40 group';
  widget.innerHTML = `
    <!-- Floating Tooltip on Desktop -->
    <div class="hidden md:flex absolute right-full mr-3.5 top-1/2 -translate-y-1/2 items-center gap-2.5 px-3.5 py-2 bg-[#191514] text-[#ffd799] border border-[#ffd799]/40 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
      <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
      <span class="text-[10px] uppercase tracking-[0.22em] font-medium">WhatsApp Concierge · Online</span>
    </div>
    <!-- Floating Button with Pulse Halo -->
    <a href="https://wa.me/919925000297?text=Hello%20MOH%20Studio%20Ahmedabad!%20I%20am%20browsing%20your%20bespoke%20couture%20collections%20and%20would%20like%20assistance." target="_blank" rel="noopener noreferrer" class="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1b1716] border border-[#ffd799]/60 flex items-center justify-center text-[#25D366] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:scale-105 active:scale-95" aria-label="Chat on WhatsApp">
      <span class="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#120e0d] animate-pulse"></span>
      <svg class="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
  </div>
  `;

  document.body.appendChild(widget);
}

/* ==========================================================================
   CHECKOUT PAGE SUMMARY INITIALIZATION (checkout.html)
   ========================================================================== */
function initCheckoutPage() {
  const container = document.getElementById('checkoutItemsList');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const totalEl = document.getElementById('checkoutTotal');
  const emptyState = document.getElementById('checkoutEmptyState');
  const contentState = document.getElementById('checkoutContentState');
  if (!container) return;

  if (mohCart.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (contentState) contentState.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (contentState) contentState.classList.remove('hidden');

  container.innerHTML = mohCart.map(item => `
    <div class="flex items-center gap-4 py-4 border-b border-[#e7c185]/20">
      <img src="${item.image}" alt="${item.title}" class="w-16 h-20 object-cover border border-[#e7c185]/40 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <span class="text-[9px] uppercase tracking-widest text-[#765928] block truncate">${item.category}</span>
        <h4 class="font-editorial text-[16px] text-primary truncate leading-tight">${item.title}</h4>
        <div class="text-[11px] text-on-surface-variant font-light mt-0.5">Fit: <span class="text-primary font-medium">${item.size}</span> · Qty: <span class="font-medium">${item.quantity}</span></div>
      </div>
      <div class="text-right flex-shrink-0">
        <span class="text-[14px] font-semibold text-primary block">${formatPrice(item.price * item.quantity)}</span>
        <button onclick="removeCartItem('${item.id}', '${item.size}')" class="text-[10px] uppercase tracking-wider text-outline hover:text-red-500 mt-1 cursor-pointer">Remove</button>
      </div>
    </div>
  `).join('');

  const subtotal = getCartSubtotal();
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(subtotal);
}

function submitCheckoutOrder(event) {
  event.preventDefault();
  if (mohCart.length === 0) {
    alert("Your cart is empty. Please add pieces before completing checkout.");
    return;
  }

  const name = document.getElementById('patronName')?.value || '';
  const phone = document.getElementById('patronPhone')?.value || '';
  const email = document.getElementById('patronEmail')?.value || '';
  const address = document.getElementById('patronAddress')?.value || '';
  const city = document.getElementById('patronCity')?.value || '';
  const country = document.getElementById('patronCountry')?.value || 'India';
  const notes = document.getElementById('patronNotes')?.value || 'Standard bespoke tailoring';
  const targetDate = document.getElementById('targetDate')?.value || 'Flexible';

  const orderId = 'MOH-' + Math.floor(100000 + Math.random() * 900000);
  const itemsText = mohCart.map((p, i) => `${i + 1}. *${p.title}* (Fit: ${p.size}) x ${p.quantity} = ${formatPrice(p.price * p.quantity)}`).join('%0A');
  const subtotal = formatPrice(getCartSubtotal());

  const msg = `👑 *MOH ATELIER AHMEDABAD - OFFICIAL PATRON ORDER*%0A` +
    `----------------------------------------%0A` +
    `*Order Ref:* #${orderId}%0A` +
    `*Patron Name:* ${encodeURIComponent(name)}%0A` +
    `*WhatsApp:* ${encodeURIComponent(phone)}%0A` +
    `*Email:* ${encodeURIComponent(email)}%0A` +
    `*Delivery City:* ${encodeURIComponent(city)}, ${encodeURIComponent(country)}%0A` +
    `*Full Address:* ${encodeURIComponent(address)}%0A` +
    `*Target Event Date:* ${encodeURIComponent(targetDate)}%0A` +
    `*Tailoring / Notes:* ${encodeURIComponent(notes)}%0A` +
    `----------------------------------------%0A` +
    `*Selected Silhouettes:*%0A${itemsText}%0A` +
    `----------------------------------------%0A` +
    `*Total Order Amount:* ${subtotal}%0A` +
    `*Currency:* ${currentCurrency}%0A` +
    `*Courier:* Complimentary Insured Atelier Transit%0A` +
    `----------------------------------------%0A` +
    `Hello Mita Manglani! I have submitted this bespoke couture order via your website. Please confirm bank wire / payment invoice details.`;

  window.open(`https://wa.me/919925000297?text=${msg}`, '_blank');
  alert(`Thank you, ${name}! Your order ticket #${orderId} has been submitted to MOH Concierge via WhatsApp. An artisan host will coordinate your fitting.`);
  clearCart();
  window.location.href = 'index.html';
}

/* ==========================================================================
   GLOBAL MOBILE RESPONSIVE CSS INJECTOR
   ========================================================================== */
function injectMobileResponsiveCSS() {
  if (document.getElementById('moh-mobile-css')) return;
  const style = document.createElement('style');
  style.id = 'moh-mobile-css';
  style.textContent = `
    /* ---- Base overflow prevention (body only — html breaks scroll) ---- */
    body { overflow-x: hidden; }

    /* ============================================================
       HEADER: Concierge top bar — streamline for mobile
       ============================================================ */
    @media (max-width: 479px) {
      .moh-concierge-sep { display: inline-block !important; opacity: 0.4; }
      .moh-currency-row { display: flex !important; font-size: 9.5px !important; }
      .moh-currency-row button { font-size: 9.5px !important; }
    }

    /* ============================================================
       HEADER: Middle tier — tighten padding & gap on mobile
       ============================================================ */
    @media (max-width: 639px) {
      .moh-header-mid { padding-top: 0.6rem !important; padding-bottom: 0.6rem !important; padding-left: 1rem !important; padding-right: 1rem !important; }
      .moh-logo-wordmark { font-size: 22px !important; letter-spacing: 0.28em !important; }
      .moh-logo-sub { font-size: 7.5px !important; letter-spacing: 0.28em !important; margin-top: 2px !important; }
      .moh-left-utility { gap: 0.5rem !important; }
      .moh-right-utility { gap: 0.4rem !important; }
    }
    @media (max-width: 379px) {
      .moh-logo-wordmark { font-size: 18px !important; letter-spacing: 0.2em !important; }
      .moh-logo-sub { display: none !important; }
    }

    /* ============================================================
       MAIN CONTENT: Responsive top padding for fixed header
       ============================================================ */
    main.moh-main { padding-top: 108px !important; }
    @media (min-width: 1024px) { main.moh-main { padding-top: 135px !important; } }

    /* ============================================================
       FLOATING WHATSAPP & SAFE AREA
       ============================================================ */
    #floatingWhatsAppWidget { bottom: 1.25rem; right: 1.25rem; z-index: 40; }
    @media (max-width: 640px) {
      #floatingWhatsAppWidget { bottom: 0.875rem; right: 0.875rem; }
      #floatingWhatsAppWidget a { width: 2.75rem !important; height: 2.75rem !important; }
      #floatingWhatsAppWidget svg { width: 1.25rem !important; height: 1.25rem !important; }
    }
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      #floatingWhatsAppWidget { bottom: calc(1rem + env(safe-area-inset-bottom)); }
      #cartDrawer, #wishlistDrawer, #mobileNavDrawer { padding-bottom: calc(1.5rem + env(safe-area-inset-bottom)); }
    }

    /* ============================================================
       CART & WISHLIST DRAWERS
       ============================================================ */
    #cartDrawer, #wishlistDrawer { width: min(24rem, 94vw); }
    @media (max-width: 380px) {
      #cartDrawer, #wishlistDrawer { width: 100vw; max-width: 100vw; padding: 0.875rem; }
    }
    #cartItemsContainer, #wishlistItemsContainer { max-height: 50vh; }

    /* ============================================================
       FILTER BAR & TOUCH SCROLL
       ============================================================ */
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .no-scrollbar::-webkit-scrollbar { display: none; }

    /* ============================================================
       TOUCH DISPLAY: Make card actions accessible on mobile/touch
       ============================================================ */
    @media (max-width: 768px) {
      article.group .opacity-0.group-hover\:opacity-100 {
        opacity: 1 !important;
      }
    }

    /* ============================================================
       MODALS: Mobile viewport protection & smooth scroll
       ============================================================ */
    @media (max-width: 640px) {
      #searchModal > div, #salonModal > div, #fitModal > div, #trunkModal > div {
        max-height: 88vh;
        overflow-y: auto;
        padding: 1.25rem !important;
        width: calc(100% - 1.5rem);
      }
    }

    /* ============================================================
       CHECKOUT FORM: prevent iOS auto-zoom on inputs
       ============================================================ */
    @media (max-width: 640px) {
      form input, form select, form textarea { font-size: 16px !important; }
      #checkoutItemsList img { width: 3.5rem; height: 4.5rem; }
    }

    /* ============================================================
       TOAST
       ============================================================ */
    #mohCartToast { right: 1rem; bottom: 5rem; left: 1rem; max-width: none; text-align: center; }
    @media (min-width: 641px) {
      #mohCartToast { left: auto; right: 1.5rem; bottom: 2rem; max-width: 22rem; }
    }

    /* ============================================================
       MOBILE NAV DRAWER
       ============================================================ */
    #mobileNavDrawer nav { overflow-y: auto; max-height: calc(100vh - 180px); }

    /* ============================================================
       COLLECTIONS: card action buttons wrap safety
       ============================================================ */
    @media (max-width: 380px) {
      .moh-card-actions { flex-direction: column; gap: 0.25rem; }
      .moh-card-actions a, .moh-card-actions button { width: 100%; text-align: center; justify-content: center; }
    }

    /* ============================================================
       HERO SECTION: text safety on small screens
       ============================================================ */
    @media (max-width: 479px) {
      .moh-hero h1 { font-size: 2.2rem !important; line-height: 1.15 !important; }
      .moh-hero p { font-size: 0.875rem !important; }
    }

    /* Global word break protection */
    h1, h2, h3, h4, p {
      overflow-wrap: break-word;
    }
  `;
  document.head.appendChild(style);
}

// Global DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  injectMobileResponsiveCSS();
  updateCurrencyDisplay();
  updateWishlistBadges();
  updateCartBadges();
  injectCartDrawerIfMissing();
  injectFloatingWhatsAppWidget();

  if (window.location.pathname.includes('product.html')) {
    initDynamicProductDetail();
  }

  if (window.location.pathname.includes('checkout.html')) {
    initCheckoutPage();
  }
});
