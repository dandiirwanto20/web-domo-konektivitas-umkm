const products = [
  {
    id: "tote-elegan-01",
    name: "Tas Tote Elegan - Coklat Karamel",
    category: ["wanita", "kerja"],
    price: 289000,
    tag: "New Arrival",
    image:
      "https://images.pexels.com/photos/2528126/pexels-photo-2528126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    material: "Kulit sintetis premium",
    size: "30 x 24 x 12 cm",
    stockInfo: "Ready stock",
    rating: 4.9,
    sold: 230,
    featured: true,
  },
  {
    id: "ransel-pria-01",
    name: "Tas Ransel Pria Urban Black",
    category: ["pria", "kerja"],
    price: 319000,
    tag: "Best Seller",
    image:
      "https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg?auto=compress&cs=tinysrgb&w=1200",
    material: "Kanvas tebal anti air",
    size: "32 x 45 x 14 cm",
    stockInfo: "Ready stock",
    rating: 4.8,
    sold: 410,
    featured: true,
  },
  {
    id: "sling-wanita-01",
    name: "Tas Selempang Mini - Cream",
    category: ["wanita", "casual"],
    price: 199000,
    tag: "Favorit",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200",
    material: "Kulit sintetis halus",
    size: "20 x 14 x 7 cm",
    stockInfo: "Ready stock",
    rating: 4.9,
    sold: 360,
    featured: false,
  },
  {
    id: "totebag-kain-01",
    name: "Totebag Canvas Casual",
    category: ["wanita", "casual"],
    price: 159000,
    tag: "Hemat",
    image:
      "https://images.pexels.com/photos/5624304/pexels-photo-5624304.jpeg?auto=compress&cs=tinysrgb&w=1200",
    material: "Canvas tebal",
    size: "34 x 32 x 10 cm",
    stockInfo: "Ready stock",
    rating: 4.7,
    sold: 190,
    featured: false,
  },
  {
    id: "kerja-wanita-01",
    name: "Work Bag Premium - Hitam",
    category: ["wanita", "kerja"],
    price: 349000,
    tag: "Office Ready",
    image:
      "https://images.pexels.com/photos/1488464/pexels-photo-1488464.jpeg?auto=compress&cs=tinysrgb&w=1200",
    material: "Kulit sintetis premium",
    size: "32 x 25 x 10 cm",
    stockInfo: "Ready stock",
    rating: 4.9,
    sold: 280,
    featured: true,
  },
  {
    id: "ransel-kasual-01",
    name: "Ransel Casual Navy",
    category: ["pria", "casual"],
    price: 249000,
    tag: "Daily Use",
    image:
      "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1200",
    material: "Polyester anti air",
    size: "30 x 42 x 13 cm",
    stockInfo: "Ready stock",
    rating: 4.8,
    sold: 215,
    featured: false,
  },
];

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

const state = {
  filter: "all",
  cart: [],
};

// Ganti dengan nomor WhatsApp admin Anda (format internasional tanpa +, contoh: 6281234567890)
const WHATSAPP_NUMBER = "6285292768968";

function getWhatsAppDisplay(number) {
  if (typeof number !== "string") return number;
  if (number.startsWith("62")) {
    return "0" + number.slice(2);
  }
  return number;
}

const productGrid = document.getElementById("product-grid");
const bestSellerGrid = document.getElementById("best-seller-grid");
const cartPanel = document.getElementById("cart-panel");
const overlay = document.getElementById("overlay");
const cartToggle = document.getElementById("cart-toggle");
const cartClose = document.getElementById("cart-close");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearSpan = document.getElementById("year");

