import React, { useState } from "react";

const reviewsData = [
  {
    name: "Budi Santoso",
    date: "12 Oktober 2023",
    avatar: "images/customer1.jpg",
    rating: 5,
    content:
      "Beras premium yang saya beli kualitasnya sangat bagus. Butiran berasnya utuh, bersih, dan setelah dimasak nasi menjadi pulen dan wangi. Pengiriman juga cepat, hanya 1 hari sudah sampai. Packing aman dengan kardus tebal. Puas belanja di Kirei's Mart!",
    product: {
      img: "images/beras-premium.jpg",
      name: "Beras Premium 5kg",
      price: "Rp 65.000",
    },
    helpful: 24,
    comments: 3,
    id: 1,
  },
  {
    name: "Siti Aminah",
    date: "5 Oktober 2023",
    avatar: "images/customer2.jpg",
    rating: 4,
    content:
      "Minyak goreng yang saya beli kualitasnya bagus, jernih dan tidak berbau. Harga juga lebih murah dibanding di supermarket dekat rumah. Satu-satunya kekurangan adalah pengiriman agak lama, butuh 3 hari untuk sampai ke alamat saya. Tapi secara keseluruhan saya puas dengan produknya.",
    product: {
      img: "images/minyak-goreng.jpg",
      name: "Minyak Goreng 2L",
      price: "Rp 35.000",
    },
    helpful: 12,
    comments: 1,
    id: 2,
  },
  {
    name: "Rudi Hartono",
    date: "28 September 2023",
    avatar: "images/customer3.jpg",
    rating: 5,
    content:
      "Saya sudah berlangganan di Kirei's Mart selama 6 bulan dan selalu puas dengan pelayanannya. Produk selalu fresh dan sesuai dengan deskripsi. Customer service juga sangat responsif ketika ada pertanyaan atau masalah. Pengiriman selalu tepat waktu. Terima kasih Kirei's Mart!",
    product: {
      img: "images/gula.jpg",
      name: "Gula Pasir 1kg",
      price: "Rp 15.000",
    },
    helpful: 35,
    comments: 5,
    id: 3,
  },
  {
    name: "Dewi Lestari",
    date: "15 September 2023",
    avatar: "images/customer4.jpg",
    rating: 3,
    content:
      "Telur yang saya pesan beberapa butir pecah saat sampai. Packaging kurang aman untuk produk yang mudah pecah seperti telur. Namun setelah komplain, customer service sangat responsif dan memberikan penggantian produk. Semoga ke depannya packaging bisa lebih baik lagi.",
    product: {
      img: "images/telur.jpg",
      name: "Telur Ayam 1kg",
      price: "Rp 28.000",
    },
    helpful: 8,
    comments: 2,
    id: 4,
  },
];

const productOptions = [
  { value: "", label: "-- Pilih Produk --" },
  { value: "beras-premium", label: "Beras Premium 5kg" },
  { value: "minyak-goreng", label: "Minyak Goreng 2L" },
  { value: "gula", label: "Gula Pasir 1kg" },
  { value: "telur", label: "Telur Ayam 1kg" },
  { value: "other", label: "Produk Lainnya" },
];

const ratingStats = [
  { star: 5, percent: 75, count: 19 },
  { star: 4, percent: 18, count: 14 },
  { star: 3, percent: 5, count: 12 },
  { star: 2, percent: 1.5, count: 9 },
  { star: 1, percent: 0.5, count: 6 },
];

