import React, { useState } from "react";
import "./Contact.css";

const faqs = [
  {
    question: "Bagaimana cara memesan produk di Kirei's Mart?",
    answer:
      "Anda dapat memesan produk melalui website kami dengan memilih produk yang diinginkan, menambahkannya ke keranjang, dan melakukan checkout. Anda juga dapat memesan melalui WhatsApp atau datang langsung ke toko kami.",
  },
  {
    question: "Berapa lama waktu pengiriman pesanan?",
    answer:
      "Untuk area Palembang, pengiriman biasanya akan segera dilakukan setelah customer melalukan pembayaran. Untuk area luar Palembang, pengiriman memakan waktu 1-2 hari kerja tergantung lokasi dan jasa pengiriman yang disepakati dengan penjual.",
  },
  {
    question: "Apakah Kirei's Mart menerima pengembalian produk?",
    answer:
      "Ya, kami menerima pengembalian produk jika produk rusak atau tidak sesuai dengan deskripsi selagi ada foto dan video sebagai bukti. Silakan hubungi customer service kami untuk informasi lebih lanjut.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, Dana), kartu kredit/debit, dan COD (Cash On Delivery) untuk area tertentu.",
  },
  {
    question: "Apakah ada biaya pengiriman?",
    answer:
      "Ya, biaya pengiriman dihitung berdasarkan berat produk dan jarak pengiriman. Untuk pembelian dengan nilai tertentu, kami menawarkan gratis ongkir untuk area Palembang.",
  },
];

const Contact = () => {
  const [faqActive, setFaqActive] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleFaqClick = (idx) => {
    setFaqActive(faqActive === idx ? null : idx);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = form;
    const whatsappMessage = `Halo Kirei's Mart,\n\nSaya ${name} ingin mengirim pesan:\n\nSubjek: ${subject}\nEmail: ${email}\nTelepon: ${phone}\n\nPesan:\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6287879060790?text=${encodedMessage}`, "_blank");
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
              <i className="fas fa-shopping-cart"></i> Keranjang
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
              <a href="products.html">
                Produk <i className="fas fa-chevron-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="category-bahan-makanan.html">Bahan Makanan</a>
                <a href="category-bumbu-masakan.html">Bumbu Masakan</a>
                <a href="category-jajanan-minuman.html">Jajanan dan Minuman</a>
                <a href="category-mie.html">Mie</a>
                <a href="category-nonfood.html">Nonfood</a>
                <a href="category-obat.html">Obat-obatan</a>
              </div>
            </li>
            <li>
              <a href="reviews.html">Ulasan</a>
            </li>
            <li>
              <a href="contact.html" className="active">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Hubungi Kami</h1>
          <p>
            Kami siap membantu Anda dengan pertanyaan, saran, atau keluhan.
            Jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informasi Kontak</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Alamat Toko</h3>
                    <p>
                      Jl. Bambang Utoyo, 3 Ilir, Kec. Ilir Tim. II, Kota
                      Palembang, Sumatera Selatan 30111
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Telepon</h3>
                    <p>+62 878-7906-0790</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@kireimart.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Jam Operasional</h3>
                    <p>Senin - Minggu: 08:00 - 20:00</p>
                  </div>
                </div>
              </div>
              <div className="contact-buttons">
                <a
                  href="https://wa.me/6287879060790?text=Halo%20Kirei's%20Mart,%20saya%20ingin%20bertanya%20tentang%20produk"
                  className="contact-button whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Chat via WhatsApp
                </a>
                <a
                  href="mailto:info@kireimart.com"
                  className="contact-button email-button"
                >
                  <i className="fas fa-envelope"></i> Kirim Email
                </a>
                <a
                  href="tel:+6287879060790"
                  className="contact-button phone-button"
                >
                  <i className="fas fa-phone"></i> Telepon Kami
                </a>
              </div>
            </div>
            <div className="contact-form">
              <h2>Kirim Pesan</h2>
              <form onSubmit={sendWhatsAppMessage}>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subjek</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                    <option value="Pesanan">Pesanan</option>
                    <option value="Pengiriman">Pengiriman</option>
                    <option value="Pengembalian">Pengembalian</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.0284173588884!2d104.78128191471549!3d-2.9712531210266055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1748141866022!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kirei's Mart"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Pertanyaan Umum</h2>
          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-item${faqActive === idx ? " active" : ""}`}
                key={idx}
              >
                <div
                  className="faq-question"
                  onClick={() => handleFaqClick(idx)}
                >
                  {faq.question}
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div
                  className="faq-answer"
                  style={
                    faqActive === idx
                      ? { maxHeight: "500px", padding: "15px 20px" }
                      : {}
                  }
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
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
                <a href="https://wa.me/6287879060790?text=Halo%20Kirei's%20Mart,%20saya%20ingin%20bertanya%20tentang%20produk">
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
                  <i className="fas fa-map-marker-alt"></i> Jl. Bambang Utoyo,
                  Palembang
                </li>
                <li>
                  <i className="fas fa-phone"></i> +62 878-7906-0790
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

export default Contact;
