import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const initialCart = [
  {
    id: 1,
    name: "Beras Premium 5kg",
    desc: "Beras berkualitas tinggi",
    price: 65000,
    image: "images/beras.jpg",
    qty: 1,
  },
  {
    id: 2,
    name: "Minyak Goreng 2L",
    desc: "Minyak goreng berkualitas",
    price: 35000,
    image: "images/minyak.jpg",
    qty: 2,
  },
];

const SHIPPING_COST = 10000;

const Cart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [discount, setDiscount] = useState(0);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cart calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + SHIPPING_COST - discount;

  // Cart actions
  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setNotification("Keranjang dikosongkan.");
    setTimeout(() => setNotification(""), 2000);
  };

  const applyPromo = () => {
    if (promo === "KIREI10" && !promoApplied) {
      setDiscount(10000);
      setPromoApplied(true);
      setNotification("Kode promo berhasil diterapkan!");
      setTimeout(() => setNotification(""), 2000);
    } else {
      setNotification("Kode promo tidak valid atau sudah digunakan.");
      setTimeout(() => setNotification(""), 2000);
    }
  };

  // Checkout via WhatsApp
  const checkout = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      setNotification("Lengkapi data penerima terlebih dahulu.");
      setTimeout(() => setNotification(""), 2000);
      return;
    }
    const itemsText = cart
      .map(
        (item) =>
          `- ${item.name} x${item.qty} = Rp${(
            item.price * item.qty
          ).toLocaleString("id-ID")}`
      )
      .join("%0A");
    const message = `Halo Kirei's Mart,%0ASaya ingin memesan:%0A${itemsText}%0A%0ASubtotal: Rp${subtotal.toLocaleString(
      "id-ID"
    )}%0AOngkir: Rp${SHIPPING_COST.toLocaleString(
      "id-ID"
    )}%0ADiskon: Rp${discount.toLocaleString(
      "id-ID"
    )}%0ATotal: Rp${total.toLocaleString(
      "id-ID"
    )}%0A%0AData Penerima:%0ANama: ${customer.name}%0ATelp: ${
      customer.phone
    }%0AAlamat: ${customer.address}`;
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
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
            <a href="/cart" className="active">
              <i className="fas fa-shopping-cart"></i> Keranjang{" "}
              <span className="cart-count">{cart.length}</span>
            </a>
            <a href="/login">
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
              <span style={{ cursor: "pointer" }}>
                Produk <i className="fas fa-chevron-down"></i>
              </span>
              <div className="dropdown-content">
                <li>
                  <Link to="/category-bahan-makanan">Beras & Minyak</Link>
                </li>
                <li>
                  <Link to="/category-bumbu-masakan">Bumbu Dapur</Link>
                </li>
                <li>
                  <Link to="/category-jajanan-minuman">Minuman</Link>
                </li>
                <li>
                  <Link to="/category-mie">Makanan Ringan</Link>
                </li>
                <li>
                  <Link to="/category-nonfood">Perlengkapan Kebersihan</Link>
                </li>
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

      {/* Cart Section */}
      <section className="cart-section">
        <div className="container">
          <div className="cart-title">
            <h1>Keranjang Belanja</h1>
            <p>Periksa kembali barang belanjaan Anda sebelum checkout</p>
          </div>

          <div
            className="cart-container"
            style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
            }}
          >
            <div
              className="cart-table"
              style={{
                flex: 2,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                padding: 24,
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: cart.length === 0 ? "center" : "stretch",
                justifyContent: cart.length === 0 ? "center" : "flex-start",
              }}
            >
              {cart.length === 0 ? (
                <>
                  <i
                    className="fas fa-shopping-cart"
                    style={{
                      fontSize: 64,
                      color: "#d1d5db",
                      marginBottom: 16,
                    }}
                  ></i>
                  <div
                    style={{
                      fontSize: 18,
                      color: "#888",
                      marginBottom: 8,
                    }}
                  >
                    Keranjang belanja Anda kosong
                  </div>
                  <div
                    style={{
                      color: "#aaa",
                      fontSize: 15,
                    }}
                  >
                    Silakan tambahkan produk ke keranjang
                  </div>
                </>
              ) : (
                <table
                  className="cart-table-table"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr style={{ borderBottom: "1px solid #eee" }}>
                      <th style={{ textAlign: "left", padding: 8 }}>Produk</th>
                      <th style={{ textAlign: "right", padding: 8 }}>Harga</th>
                      <th style={{ textAlign: "center", padding: 8 }}>
                        Jumlah
                      </th>
                      <th style={{ textAlign: "right", padding: 8 }}>
                        Subtotal
                      </th>
                      <th style={{ textAlign: "center", padding: 8 }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr
                        key={item.id}
                        style={{ borderBottom: "1px solid #f3f3f3" }}
                      >
                        <td
                          style={{
                            padding: 8,
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: 48,
                              height: 48,
                              objectFit: "cover",
                              borderRadius: 8,
                              marginRight: 8,
                            }}
                          />
                          <div>
                            <div style={{ fontWeight: 600 }}>{item.name}</div>
                            <div style={{ color: "#888", fontSize: 13 }}>
                              {item.desc}
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: "right", padding: 8 }}>
                          Rp {item.price.toLocaleString("id-ID")}
                        </td>
                        <td style={{ textAlign: "center", padding: 8 }}>
                          <button
                            onClick={() => changeQty(item.id, -1)}
                            style={{ padding: "2px 8px", marginRight: 4 }}
                          >
                            -
                          </button>
                          {item.qty}
                          <button
                            onClick={() => changeQty(item.id, 1)}
                            style={{ padding: "2px 8px", marginLeft: 4 }}
                          >
                            +
                          </button>
                        </td>
                        <td style={{ textAlign: "right", padding: 8 }}>
                          Rp {(item.price * item.qty).toLocaleString("id-ID")}
                        </td>
                        <td style={{ textAlign: "center", padding: 8 }}>
                          <button
                            onClick={() => removeItem(item.id)}
                            style={{
                              color: "#ef4444",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div className="order-summary">
                <h2 className="summary-title">Ringkasan Pesanan</h2>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="summary-row">
                  <span>Ongkos Kirim</span>
                  <span>Rp {SHIPPING_COST.toLocaleString("id-ID")}</span>
                </div>
                <div className="summary-row">
                  <span>Diskon</span>
                  <span>Rp {discount.toLocaleString("id-ID")}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>Rp {total.toLocaleString("id-ID")}</span>
                </div>

                <div className="promo-code">
                  <h3 className="promo-title">Punya Kode Promo?</h3>
                  <div className="promo-input">
                    <input
                      type="text"
                      placeholder="Masukkan kode promo"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      disabled={promoApplied}
                    />
                    <button
                      type="button"
                      onClick={applyPromo}
                      disabled={promoApplied}
                    >
                      Terapkan
                    </button>
                  </div>
                </div>
              </div>

              <div className="customer-info">
                <h2>Data Penerima</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkout();
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="customer-name">Nama Lengkap</label>
                    <input
                      type="text"
                      id="customer-name"
                      required
                      value={customer.name}
                      onChange={(e) =>
                        setCustomer({ ...customer, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="customer-phone">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="customer-phone"
                      required
                      value={customer.phone}
                      onChange={(e) =>
                        setCustomer({ ...customer, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="customer-address">Alamat Lengkap</label>
                    <textarea
                      id="customer-address"
                      required
                      value={customer.address}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          address: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="checkout-btn"
                    disabled={cart.length === 0}
                  >
                    <i className="fab fa-whatsapp"></i> Checkout via WhatsApp
                  </button>
                </form>

                <div className="whatsapp-info">
                  <p>
                    <strong>Catatan:</strong> Setelah klik tombol checkout, Anda
                    akan diarahkan ke WhatsApp untuk menyelesaikan pesanan.
                  </p>
                  <p>
                    Pembayaran dapat dilakukan secara tunai saat pengiriman
                    (COD) atau transfer bank.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {cart.length > 0 && (
            <div className="cart-actions">
              <a href="products.html" className="continue-shopping">
                <i className="fas fa-arrow-left"></i> Lanjutkan Belanja
              </a>
              <button className="clear-cart" onClick={clearCart}>
                Kosongkan Keranjang
              </button>
            </div>
          )}
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
                  <a href="category-beras.html">Beras & Minyak</a>
                </li>
                <li>
                  <a href="category-bumbu.html">Bumbu Dapur</a>
                </li>
                <li>
                  <a href="category-minuman.html">Minuman</a>
                </li>
                <li>
                  <a href="category-makanan.html">Makanan Ringan</a>
                </li>
                <li>
                  <a href="category-kebersihan.html">Perlengkapan Kebersihan</a>
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

      {/* Notification */}
      <div className={`notification${notification ? " show" : ""}`}>
        {notification}
      </div>
    </>
  );
};

export default Cart;
