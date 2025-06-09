import React from "react";

const products = [
  {
    img: "image/JAJANAN & MINUMAN/AQUA 1,5L.jpg",
    name: "Aqua 1,5L",
    price: "Rp 8.000",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/BKPIA KEJU & KACANG HIJAU.jpg",
    name: "Bakpia Keju & Kacang Hijau",
    price: "Rp 2.000",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/CHOCODRINK.jpg",
    name: "Chocodrink",
    price: "Rp 2.000",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/CHOCOLATOS COKLAT.jpg",
    name: "Chocolatos Coklat",
    price: "Rp 2.500",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/CHOCOLATOS MATCHA.jpg",
    name: "Chocolatos Matcha",
    price: "Rp 2.500",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/CHOCOLATOS.jpg",
    name: "Chocolatos",
    price: "Rp 1.000",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/CHOCOPUFF.jpg",
    name: "Choco Puff",
    price: "Rp unknown",
    stock: "Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/CRISPY CRAKERS.jpg",
    name: "Crispy Crackers",
    price: "Rp 13.000",
    stock: "Tersedia",
  },
];

const CategoryJajananMinuman = () => (
  <>
    {/* Header */}
    <header>
      <div className="container">
        <div className="logo">
          <h1>Kirei's Mart</h1>
          <p>Sembako Lengkap & Terjangkau</p>
        </div>
        <div className="nav-icons">
          <a href="cart.html">
            <i className="fas fa-shopping-cart"></i> Keranjang{" "}
            <span className="cart-count">0</span>
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
        <h1>Jajanan dan Minuman</h1>
        <p>
          Aneka snack, biskuit, minuman kemasan, kopi, teh, dan minuman segar
          untuk menemani hari-hari Anda
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
              <option value="snack">Snack & Biskuit</option>
              <option value="minuman">Minuman Kemasan</option>
              <option value="kopi">Kopi & Teh</option>
              <option value="susu">Susu & Yogurt</option>
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
                  <button className="btn-add-cart">Tambah ke Keranjang</button>
                  <button className="btn-details">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <a
            href="category-jajanan-minuman.html"
            className="pagination-item active"
          >
            1
          </a>
          <a
            href="category-jajanan-minuman-page2.html"
            className="pagination-item"
          >
            2
          </a>
          <a
            href="category-jajanan-minuman-page3.html"
            className="pagination-item"
          >
            3
          </a>
          <a
            href="category-jajanan-minuman-page4.html"
            className="pagination-item"
          >
            4
          </a>
          <a
            href="category-jajanan-minuman-page5.html"
            className="pagination-item"
          >
            5
          </a>
          <a
            href="category-jajanan-minuman-page2.html"
            className="pagination-item"
          >
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
                <a href="category-jajanan-minuman.html">Jajanan dan Minuman</a>
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

export default CategoryJajananMinuman;
