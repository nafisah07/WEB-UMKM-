import React from "react";

const teamMembers = [
  {
    name: "Agni Tata D.",
    img: "image/fotokita/tata.jpg",
    instagram: "#",
  },
  {
    name: "Duhairillah",
    img: "image/fotokita/IMG_4077.jpg", // gunakan gambar yang tersedia
    instagram: "#",
  },
  {
    name: "Fitriah Rahmaningsih",
    img: "image/fotokita/Ipit.jpg",
    instagram: "#",
  },
  {
    name: "Marsha Syakila",
    img: "image/fotokita/marsha.jpg",
    instagram: "#",
  },
  {
    name: "Nafisah Bulan Sabela",
    img: "image/fotokita/Nafisa.jpg",
    instagram: "#",
  },
];

const About = () => (
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
    {/* Spacer agar navbar tidak menimpa header */}
    <div style={{ minHeight: 60 }} />

    {/* About Hero */}
    <section className="about-hero">
      <div className="container">
        <h1>Tentang Kirei's Mart</h1>
        <p>Menyediakan kebutuhan sehari-hari dengan kualitas terbaik</p>
      </div>
    </section>

    {/* About Section */}
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="image/fotokita/IMG_4077.jpg" alt="Kirei's Mart Store" />
          </div>
          <div className="about-content">
            <h2>Cerita Kami</h2>
            <p>
              Toko Sembako Kirei memiliki peran penting dalam memenuhi kebutuhan
              pokok masyarakat di lingkungan sekitar. Toko ini mulai beroperasi
              sejak tahun 2024 dan menjual berbagai kebutuhan harian seperti
              beras, gula, minyak, mie instan, telur, kopi, dan sabun. Sebagian
              besar pelanggan berasal dari warga sekitar, dan pengelolaan toko
              masih dilakukan secara mandiri oleh pemilik dibantu anggota
              keluarga.
            </p>
            <p>
              Namun, dalam praktiknya, pengelolaan toko masih dilakukan secara
              konvensional dan sederhana. Pencatatan stok barang belum
              menggunakan sistem yang terstruktur, pemilik hanya mengingat-ingat
              secara manual, atau sesekali menuliskannya di buku. Hal ini sering
              menimbulkan masalah, seperti stok yang habis tanpa disadari atau
              barang yang kadaluarsa karena tidak dicek secara berkala.
              Penjualan masih dilakukan secara langsung di toko tanpa adanya
              dukungan teknologi digital, sehingga jangkauan pelayanan terbatas
              pada pelanggan yang datang secara fisik.
            </p>
            <p>
              Selain itu, pemilik toko menyampaikan bahwa saat ini belum
              memiliki sistem digital karena belum tahu harus memulai dari mana.
              Meski begitu, ada minat untuk menggunakan sistem berbasis web,
              terutama jika sistem tersebut mudah diakses melalui HP. Pemilik
              berharap dapat menggunakan sistem untuk mencatat stok barang,
              menjual produk secara online, dan memberikan informasi harga
              kepada pelanggan. Kendala yang dihadapi lebih kepada keterbatasan
              pemahaman teknologi, karena pemilik belum terbiasa menggunakan
              komputer, meskipun terbiasa menggunakan HP dan aplikasi seperti
              WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="values-section">
      <div className="container">
        <h2 className="section-title">Nilai-Nilai Kami</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-check-circle"></i>
            <h3>Kualitas</h3>
            <p>
              Kami hanya menjual produk berkualitas tinggi yang telah melalui
              proses seleksi ketat untuk memastikan kesegaran dan keamanannya.
            </p>
          </div>
          <div className="value-card">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Keterjangkauan</h3>
            <p>
              Kami berkomitmen untuk menawarkan harga yang terjangkau tanpa
              mengorbankan kualitas produk yang kami jual.
            </p>
          </div>
          <div className="value-card">
            <i className="fas fa-users"></i>
            <h3>Pelayanan</h3>
            <p>
              Kepuasan pelanggan adalah prioritas utama kami. Kami selalu
              berusaha memberikan pelayanan terbaik dan responsif.
            </p>
          </div>
          <div className="value-card">
            <i className="fas fa-leaf"></i>
            <h3>Keberlanjutan</h3>
            <p>
              Kami peduli terhadap lingkungan dan berusaha mengurangi dampak
              negatif dengan menggunakan kemasan ramah lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Tim Kami</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
              <img src={member.img} alt={member.name} />
              <div className="team-info">
                <h3>{member.name}</h3>
                <div className="team-social">
                  <a href={member.instagram}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
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
  </>
);

export default About;
