import React, { useState } from "react";
import "./SearchResults.css";

// Contoh data produk (ganti dengan data asli dari API/backend jika ada)
const allProducts = [
  {
    name: "Beras Sania 1 kg",
    category: "bahan-makanan",
    price: 15000,
    image: "image/BAHAN MAKANAN/BERAS SANIA 15rb_1kg.jpg",
  },
  {
    name: "Minyak Goreng Fortune 1/2kg",
    category: "bahan-makanan",
    price: 10000,
    image: "image/BAHAN MAKANAN/FORTUNE 1_2kg 10rb.jpg",
  },
  {
    name: "Indomie Goreng",
    category: "mie",
    price: 3500,
    image: "image/Mie/INDOMIE GORENG 3500.jpg",
  },
  {
    name: "Golda",
    category: "jajanan-minuman",
    price: 5000,
    image: "image/JAJANAN & MINUMAN/GOLDA.jpg",
  },
  {
    name: "Paracetamol",
    category: "obat",
    price: 3000,
    image: "image/OBAT OBATAN/PARAMEX.jpg",
  },
];

const categories = [
  { value: "", label: "Semua Kategori" },
  { value: "bahan-makanan", label: "Bahan Makanan" },
  { value: "bumbu-masakan", label: "Bumbu Masakan" },
  { value: "jajanan-minuman", label: "Jajanan dan Minuman" },
  { value: "mie", label: "Mie" },
  { value: "nonfood", label: "Nonfood" },
  { value: "obat", label: "Obat-obatan" },
];

const sortOptions = [
  { value: "relevance", label: "Paling Relevan" },
  { value: "price-low", label: "Harga: Rendah ke Tinggi" },
  { value: "price-high", label: "Harga: Tinggi ke Rendah" },
  { value: "name-asc", label: "Nama: A-Z" },
  { value: "name-desc", label: "Nama: Z-A" },
];

const suggestionTags = [
  { query: "beras", label: "Beras" },
  { query: "minyak", label: "Minyak Goreng" },
  { query: "indomie", label: "Indomie" },
  { query: "gula", label: "Gula" },
  { query: "telur", label: "Telur" },
];

function getQueryParam(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param) || "";
}

const SearchResults = () => {
  const [query, setQuery] = useState(getQueryParam("query"));
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("relevance");

  // Filter dan sort produk
  let filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  if (category) filtered = filtered.filter((p) => p.category === category);

  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.query.value);
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
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                required
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="nav-icons">
            <a href="cart.html">
              <i className="fas fa-shopping-cart"></i> Keranjang <span className="cart-count">0</span>
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
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">Tentang Kami</a></li>
            <li className="dropdown">
              <a href="products.html">Produk <i className="fas fa-chevron-down"></i></a>
              <div className="dropdown-content">
                <a href="category-bahan-makanan.html">Bahan Makanan</a>
                <a href="category-bumbu-masakan.html">Bumbu Masakan</a>
                <a href="category-jajanan-minuman.html">Jajanan dan Minuman</a>
                <a href="category-mie.html">Mie</a>
                <a href="category-nonfood.html">Nonfood</a>
                <a href="category-obat.html">Obat-obatan</a>
              </div>
            </li>
            <li><a href="reviews.html">Ulasan</a></li>
            <li><a href="contact.html">Kontak</a></li>
          </ul>
        </div>
      </nav>

      {/* Search Results Section */}
      <section className="search-results">
        <div className="container">
          <div className="search-info">
            <h2>
              Hasil Pencarian: <span>{query}</span>
            </h2>
            <p>Menampilkan <span>{filtered.length}</span> hasil</p>
          </div>

          <div className="search-filters">
            <div className="filter-group">
              <label htmlFor="category-filter">Kategori:</label>
              <select
                id="category-filter"
                className="filter-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option value={cat.value} key={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="sort-filter">Urutkan:</label>
              <select
                id="sort-filter"
                className="filter-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option value={opt.value} key={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((p, i) => (
                <div className="product-card" key={i}>
                  <div className="product-image">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="product-content">
                    <h3>{p.name}</h3>
                    <div className="product-price">
                      Rp {p.price.toLocaleString("id-ID")}
                    </div>
                    <button className="btn-add-cart">
                      <i className="fas fa-shopping-cart"></i> Tambah ke Keranjang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <i className="fas fa-search"></i>
              <h3>Tidak ada hasil yang ditemukan</h3>
              <p>
                Maaf, kami tidak dapat menemukan produk yang sesuai dengan pencarian Anda.
              </p>
              <a href="index.html" className="btn-primary">
                Kembali ke Beranda
              </a>
              <div className="search-suggestions">
                <h3>Saran Pencarian:</h3>
                <div className="suggestion-tags">
                  {suggestionTags.map((tag) => (
                    <a
                      href={`?query=${tag.query}`}
                      className="suggestion-tag"
                      key={tag.query}
                      onClick={(e) => {
                        e.preventDefault();
                        setQuery(tag.query);
                        setCategory("");
                      }}
                    >
                      {tag.label}
                    </a>
                  ))}
                </div>
              </div>
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
                Toko sembako online terlengkap dengan harga terjangkau dan pengiriman cepat ke seluruh Indonesia.
              </p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Kategori</h3>
              <ul>
                <li><a href="category-bahan-makanan.html">Bahan Makanan</a></li>
                <li><a href="category-bumbu-masakan.html">Bumbu Masakan</a></li>
                <li><a href="category-jajanan-minuman.html">Jajanan dan Minuman</a></li>
                <li><a href="category-mie.html">Mie</a></li>
                <li><a href="category-nonfood.html">Nonfood</a></li>
                <li><a href="category-obat.html">Obat-obatan</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Informasi</h3>
              <ul>
                <li><a href="about.html">Tentang Kami</a></li>
                <li><a href="contact.html">Hubungi Kami</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="privacy.html">Kebijakan Privasi</a></li>
                <li><a href="terms.html">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Kontak</h3>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> Jl. Pasar Baru No. 123, Jakarta</li>
                <li><i className="fas fa-phone"></i> +62 812-3456-7890</li>
                <li><i className="fas fa-envelope"></i> info@kireimart.com</li>
                <li><i className="fas fa-clock"></i> Senin - Minggu: 08:00 - 20:00</li>
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

export default SearchResults;