const Reviews = () => {
  const [filter, setFilter] = useState("Semua");
  const [sort, setSort] = useState("newest");
  const [selectedRating, setSelectedRating] = useState(0);
  const [form, setForm] = useState({
    product: "",
    rating: 0,
    title: "",
    content: "",
  });
  const [helpful, setHelpful] = useState({});
  const [reviews, setReviews] = useState(reviewsData);

  // Filtered and sorted reviews
  const filteredReviews = reviews
    .filter((r) => {
      if (filter === "Semua") return true;
      if (filter === "Dengan Foto") return false; // No photo reviews in sample
      if (filter.includes("Bintang")) {
        const star = parseInt(filter);
        return r.rating === star;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === "newest") return b.id - a.id;
      if (sort === "oldest") return a.id - b.id;
      if (sort === "highest") return b.rating - a.rating;
      if (sort === "lowest") return a.rating - b.rating;
      return 0;
    });

  const handleFilter = (val) => setFilter(val);
  const handleSort = (e) => setSort(e.target.value);

  const handleStarHover = (val) => setSelectedRating(val);
  const handleStarLeave = () => setSelectedRating(form.rating);

  const handleStarClick = (val) => setForm({ ...form, rating: val });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleHelpful = (id) => {
    setHelpful((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              helpful: helpful[id] ? r.helpful - 1 : r.helpful + 1,
            }
          : r
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.product || !form.rating || !form.title || !form.content) {
      alert("Mohon lengkapi semua field untuk mengirim ulasan.");
      return;
    }
    alert(
      "Terima kasih! Ulasan Anda telah berhasil dikirim dan sedang dalam proses moderasi."
    );
    setForm({ product: "", rating: 0, title: "", content: "" });
    setSelectedRating(0);
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

      {/* Reviews Hero */}
      <section className="reviews-hero">
        <div className="container">
          <h1>Ulasan Pelanggan</h1>
          <p>
            Lihat apa yang pelanggan kami katakan tentang produk dan layanan
            Kirei's Mart
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          {/* Reviews Stats */}
          <div className="reviews-stats">
            <div className="overall-rating">
              <div className="rating-number">4.8</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="total-reviews">Berdasarkan 1,248 ulasan</div>
            </div>
            <div className="rating-breakdown">
              {ratingStats.map((r) => (
                <div className="rating-bar" key={r.star}>
                  <div className="rating-label">
                    <i className="fas fa-star"></i> {r.star}
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${r.percent}%` }}
                    ></div>
                  </div>
                  <div className="rating-count">{r.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Filter */}
          <div className="reviews-filter">
            <div className="filter-options">
              {[
                "Semua",
                "5 Bintang",
                "4 Bintang",
                "3 Bintang",
                "2 Bintang",
                "1 Bintang",
                "Dengan Foto",
              ].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "active" : ""}
                  onClick={() => handleFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="sort-options">
              <label htmlFor="sort-reviews">Urutkan:</label>
              <select id="sort-reviews" value={sort} onChange={handleSort}>
                <option value="newest">Terbaru</option>
                <option value="oldest">Terlama</option>
                <option value="highest">Rating Tertinggi</option>
                <option value="lowest">Rating Terendah</option>
              </select>
            </div>
          </div>

          {/* Review List */}
          <div className="review-list">
            {filteredReviews.map((r) => (
              <div className="review-card" key={r.id}>
                <div className="review-header">
                  <div className="reviewer-info">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="reviewer-avatar"
                    />
                    <div>
                      <div className="reviewer-name">{r.name}</div>
                      <div className="review-date">{r.date}</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    {[...Array(r.rating)].map((_, i) => (
                      <i className="fas fa-star" key={i}></i>
                    ))}
                    {[...Array(5 - r.rating)].map((_, i) => (
                      <i className="far fa-star" key={i}></i>
                    ))}
                  </div>
                </div>
                <div className="review-content">
                  <p>{r.content}</p>
                </div>
                <div className="review-product">
                  <img src={r.product.img} alt={r.product.name} />
                  <div className="review-product-info">
                    <h4>{r.product.name}</h4>
                    <div className="price">{r.product.price}</div>
                  </div>
                </div>
                <div className="review-actions">
                  <button
                    className={`helpful-btn${helpful[r.id] ? " active" : ""}`}
                    onClick={() => handleHelpful(r.id)}
                  >
                    <i
                      className={
                        helpful[r.id] ? "fas fa-thumbs-up" : "far fa-thumbs-up"
                      }
                    ></i>{" "}
                    Membantu ({r.helpful})
                  </button>
                  <button className="comment-btn">
                    <i className="far fa-comment"></i> Komentar ({r.comments})
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          {/* Write Review */}
          <div className="write-review">
            <h2>Tulis Ulasan Anda</h2>
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="product">Pilih Produk:</label>
                <select
                  id="product"
                  name="product"
                  value={form.product}
                  onChange={handleFormChange}
                  required
                >
                  {productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Rating:</label>
                <div
                  className="star-rating"
                  onMouseLeave={handleStarLeave}
                  data-selected={form.rating}
                >
                  {[1, 2, 3, 4, 5].map((val) => (
                    <i
                      key={val}
                      className={
                        (selectedRating || form.rating) >= val
                          ? "fas fa-star active"
                          : "far fa-star"
                      }
                      onMouseOver={() => handleStarHover(val)}
                      onClick={() => handleStarClick(val)}
                      data-rating={val}
                      style={{ cursor: "pointer" }}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="review-title">Judul Ulasan:</label>
                <input
                  type="text"
                  id="review-title"
                  name="title"
                  placeholder="Berikan judul singkat untuk ulasan Anda"
                  value={form.title}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="review-content">Ulasan:</label>
                <textarea
                  id="review-content"
                  name="content"
                  placeholder="Bagikan pengalaman Anda dengan produk ini"
                  value={form.content}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Kirim Ulasan</button>
              </div>
            </form>
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
};

export default Reviews;
