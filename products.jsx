import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const categories = [
  {
    name: "Bahan Makanan",
    img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Beras, minyak goreng, tepung, gula, dan bahan makanan pokok lainnya",
    link: "/category-bahan-makanan",
  },
  {
    name: "Bumbu Masakan",
    img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Bumbu dapur, rempah-rempah, saus, kecap, dan penyedap masakan",
    link: "/category-bumbu-masakan",
  },
  {
    name: "Jajanan dan Minuman",
    img: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Aneka snack, biskuit, minuman kemasan, kopi, teh, dan minuman segar",
    link: "/category-jajanan-minuman",
  },
  {
    name: "Mie",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Mie instan, mie telur, bihun, soun, dan aneka mie lainnya",
    link: "/category-mie",
  },
  {
    name: "Nonfood",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Produk kebersihan, peralatan rumah tangga, dan kebutuhan sehari-hari",
    link: "/category-nonfood",
  },
  {
    name: "Obat-obatan",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Obat-obatan umum, vitamin, suplemen, dan kebutuhan kesehatan",
    link: "/category-obat",
  },
];

const featuredProducts = [
  {
    img: "image/BAHAN MAKANAN/BERAS SANIA 15rb_1kg.jpg",
    name: "Beras Sania 1 kg",
    price: "Rp 15.000",
    tag: "Terlaris",
    tagClass: "bestseller",
    rating: 4.5,
    ratingCount: 120,
    stock: "Stok Tersedia",
  },
  {
    img: "image/BAHAN MAKANAN/FORTUNE 1_2kg 10rb.jpg",
    name: "Fortune 1_2kg",
    price: "Rp 10.000",
    originalPrice: "Rp 15.000",
    tag: "Promo",
    tagClass: "promo",
    rating: 4,
    ratingCount: 98,
    stock: "Stok Tersedia",
  },
  {
    img: "image/Mie/INDOMIE GORENG 3500.jpg",
    name: "Indomie Goreng",
    price: "Rp 3.500",
    rating: 5,
    ratingCount: 145,
    stock: "Stok Tersedia",
  },
  {
    img: "image/JAJANAN & MINUMAN/GOLDA.jpg",
    name: "Golda",
    price: "Rp 5.000",
    tag: "Baru",
    tagClass: "new",
    rating: 3.5,
    ratingCount: 76,
    stock: "Stok Tersedia",
  },
];

