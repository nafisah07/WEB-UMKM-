import React, { useState } from "react";

const products = [
  {
    img: "image/NON FOOD/AMPLOP.jpg",
    name: "Amplop",
    price: "Rp 2000/3 lembar",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/BATERAII.jpg",
    name: "Baterai",
    price: "Rp 2000/btg",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/CHARM SAFENIGHT 29cm.jpg",
    name: "Charm Safenight 29cm",
    price: "Rp 3000/bks",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/CHARM WING 23cm.jpg",
    name: "Charm Wing 23cm",
    price: "Rp 4000",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/CIPTADENT 75gr 4000 _ 120gr 7500.jpg",
    name: "Ciptadent 75gr",
    price: "Rp 4000",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/CONDITIONER SASET PANTENE.jpg",
    name: "Conditioner Pantene Saset",
    price: "Rp 1000/bks",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/DETERGEN DAIA 1000.jpg",
    name: "Detergen Daia",
    price: "Rp 1000/bks",
    stock: "Tersedia",
  },
  {
    img: "image/NON FOOD/DOWNY 22000.jpg",
    name: "Downy",
    price: "Rp 2.200/bks",
    stock: "Tersedia",
  },
];

const CategoryNonfood = () => {
  // State untuk update tampilan jika perlu (opsional, bisa dihapus jika tidak ingin notifikasi)
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        return JSON.parse(stored).reduce((a, b) => a + (b.qty || 1), 0);
      } catch {
        return 0;
      }
    }
    return 0;
  });

  // Fungsi menambah ke keranjang (localStorage)
  const addToCart = (product) => {
    const stored = localStorage.getItem("cart");
    let cart = stored ? JSON.parse(stored) : [];
      // Konversi price ke number (ambil angka saja)
    const priceNumber = Number((product.price.match(/\d+/g) || []).join(""));
    // Buat id unik dari nama produk
    const id = product.name.replace(/\s+/g, "-").toLowerCase();
    const item = {
      id,
      name: product.name,
      price: priceNumber,
      image: product.img,
      qty: 1,
    };
    const idx = cart.findIndex((p) => p.id === item.id);
    if (idx !== -1) {
      cart[idx].qty = (cart[idx].qty || 1) + 1;
    } else {
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((a, b) => a + (b.qty || 1), 0));
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="logo">
            <h1>Kirei's Mart</h1>
            <p>Sembako Lengkap & Terjangkau</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Cari produk..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="nav-icons">
            <a href="cart.html">
              <i className="fas fa-shopping-cart"></i> Keranjang{" "}
              <span className="cart-count">{cartCount}</span>
            </a>
            <a href="account.html">
              <i className="fas fa-user"></i> Akun
            </a>
          </div>
        </div>
      </header>

      {/* Category Hero */}
      <section className="category-hero">
        <div className="container">
          <h1>Nonfood</h1>
          <p>
            Produk kebersihan, peralatan rumah tangga, dan kebutuhan sehari-hari
            untuk rumah Anda
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-options">
              <select className="filter-select">
                <option value="">Semua Produk</option>
                <option value="kebersihan">Produk Kebersihan</option>
                <option value="peralatan">Peralatan Rumah Tangga</option>
                <option value="toiletries">Toiletries</option>
                <option value="lainnya">Lainnya</option>
              </select>
              <select className="filter-select">
                <option value="">Semua Harga</option>
                <option value="0-10000">Rp 0 - Rp 10.000</option>
                <option value="10000-25000">Rp 10.000 - Rp 25.000</option>
                <option value="25000-50000">Rp 25.000 - Rp 50.000</option>
                <option value="50000+">Rp 50.000+</option>
              </select>
            </div>
            <div className="sort-options">
              <span className="sort-label">Urutkan:</span>
              <select className="sort-select">
                <option value="popular">Paling Populer</option>
                <option value="newest">Terbaru</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="product-content">
                  <h3>{p.name}</h3>
                  <div className="price">{p.price}</div>
                  <div className="stock">Stok: {p.stock}</div>
                  <div className="product-actions">
                    <button
                      className="btn-add-cart"
                      onClick={() => addToCart(p)}
                    >
                      Tambah ke Keranjang
                    </button>
                    <button className="btn-details">Detail</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <a href="category-nonfood.html" className="pagination-item active">
              1
            </a>
            <a href="category-nonfood-page2.html" className="pagination-item">
              2
            </a>
            <a href="category-nonfood-page3.html" className="pagination-item">
              3
            </a>
            <a href="category-nonfood-page4.html" className="pagination-item">
              4
            </a>
            <a href="category-nonfood-page5.html" className="pagination-item">
              5
            </a>
            <a href="category-nonfood-page6.html" className="pagination-item">
              6
            </a>
            <a href="category-nonfood-page2.html" className="pagination-item">
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Kirei's Mart</h3>
              <p>
                Toko sembako online terlengkap dengan harga terjangkau dan
                pengiriman cepat ke seluruh Indonesia.
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Kategori</h3>
              <ul>
                <li>
                  <a href="category-bahan-makanan.html">Bahan Makanan</a>
                </li>
                <li>
                  <a href="category-bumbu-masakan.html">Bumbu Masakan</a>
                </li>
                <li>
                  <a href="category-jajanan-minuman.html">
                    Jajanan dan Minuman
                  </a>
                </li>
                <li>
                  <a href="category-mie.html">Mie</a>
                </li>
                <li>
                  <a href="category-nonfood.html">Nonfood</a>
                </li>
                <li>
                  <a href="category-obat.html">Obat-obatan</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Informasi</h3>
              <ul>
                <li>
                  <a href="about.html">Tentang Kami</a>
                </li>
                <li>
                  <a href="contact.html">Hubungi Kami</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="privacy.html">Kebijakan Privasi</a>
                </li>
                <li>
                  <a href="terms.html">Syarat & Ketentuan</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Kontak</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Jl. Pasar Baru No.
                  123, Jakarta
                </li>
                <li>
                  <i className="fas fa-phone"></i> +62 812-3456-7890
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@kireimart.com
                </li>
                <li>
                  <i className="fas fa-clock"></i> Senin - Minggu: 08:00 - 20:00
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Kirei's Mart. All Rights Reserved.</p>
            <div className="payment-methods">
              <img src="image/payment-methods.png" alt="Metode Pembayaran" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CategoryNonfood;