function renderProducts() {
  productGrid.innerHTML = "";
  const filtered =
    state.filter === "all"
      ? products
      : products.filter((p) => p.category.includes(state.filter));

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-badge">${product.tag}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-meta">
          <span>${product.material}</span>
          <span><span class="dot"></span>${product.stockInfo}</span>
        </div>
        <div class="product-meta">
          <span>Ukuran: ${product.size}</span>
          <span>⭐ ${product.rating} • ${product.sold}+ terjual</span>
        </div>
        <div class="product-price">${formatRupiah(product.price)}</div>
        <div class="product-footer">
          <button class="btn btn-primary" data-add-cart="${product.id}">
            Tambah ke Keranjang
          </button>
          <button class="btn btn-outline" data-scroll-kontak>
            Tanya Admin
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function renderBestSeller() {
  const best = [...products]
    .filter((p) => p.featured)
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 2);

  bestSellerGrid.innerHTML = "";

  best.forEach((product) => {
    const wrapper = document.createElement("article");
    wrapper.className = "product-highlight-main";
    wrapper.innerHTML = `
      <div class="product-highlight-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-highlight-body">
        <span class="badge-soft">Best Seller</span>
        <h3>${product.name}</h3>
        <p>
          Tas favorit pelanggan dengan kualitas terbaik dan desain yang
          tetap nyaman dipakai seharian.
        </p>
        <div class="product-highlight-tags">
          ${product.category
            .map((c) => `<span class="tag">#${c}</span>`)
            .join("")}
          <span class="tag">${product.material}</span>
        </div>
        <div class="product-highlight-price">${formatRupiah(
          product.price
        )}</div>
        <div class="product-highlight-stats">
          <span>⭐ ${product.rating} rating pelanggan</span>
          <span>🔥 ${product.sold}+ tas terjual</span>
          <span>✅ ${product.stockInfo}</span>
        </div>
        <div style="margin-top: 0.8rem; display: flex; gap: 0.6rem; flex-wrap: wrap;">
          <button class="btn btn-primary" data-add-cart="${product.id}">
            Tambah ke Keranjang
          </button>
          <button class="btn btn-ghost" data-scroll-kontak>
            Konsultasi Ukuran
          </button>
        </div>
      </div>
    `;
    bestSellerGrid.appendChild(wrapper);
  });
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("visible");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("visible");
  cartPanel.setAttribute("aria-hidden", "true");
}

function updateCartUI() {
  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p class="cart-empty">Keranjang masih kosong.</p>';
    cartTotal.textContent = "Rp0";
    cartCount.textContent = "0";
    checkoutBtn.disabled = true;
    return;
  }

  let total = 0;
  let count = 0;
  cartItemsContainer.innerHTML = "";

  state.cart.forEach((item) => {
    const subtotal = item.product.price * item.qty;
    total += subtotal;
    count += item.qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title">${item.product.name}</div>
        <div class="cart-item-meta">
          <span>${formatRupiah(item.product.price)}</span> •
          <span>Ukuran: ${item.product.size}</span>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-btns">
          <button data-dec="${item.product.id}">-</button>
          <span class="qty-value">${item.qty}</span>
          <button data-inc="${item.product.id}">+</button>
        </div>
        <button class="remove-btn" data-remove="${item.product.id}">
          Hapus
        </button>
        <span style="font-size: 0.75rem; color: #e5e7eb;">
          ${formatRupiah(subtotal)}
        </span>
      </div>
    `;
    cartItemsContainer.appendChild(row);
  });

  cartTotal.textContent = formatRupiah(total);
  cartCount.textContent = count.toString();
  checkoutBtn.disabled = false;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const existing = state.cart.find((item) => item.product.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ product, qty: 1 });
  }
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = state.cart.find((i) => i.product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((i) => i.product.id !== productId);
  }
  updateCartUI();
}

function removeItem(productId) {
  state.cart = state.cart.filter((i) => i.product.id !== productId);
  updateCartUI();
}

function handleFilterClick(e) {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  const filter = btn.dataset.filter;
  if (!filter) return;
  state.filter = filter;

  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b === btn);
  });

  renderProducts();
}

function handleProductClick(e) {
  const addBtn = e.target.closest("[data-add-cart]");
  const contactBtn = e.target.closest("[data-scroll-kontak]");

  if (addBtn) {
    const id = addBtn.getAttribute("data-add-cart");
    addToCart(id);
    openCart();
  }

  if (contactBtn) {
    const contactSection = document.getElementById("kontak");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function handleCartClick(e) {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  const remove = e.target.closest("[data-remove]");

  if (inc) {
    changeQty(inc.getAttribute("data-inc"), 1);
  }
  if (dec) {
    changeQty(dec.getAttribute("data-dec"), -1);
  }
  if (remove) {
    removeItem(remove.getAttribute("data-remove"));
  }
}

function initNavToggle() {
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

function initCart() {
  cartToggle?.addEventListener("click", openCart);
  cartClose?.addEventListener("click", closeCart);
  overlay?.addEventListener("click", () => {
    closeCart();
    navLinks?.classList.remove("open");
  });
}

function initFilters() {
  const filtersContainer = document.querySelector(".filters");
  filtersContainer?.addEventListener("click", handleFilterClick);
}

function initProductInteractions() {
  productGrid?.addEventListener("click", handleProductClick);
  bestSellerGrid?.addEventListener("click", handleProductClick);
  cartItemsContainer?.addEventListener("click", handleCartClick);
}

function initCheckoutDemo() {
  checkoutBtn?.addEventListener("click", () => {
    if (!state.cart.length) {
      alert("Keranjang masih kosong. Silakan pilih tas terlebih dahulu.");
      return;
    }

    let total = 0;
    let text =
      "Halo Admin Domo Konektivitas,%0A%0ASaya ingin melakukan pemesanan tas dengan detail berikut:%0A";

    state.cart.forEach((item) => {
      const subtotal = item.product.price * item.qty;
      total += subtotal;
      text += `%0A- ${item.product.name} (${item.qty}x) - ${formatRupiah(
        item.product.price
      )}`;
    });

    text += `%0A%0ATotal: ${formatRupiah(
      total
    )}%0A%0ANama:%0AAlamat lengkap:%0AMetode pembayaran (Transfer/COD bila tersedia):%0ACatatan tambahan:`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  });
}

function initYear() {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

function initContactInfo() {
  const waSpan = document.getElementById("wa-number-display");
  if (waSpan) {
    waSpan.textContent = getWhatsAppDisplay(WHATSAPP_NUMBER);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderBestSeller();
  initNavToggle();
  initCart();
  initFilters();
  initProductInteractions();
  initCheckoutDemo();
  initYear();
  initContactInfo();
});