const Products = () => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      // Cek jika produk sudah ada, tambahkan qty jika sudah
      const idx = prev.findIndex((p) => p.name === product.name);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx].qty = (updated[idx].qty || 1) + 1;
        return updated;
      }
      return [...prev, { ...product, qty: 1 }];
    });
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
          <div className="nav-icons">
            <a href="cart.html">
              <i className="fas fa-shopping-cart"></i> Keranjang{" "}
              <span className="cart-count">
                {cart.reduce((a, b) => a + (b.qty || 1), 0)}
              </span>
            </a>
            <a href="admin/account.html">
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Tentang Kami</Link>
            </li>
            <li className="dropdown">
              <Link to="/products" className="active">
                Produk <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <Link to="/category-bahan-makanan">Bahan Makanan</Link>
                <Link to="/category-bumbu-masakan">Bumbu Masakan</Link>
                <Link to="/category-jajanan-minuman">Jajanan dan Minuman</Link>
                <Link to="/category-mie">Mie</Link>
                <Link to="/category-nonfood">Nonfood</Link>
                <Link to="/category-obat">Obat-obatan</Link>
              </div>
            </li>
            <li>
              <Link to="/reviews">Ulasan</Link>
            </li>
            <li>
              <Link to="/contact">Kontak</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Products Hero */}
      <section
        className="products-hero"
        style={{
          position: "relative",
          minHeight: 300,
          backgroundImage: "url('image/fotokita/hero-group.jpg')", // Ganti dengan path gambar hero yang sesuai
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(30,30,30,0.7)",
            zIndex: 1,
          }}
        ></div>
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 12 }}>
            Belanja Sembako Jadi Lebih Mudah
          </h1>
          <p style={{ fontSize: 18, maxWidth: 600, marginBottom: 16 }}>
            Dapatkan kebutuhan sehari-hari Anda dengan harga terjangkau dan
            pengiriman cepat ke seluruh Indonesia.
          </p>
          <a
            href="#categories"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "10px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              transition: "background 0.2s",
              marginTop: 8,
              display: "inline-block",
            }}
          >
            Belanja Sekarang
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-title">
            <h2>Kategori Produk</h2>
            <p>Pilih kategori produk sesuai kebutuhan Anda</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => {
              let icon;
              if (cat.name === "Bahan Makanan")
                icon = (
                  <i
                    className="fas fa-box-open"
                    style={{
                      fontSize: 40,
                      color: "#2563eb",
                      marginBottom: 16,
                    }}
                  ></i>
                );
              else if (cat.name === "Bumbu Masakan")
                icon = (
                  <i
                    className="fas fa-utensils"
                    style={{
                      fontSize: 40,
                      color: "#2563eb",
                      marginBottom: 16,
                    }}
                  ></i>
                );
              else if (cat.name === "Jajanan dan Minuman")
                icon = (
                  <i
                    className="fas fa-coffee"
                    style={{
                      fontSize: 40,
                      color: "#2563eb",
                      marginBottom: 16,
                    }}
                  ></i>
                );
              else if (cat.name === "Mie")
                icon = (
                  <i
                    className="fas fa-wave-square"
                    style={{
                      fontSize: 40,
                      color: "#2563eb",
                      marginBottom: 16,
                    }}
                  ></i>
                );
              else if (cat.name === "Nonfood")
                icon = (
                  <i
                    className="fas fa-spray-can"
                    style={{
                      fontSize: 40,
                      color: "#2563eb",
                      marginBottom: 16,
                    }}
                  ></i>
                );
              else if (cat.name === "Obat-obatan")
                icon = (
                  <i
                    className="fas fa-capsules"
                    style={{
                      fontSize: 40,
                      color: "#2563eb",
                      marginBottom: 16,
                    }}
                  ></i>
                );
              return (
                <Link
                  to={cat.link}
                  key={i}
                  className="category-card"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 180,
                    textDecoration: "none",
                    color: "inherit",
                    border: "2px solid #e5e7eb",
                    borderRadius: 12,
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    margin: 8,
                    transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.border = "2px solid #2563eb";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.border = "2px solid #e5e7eb";
                  }}
                  tabIndex={0}
                >
                  {icon}
                  <h3 style={{ margin: 0, fontWeight: 600, fontSize: 20 }}>
                    {cat.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-title">
            <h2>Produk Unggulan</h2>
            <p>Produk terlaris dan paling diminati oleh pelanggan kami</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src={p.img} alt={p.name} />
                  {p.tag && (
                    <div className={`product-tag ${p.tagClass}`}>{p.tag}</div>
                  )}
                </div>
                <div className="product-content">
                  <h3>{p.name}</h3>
                  <div className="product-rating">
                    {[...Array(Math.floor(p.rating))].map((_, idx) => (
                      <i className="fas fa-star" key={idx}></i>
                    ))}
                    {p.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                    {[...Array(5 - Math.ceil(p.rating))].map((_, idx) => (
                      <i className="far fa-star" key={idx}></i>
                    ))}
                    <span>({p.ratingCount})</span>
                  </div>
                  <div className="product-price">
                    {p.originalPrice && (
                      <span className="original-price">{p.originalPrice}</span>
                    )}
                    <span className="price">{p.price}</span>
                  </div>
                  <div className="product-stock">
                    <i className="fas fa-check-circle"></i> {p.stock}
                  </div>
                  <button className="btn-add-cart" onClick={() => addToCart(p)}>
                    <i className="fas fa-shopping-cart"></i> Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <a href="products.html" className="btn-view-all">
              Lihat Semua Produk
            </a>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div
        className="pagination"
        style={{ textAlign: "center", marginTop: 32 }}
      >
        <Link to="/category-nonfood" className="pagination-item">
          1
        </Link>
        <Link to="/category-nonfood-page2" className="pagination-item">
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
                  <Link to="/category-bahan-makanan">Bahan Makanan</Link>
                </li>
                <li>
                  <Link to="/category-bumbu-masakan">Bumbu Masakan</Link>
                </li>
                <li>
                  <Link to="/category-jajanan-minuman">
                    Jajanan dan Minuman
                  </Link>
                </li>
                <li>
                  <Link to="/category-mie">Mie</Link>
                </li>
                <li>
                  <Link to="/category-nonfood">Nonfood</Link>
                </li>
                <li>
                  <Link to="/category-obat">Obat-obatan</Link>
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
              <img src="images/payment-methods.png" alt="Metode Pembayaran" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Products;
