import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const stored = localStorage.getItem("cart");
        if (stored) {
          const cart = JSON.parse(stored);
          setCartCount(cart.reduce((a, b) => a + (b.qty || 1), 0));
        } else {
          setCartCount(0);
        }
      } catch {
        setCartCount(0);
      }
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

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
            <a href="/login">
              <i className="fas fa-user"></i> Akun
            </a>
          </div>
        </div>
      </header>
      {/* Spacer agar navbar tidak menimpa header */}
      <div style={{ minHeight: 60 }} />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ position: "relative", minHeight: 280, background: "#222" }}
      >
        <img
          src="image/fotokita/IMG_4077.jpg"
          alt="Kirei's Mart Hero"
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            filter: "brightness(0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}>
            Belanja Sembako Jadi Lebih Mudah
          </h2>
          <p
            style={{
              fontSize: 18,
              marginBottom: 8,
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            Dapatkan kebutuhan sehari-hari Anda dengan harga terjangkau dan
            pengiriman cepat ke seluruh Indonesia.
          </p>
          <span style={{ fontSize: 15 }}>
            Belanja Sekarang Pelajari Lebih Lanjut
          </span>
        </div>
      </section>

      {/* Kategori Produk */}
      <section style={{ margin: "40px 0" }}>
        <h2 style={{ textAlign: "center" }}>Kategori Produk</h2>
        <p style={{ textAlign: "center", marginBottom: 32 }}>
          Temukan berbagai kebutuhan sehari-hari Anda
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {/*
            Menambahkan Link ke setiap kategori produk
          */}
          {/*
            Daftar kategori produk beserta ikon dan tautannya
          */}
          {[
            {
              label: "Bahan Makanan",
              icon: "fas fa-box",
              link: "/category-bahan-makanan",
            },
            {
              label: "Bumbu Masakan",
              icon: "fas fa-utensils",
              link: "/category-bumbu-masakan",
            },
            {
              label: "Jajanan dan Minuman",
              icon: "fas fa-coffee",
              link: "/category-jajanan-minuman",
            },
            { label: "Mie", icon: "fas fa-bacon", link: "/category-mie" },
            {
              label: "Nonfood",
              icon: "fas fa-pump-soap",
              link: "/category-nonfood",
            },
            {
              label: "Obat-obatan",
              icon: "fas fa-capsules",
              link: "/category-obat",
            },
          ].map((cat, idx) => (
            <Link
              to={cat.link}
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                padding: 24,
                minWidth: 120,
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.2s, border 0.2s, background 0.2s",
              }}
            >
              <i
                className={cat.icon}
                style={{ fontSize: 32, color: "#1976d2", marginBottom: 8 }}
              ></i>
              <div style={{ fontWeight: 500, marginTop: 8 }}>{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Produk Unggulan */}
      <section style={{ margin: "40px 0" }}>
        <h2 style={{ textAlign: "center" }}>Produk Unggulan</h2>
        <p style={{ textAlign: "center", marginBottom: 32 }}>
          Produk terlaris dan paling diminati oleh pelanggan kami
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {/* Contoh produk, bisa diganti dengan data asli */}
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 16,
              width: 220,
            }}
          >
            <img
              src="image/BAHAN MAKANAN/BERAS SANIA 15rb_1kg.jpg"
              alt="Beras Sania"
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <div style={{ fontWeight: 600, marginTop: 8 }}>Beras Sania 1kg</div>
            <div style={{ color: "#1976d2", fontWeight: 700 }}>Rp15.000</div>
            <div style={{ fontSize: 13, color: "#555" }}>Tersedia</div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 16,
              width: 220,
            }}
          >
            <img
              src="image/BAHAN MAKANAN/FORTUNE 1_2kg 10rb.jpg"
              alt="Fortune Minyak"
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <div style={{ fontWeight: 600, marginTop: 8 }}>
              Minyak Fortune 1/2kg
            </div>
            <div style={{ color: "#1976d2", fontWeight: 700 }}>Rp10.000</div>
            <div style={{ fontSize: 13, color: "#555" }}>Tersedia</div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 16,
              width: 220,
            }}
          >
            <img
              src="image/BAHAN MAKANAN/TELUR 1kg 26rb.jpg"
              alt="Telur 1kg"
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <div style={{ fontWeight: 600, marginTop: 8 }}>Telur 1kg</div>
            <div style={{ color: "#1976d2", fontWeight: 700 }}>Rp26.000</div>
            <div style={{ fontSize: 13, color: "#555" }}>Tersedia</div>
          </div>
        </div>
      </section>
    </>
  );
}
