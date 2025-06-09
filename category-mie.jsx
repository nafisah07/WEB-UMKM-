import React from "react";

const products = [
  {
    img: "image/Mie/BIHUN.jpg",
    name: "Bihun",
    price: "Rp.7.000",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE AYAM BAWANG 3500.jpg",
    name: "Indomie Ayam Bawang",
    price: "Rp. 3.500",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE AYAM GEPREK 3500.jpg",
    name: "Indomie Ayam Geprek",
    price: "Rp. 3.500",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE GORENG 3500.jpg",
    name: "Indomie Goreng",
    price: "Rp. 3.500",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE GORENG ACEH 3500.jpg",
    name: "Mie Goreng Aceh",
    price: "Rp. 3.500",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE GORENG JUMBO 4500.jpg",
    name: "Mie Goreng Jumbo",
    price: "Rp. 4.500",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE KUAH KARI AYAM 3500.jpg",
    name: "Indomie Kuah Kari Ayam",
    price: "Rp. 3.500",
    stock: "Tersedia",
  },
  {
    img: "image/Mie/INDOMIE KUAH SOTO 3500.jpg",
    name: "Indomie Kuah Soto",
    price: "Rp. 3.500",
    stock: "Tersedia",
  },
];

const CategoryMie = () => (
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

    {/* Category Hero */}
    <section className="category-hero">
      <div className="container">
        <h1>Mie</h1>
        <p>
          Mie instan, mie telur, bihun, soun, dan aneka mie lainnya untuk
          hidangan praktis dan lezat
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
              <option value="mie-instan">Mie Instan</option>
              <option value="mie-telur">Mie Telur</option>
              <option value="bihun">Bihun</option>
              <option value="soun">Soun</option>
              <option value="mie-lainnya">Mie Lainnya</option>
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
          <a href="category-mie.html" className="pagination-item active">
            1
          </a>
          <a href="category-mie-page2.html" className="pagination-item">
            2
          </a>
          <a href="category-mie-page3.html" className="pagination-item">
            3
          </a>
          <a href="category-mie-page2.html" className="pagination-item">
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

export default CategoryMie;
