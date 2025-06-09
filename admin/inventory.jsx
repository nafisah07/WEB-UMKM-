import React, { useState } from "react";
import "./Inventory.css";

const initialProducts = [
  {
    name: "Beras Premium 5kg",
    desc: "Beras berkualitas tinggi",
    sku: "BRS-001",
    category: "Beras & Minyak",
    stock: 8,
    buyPrice: 58000,
    sellPrice: 65000,
    entryDate: "2023-11-15",
    expiryDate: "2024-05-15",
    status: "low-stock",
  },
  {
    name: "Minyak Goreng 2L",
    desc: "Minyak goreng berkualitas",
    sku: "MYK-001",
    category: "Beras & Minyak",
    stock: 45,
    buyPrice: 32000,
    sellPrice: 35000,
    entryDate: "2023-11-20",
    expiryDate: "2024-11-20",
    status: "in-stock",
  },
  {
    name: "Kecap Manis Bango 600ml",
    desc: "Kecap manis premium",
    sku: "KCP-001",
    category: "Bumbu Dapur",
    stock: 15,
    buyPrice: 22000,
    sellPrice: 25000,
    entryDate: "2023-11-18",
    expiryDate: "2025-11-18",
    status: "low-stock",
  },
  {
    name: "Teh Celup Sariwangi 25 Bags",
    desc: "Teh celup berkualitas",
    sku: "TEH-001",
    category: "Minuman",
    stock: 0,
    buyPrice: 7500,
    sellPrice: 8500,
    entryDate: "2023-11-10",
    expiryDate: "2025-11-10",
    status: "out-of-stock",
  },
  {
    name: "Mie Instan Indomie Goreng 5pcs",
    desc: "Mie instan favorit",
    sku: "MIE-001",
    category: "Makanan Ringan",
    stock: 25,
    buyPrice: 12000,
    sellPrice: 13500,
    entryDate: "2023-10-05",
    expiryDate: "2024-04-05",
    status: "expired",
  },
];

const statusLabel = {
  "in-stock": "Tersedia",
  "low-stock": "Stok Rendah",
  "out-of-stock": "Stok Habis",
  expired: "Kadaluarsa",
};

const statusClass = {
  "in-stock": "in-stock",
  "low-stock": "low-stock",
  "out-of-stock": "out-of-stock",
  expired: "expired",
};

const categories = [
  { value: "", label: "Semua Kategori" },
  { value: "Beras & Minyak", label: "Beras & Minyak" },
  { value: "Bumbu Dapur", label: "Bumbu Dapur" },
  { value: "Minuman", label: "Minuman" },
  { value: "Makanan Ringan", label: "Makanan Ringan" },
  { value: "Perlengkapan Kebersihan", label: "Perlengkapan Kebersihan" },
];

const statusOptions = [
  { value: "", label: "Semua Status" },
  { value: "in-stock", label: "Tersedia" },
  { value: "low-stock", label: "Stok Rendah" },
  { value: "out-of-stock", label: "Stok Habis" },
  { value: "expired", label: "Kadaluarsa" },
];

