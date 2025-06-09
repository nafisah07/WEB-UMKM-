import React from "react";
import { Link } from "react-router-dom";
import "./CategoryNonfoodPage2.css";

const products = [
  {
    img: "/image/NON FOOD/GENTLE GEN 1000.jpg",
    name: "Gentle Gen",
    price: "Rp 1000/bks",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/KAPAS SELECTION 6000.jpg",
    name: "Kapas Detelgen",
    price: "Rp 6000",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/KAPUR AJAIB 4rb.jpg",
    name: "Kapur ajaib",
    price: "Rp 4000",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/KAPUR BARUS.jpg",
    name: "Kapur Barus",
    price: "Rp 3000",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/KISPRAY_.jpg",
    name: "Kispray",
    price: "Rp 500/bks",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/LAMPU 10w & 15w.jpg",
    name: "Lampu 10w",
    price: "Rp 13.000",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/LAMPU 10w & 15w.jpg",
    name: "Lampu 15w",
    price: "Rp 18.000",
    stock: "Tersedia",
  },
  {
    img: "/image/NON FOOD/LEM KERTAS.jpg",
    name: "Lem Kertas",
    price: "Rp 2000",
    stock: "Tersedia",
  },
];

const CategoryNonfoodPage2 = () => (
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
            <span className="cart-count">0</span>
          </a>
          <a href="account.html">
            <i className="fas fa-user"></i> Akun
          </a>
        </div>
      </div>
    </header>

    {/* Navigation */}
    <nav>
      <div className="container">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">Tentang Kami</a>
          </li>
          <li className="dropdown">
            <a href="products.html" className="active">
              Produk <i className="fas fa-chevron-down"></i>
            </a>
            <div className="dropdown-content">
              <a href="category-bahan-makanan.html">Bahan Makanan</a>
              <a href="category-bumbu-masakan.html">Bumbu Masakan</a>
              <a href="category-jajanan-minuman.html">Jajanan dan Minuman</a>
              <a href="category-mie.html">Mie</a>
              <a href="category-nonfood.html" className="active">
                Nonfood
              </a>
              <a href="category-obat.html">Obat-obatan</a>
            </div>
          </li>
          <li>
            <a href="reviews.html">Ulasan</a>
          </li>
          <li>
            <a href="contact.html">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>

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

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            justifyContent: "center",
            margin: "32px 0",
          }}
        >
          {products.map((p, i) => (
            <div
              className="product-card"
              key={i}
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                padding: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 340,
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: 4,
                  textAlign: "center",
                }}
              >
                {p.name}
              </div>
              <div
                style={{ color: "#1976d2", fontWeight: 700, marginBottom: 4 }}
              >
                {p.price}
              </div>
              <div style={{ fontSize: 13, color: "#555", marginBottom: 12 }}>
                Stok: {p.stock}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn-add-cart"
                  style={{
                    flex: 1,
                    background: "#ff5252",
                    color: "#fff",
                    border: 0,
                    borderRadius: 6,
                    padding: "8px 0",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Tambah ke Keranjang
                </button>
                <button
                  className="btn-details"
                  style={{
                    flex: 1,
                    background: "#eee",
                    color: "#333",
                    border: 0,
                    borderRadius: 6,
                    padding: "8px 0",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="pagination"
          style={{ textAlign: "center", marginTop: 32 }}
        >
          <Link to="/category-nonfood" className="pagination-item">
            1
          </Link>
          <Link to="/category-nonfood-page2" className="pagination-item active">
            2
          </Link>
          <Link to="/category-nonfood-page3" className="pagination-item">
            3
          </Link>
          <Link to="/category-nonfood-page4" className="pagination-item">
            4
          </Link>
          <Link to="/category-nonfood-page5" className="pagination-item">
            5
          </Link>
          <Link to="/category-nonfood-page3" className="pagination-item">
            <i className="fas fa-chevron-right"></i>
          </Link>
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

export default CategoryNonfoodPage2;