const Inventory = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // add, edit, restock
  const [modalProduct, setModalProduct] = useState({});
  const [modalIndex, setModalIndex] = useState(null);

  // Filtered products
  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !category || p.category === category;
    const matchStatus = !status || p.status === status;
    return matchSearch && matchCategory && matchStatus;
  });

  // Stats
  const total = products.length;
  const lowStock = products.filter((p) => p.status === "low-stock").length;
  const expired = products.filter((p) => p.status === "expired").length;

  // Modal handlers
  const openAddModal = () => {
    setModalMode("add");
    setModalProduct({});
    setModalIndex(null);
    setModalOpen(true);
  };

  const openRestockModal = (idx) => {
    setModalMode("restock");
    setModalProduct(products[idx]);
    setModalIndex(idx);
    setModalOpen(true);
  };

  const openEditModal = (idx) => {
    setModalMode("edit");
    setModalProduct(products[idx]);
    setModalIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProduct({});
    setModalIndex(null);
  };

  const handleDelete = (idx) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProducts((prev) => prev.filter((_, i) => i !== idx));
    }
  };

  const handleExport = () => {
    alert("Export inventory data...");
    // Implement export logic here
  };

  // Modal form submit
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.productName.value,
      sku: form.sku.value,
      category: form.category.value,
      stock: Number(form.quantity.value),
      buyPrice: Number(form.buyPrice.value),
      sellPrice: Number(form.sellPrice.value),
      entryDate: form.entryDate ? form.entryDate.value : "",
      expiryDate: form.expiryDate.value,
      desc: form.notes.value,
      status: form.status
        ? form.status.value
        : modalMode === "restock"
        ? products[modalIndex].status
        : "in-stock",
    };

    if (modalMode === "add") {
      setProducts((prev) => [...prev, data]);
    } else if (modalMode === "edit" && modalIndex !== null) {
      setProducts((prev) =>
        prev.map((p, i) => (i === modalIndex ? { ...data } : p))
      );
    } else if (modalMode === "restock" && modalIndex !== null) {
      setProducts((prev) =>
        prev.map((p, i) =>
          i === modalIndex
            ? { ...p, stock: p.stock + data.stock }
            : p
        )
      );
    }
    closeModal();
  };

  // Pagination (dummy, for demo)
  const [page] = useState(1);

  return (
    <div className="inventory-root">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Kirei's Mart</h1>
          <p>Admin Panel</p>
        </div>
        <div className="sidebar-menu">
          <h3>Menu Utama</h3>
          <ul>
            <li>
              <a href="dashboard.html">
                <i className="fas fa-tachometer-alt"></i> <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="inventory.html" className="active">
                <i className="fas fa-box"></i> <span>Manajemen Stok</span>
              </a>
            </li>
            <li>
              <a href="orders.html">
                <i className="fas fa-shopping-cart"></i> <span>Pesanan</span>
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="fas fa-tags"></i> <span>Produk</span>
              </a>
            </li>
            <li>
              <a href="categories.html">
                <i className="fas fa-list"></i> <span>Kategori</span>
              </a>
            </li>
            <li>
              <a href="customers.html">
                <i className="fas fa-users"></i> <span>Pelanggan</span>
              </a>
            </li>
          </ul>
          <h3>Laporan</h3>
          <ul>
            <li>
              <a href="sales-report.html">
                <i className="fas fa-chart-line"></i> <span>Laporan Penjualan</span>
              </a>
            </li>
            <li>
              <a href="inventory-report.html">
                <i className="fas fa-clipboard-list"></i> <span>Laporan Stok</span>
              </a>
            </li>
            <li>
              <a href="expiry-report.html">
                <i className="fas fa-calendar-times"></i> <span>Laporan Kadaluarsa</span>
              </a>
            </li>
          </ul>
          <h3>Pengaturan</h3>
          <ul>
            <li>
              <a href="settings.html">
                <i className="fas fa-cog"></i> <span>Pengaturan</span>
              </a>
            </li>
            <li>
              <a href="users.html">
                <i className="fas fa-user-cog"></i> <span>Pengguna</span>
              </a>
            </li>
            <li>
              <a href="login.html">
                <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="page-title">
            <h2>Manajemen Stok</h2>
          </div>
          <div className="top-actions">
            <button className="btn btn-secondary" onClick={handleExport}>
              <i className="fas fa-download"></i> Export
            </button>
            <button className="btn btn-primary" onClick={openAddModal}>
              <i className="fas fa-plus"></i> Tambah Stok
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <form
            className="filters-row"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="filter-group">
              <label htmlFor="search">Cari Produk</label>
              <input
                type="text"
                id="search"
                placeholder="Nama produk atau SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="category">Kategori</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="status">Status Stok</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search"></i> Filter
              </button>
            </div>
          </form>
        </div>

        {/* Inventory Table */}
        <div className="inventory-section">
          <div className="inventory-header">
            <h3>Daftar Stok Produk</h3>
            <div className="inventory-stats">
              <span>Total: {total} produk</span>
              <span>Stok Rendah: {lowStock} produk</span>
              <span>Kadaluarsa: {expired} produk</span>
            </div>
          </div>

          <table className="inventory-table">
            <thead>
              <tr>
                <th>Produk</th>
                <th>SKU</th>
                <th>Kategori</th>
                <th>Stok</th>
                <th>Harga Beli</th>
                <th>Harga Jual</th>
                <th>Tanggal Masuk</th>
                <th>Tanggal Kadaluarsa</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p, idx) => (
                <tr key={p.sku}>
                  <td>
                    <div className="product-info">
                      <div className="product-details">
                        <h4>{p.name}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  </td>
                  <td>{p.sku}</td>
                  <td>{p.category}</td>
                  <td>{p.stock} unit</td>
                  <td>
                    {p.buyPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </td>
                  <td>
                    {p.sellPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </td>
                  <td>
                    {p.entryDate
                      ? new Date(p.entryDate).toLocaleDateString("id-ID")
                      : "-"}
                  </td>
                  <td>
                    {p.expiryDate
                      ? new Date(p.expiryDate).toLocaleDateString("id-ID")
                      : "-"}
                  </td>
                  <td>
                    <span className={`stock-status ${statusClass[p.status]}`}>
                      {statusLabel[p.status]}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-sm btn-restock"
                        onClick={() =>
                          openRestockModal(
                            products.findIndex((prod) => prod.sku === p.sku)
                          )
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                      <button
                        className="btn-sm btn-edit"
                        onClick={() =>
                          openEditModal(
                            products.findIndex((prod) => prod.sku === p.sku)
                          )
                        }
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn-sm btn-delete"
                        onClick={() =>
                          handleDelete(
                            products.findIndex((prod) => prod.sku === p.sku)
                          )
                        }
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={10} style={{ textAlign: "center" }}>
                    Tidak ada data produk.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination (dummy) */}
          <div className="pagination">
            <button disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="active">{page}</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>
                {modalMode === "add"
                  ? "Tambah Stok Baru"
                  : modalMode === "edit"
                  ? "Edit Produk"
                  : "Tambah Stok Produk"}
              </h3>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <form onSubmit={handleModalSubmit}>
              <div className="form-group">
                <label htmlFor="productName">Nama Produk</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  required
                  defaultValue={modalProduct.name || ""}
                  disabled={modalMode === "restock"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sku">SKU</label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  required
                  defaultValue={modalProduct.sku || ""}
                  disabled={modalMode === "restock"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Kategori</label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue={modalProduct.category || ""}
                  disabled={modalMode === "restock"}
                >
                  {categories
                    .filter((c) => c.value)
                    .map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">
                  {modalMode === "restock" ? "Jumlah Tambahan" : "Jumlah"}
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  required
                  defaultValue={
                    modalMode === "restock"
                      ? 1
                      : modalProduct.stock || ""
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="buyPrice">Harga Beli</label>
                <input
                  type="number"
                  id="buyPrice"
                  name="buyPrice"
                  min="0"
                  required
                  defaultValue={modalProduct.buyPrice || ""}
                  disabled={modalMode === "restock"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sellPrice">Harga Jual</label>
                <input
                  type="number"
                  id="sellPrice"
                  name="sellPrice"
                  min="0"
                  required
                  defaultValue={modalProduct.sellPrice || ""}
                  disabled={modalMode === "restock"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="entryDate">Tanggal Masuk</label>
                <input
                  type="date"
                  id="entryDate"
                  name="entryDate"
                  defaultValue={modalProduct.entryDate || ""}
                  disabled={modalMode === "restock"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Tanggal Kadaluarsa</label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  required
                  defaultValue={modalProduct.expiryDate || ""}
                  disabled={modalMode === "restock"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="notes">Catatan</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Catatan tambahan..."
                  defaultValue={modalProduct.desc || ""}
                  disabled={modalMode === "restock"}
                ></textarea>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;