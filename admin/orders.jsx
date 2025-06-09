import React, { useState, useEffect } from "react";
import "./Orders.css";

const initialOrders = [
  {
    id: "ORD-2023-1248",
    customer: { name: "Budi Santoso", phone: "081234567890", email: "budi.santoso@email.com", address: "Jl. Merdeka No. 123, Jakarta Pusat, DKI Jakarta 10110" },
    items: [
      { name: "Beras Premium 5kg", price: 65000, qty: 1 },
      { name: "Minyak Goreng 2L", price: 35000, qty: 1 },
      { name: "Kecap Manis Bango 600ml", price: 25000, qty: 1 },
    ],
    total: 125000,
    status: "pending",
    payment: "pending",
    date: "2023-11-23",
    time: "14:30",
    shipping: 10000,
    discount: 5000,
    paymentMethod: "Transfer Bank",
  },
  {
    id: "ORD-2023-1247",
    customer: { name: "Siti Aminah", phone: "082345678901", email: "", address: "" },
    items: [
      { name: "Kecap Manis 600ml", price: 22000, qty: 1 },
      { name: "Teh Celup 25 Bags", price: 11500, qty: 1 },
    ],
    total: 33500,
    status: "processing",
    payment: "paid",
    date: "2023-11-23",
    time: "13:15",
    shipping: 0,
    discount: 0,
    paymentMethod: "Transfer Bank",
  },
  {
    id: "ORD-2023-1246",
    customer: { name: "Ahmad Rizki", phone: "083456789012", email: "", address: "" },
    items: [
      { name: "Mie Instan 5pcs", price: 12000, qty: 1 },
      { name: "Rinso 900g", price: 17500, qty: 1 },
      { name: "Gula Pasir 1kg", price: 17500, qty: 1 },
    ],
    total: 47000,
    status: "shipped",
    payment: "paid",
    date: "2023-11-22",
    time: "16:45",
    shipping: 0,
    discount: 0,
    paymentMethod: "Transfer Bank",
  },
  {
    id: "ORD-2023-1245",
    customer: { name: "Maya Sari", phone: "084567890123", email: "", address: "" },
    items: [
      { name: "Kopi Kapal Api 165g", price: 15000, qty: 1 },
      { name: "Gula Pasir 1kg", price: 12500, qty: 1 },
    ],
    total: 27500,
    status: "delivered",
    payment: "paid",
    date: "2023-11-22",
    time: "10:20",
    shipping: 0,
    discount: 0,
    paymentMethod: "Transfer Bank",
  },
  {
    id: "ORD-2023-1244",
    customer: { name: "Dedi Kurniawan", phone: "085678901234", email: "", address: "" },
    items: [
      { name: "Beras Premium 5kg", price: 65000, qty: 1 },
    ],
    total: 65000,
    status: "cancelled",
    payment: "failed",
    date: "2023-11-21",
    time: "09:30",
    shipping: 0,
    discount: 0,
    paymentMethod: "Transfer Bank",
  },
];

const statusLabel = {
  pending: "Menunggu",
  processing: "Diproses",
  shipped: "Dikirim",
  delivered: "Selesai",
  cancelled: "Dibatalkan",
};

const paymentLabel = {
  paid: "Lunas",
  pending: "Menunggu",
  failed: "Gagal",
};

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [modalOrder, setModalOrder] = useState(null);

  // Stats
  const stats = {
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  };

  // Filtered orders
  const filteredOrders = orders.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !orderStatus || o.status === orderStatus;
    const matchPayment = !paymentStatus || o.payment === paymentStatus;
    const matchDateFrom = !dateFrom || o.date >= dateFrom;
    const matchDateTo = !dateTo || o.date <= dateTo;
    return matchSearch && matchStatus && matchPayment && matchDateFrom && matchDateTo;
  });

  // Modal handlers
  const openModal = (order) => setModalOrder(order);
  const closeModal = () => setModalOrder(null);

  // Status update
  const updateOrderStatus = (orderId, newStatus) => {
    if (
      window.confirm(
        `Apakah Anda yakin ingin mengubah status pesanan ${orderId} menjadi "${statusLabel[newStatus]}"?`
      )
    ) {
      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderId ? { ...o, status: newStatus } : o
        )
      );
      closeModal();
    }
  };

  // Dummy edit/print
  const editOrder = (orderId) => alert(`Edit pesanan ${orderId}`);
  const printOrder = (orderId) => alert(`Print pesanan ${orderId}`);

  // Export/refresh
  const exportOrders = () => alert("Export data pesanan...");
  const refreshOrders = () => alert("Refresh data pesanan...");

  // Auto-refresh (dummy)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulasi auto-refresh
      // In real app, fetch new orders here
      // console.log("Auto-refreshing orders...");
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orders-root">
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
              <a href="inventory.html">
                <i className="fas fa-box"></i> <span>Manajemen Stok</span>
              </a>
            </li>
            <li>
              <a href="orders.html" className="active">
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
            <h2>Manajemen Pesanan</h2>
          </div>
          <div className="top-actions">
            <button className="btn btn-secondary" onClick={exportOrders}>
              <i className="fas fa-download"></i> Export
            </button>
            <button className="btn btn-primary" onClick={refreshOrders}>
              <i className="fas fa-sync-alt"></i> Refresh
            </button>
          </div>
        </div>

        {/* Order Statistics */}
        <div className="order-stats">
          <div className="stat-card">
            <div className="icon pending">
              <i className="fas fa-clock"></i>
            </div>
            <h3>{stats.pending}</h3>
            <p>Menunggu Konfirmasi</p>
          </div>
          <div className="stat-card">
            <div className="icon processing">
              <i className="fas fa-cog"></i>
            </div>
            <h3>{stats.processing}</h3>
            <p>Sedang Diproses</p>
          </div>
          <div className="stat-card">
            <div className="icon shipped">
              <i className="fas fa-truck"></i>
            </div>
            <h3>{stats.shipped}</h3>
            <p>Dalam Pengiriman</p>
          </div>
          <div className="stat-card">
            <div className="icon delivered">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>{stats.delivered}</h3>
            <p>Selesai</p>
          </div>
          <div className="stat-card">
            <div className="icon cancelled">
              <i className="fas fa-times-circle"></i>
            </div>
            <h3>{stats.cancelled}</h3>
            <p>Dibatalkan</p>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filters-row">
            <div className="filter-group">
              <label htmlFor="searchOrder">Cari Pesanan</label>
              <input
                type="text"
                id="searchOrder"
                placeholder="ID pesanan atau nama pelanggan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="orderStatus">Status Pesanan</label>
              <select
                id="orderStatus"
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
              >
                <option value="">Semua Status</option>
                <option value="pending">Menunggu Konfirmasi</option>
                <option value="processing">Sedang Diproses</option>
                <option value="shipped">Dalam Pengiriman</option>
                <option value="delivered">Selesai</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="paymentStatus">Status Pembayaran</label>
              <select
                id="paymentStatus"
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
              >
                <option value="">Semua Status</option>
                <option value="paid">Lunas</option>
                <option value="pending">Menunggu</option>
                <option value="failed">Gagal</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="dateFrom">Dari Tanggal</label>
              <input
                type="date"
                id="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="dateTo">Sampai Tanggal</label>
              <input
                type="date"
                id="dateTo"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <button className="btn btn-primary" onClick={() => {}}>
                <i className="fas fa-search"></i> Filter
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="orders-section">
          <div className="orders-header">
            <h3>Daftar Pesanan</h3>
          </div>
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID Pesanan</th>
                <th>Pelanggan</th>
                <th>Produk</th>
                <th>Total</th>
                <th>Status Pesanan</th>
                <th>Pembayaran</th>
                <th>Tanggal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <span
                      className="order-id"
                      style={{ cursor: "pointer" }}
                      onClick={() => openModal(order)}
                    >
                      #{order.id}
                    </span>
                  </td>
                  <td>
                    <div className="customer-info">
                      <div className="customer-name">{order.customer.name}</div>
                      <div className="customer-contact">{order.customer.phone}</div>
                    </div>
                  </td>
                  <td>
                    <div className="order-items">
                      {order.items.slice(0, 2).map((item, idx) => (
                        <span className="order-item" key={idx}>
                          {item.name}
                        </span>
                      ))}
                      {order.items.length > 2 && (
                        <span className="order-item">
                          +{order.items.length - 2} item lagi
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    {order.total.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </td>
                  <td>
                    <span className={`order-status ${order.status}`}>
                      {statusLabel[order.status]}
                    </span>
                  </td>
                  <td>
                    <span className={`payment-status ${order.payment}`}>
                      {paymentLabel[order.payment]}
                    </span>
                  </td>
                  <td>
                    {new Date(order.date).toLocaleDateString("id-ID")}
                    <br />
                    <small>{order.time}</small>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-sm btn-view"
                        title="Lihat Detail"
                        onClick={() => openModal(order)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        className="btn-sm btn-edit"
                        title="Edit"
                        onClick={() => editOrder(order.id)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn-sm btn-print"
                        title="Print"
                        onClick={() => printOrder(order.id)}
                      >
                        <i className="fas fa-print"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center" }}>
                    Tidak ada data pesanan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Pagination dummy */}
          <div className="pagination">
            <button disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="active">1</button>
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

      {/* Order Detail Modal */}
      {modalOrder && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                Detail Pesanan #{modalOrder.id}
              </h3>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="order-detail-grid">
                <div className="detail-section">
                  <h4>Informasi Pesanan</h4>
                  <div className="detail-row">
                    <span className="detail-label">ID Pesanan:</span>
                    <span className="detail-value">#{modalOrder.id}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Tanggal Pesanan:</span>
                    <span className="detail-value">
                      {new Date(modalOrder.date).toLocaleDateString("id-ID")}, {modalOrder.time}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">
                      <span className={`order-status ${modalOrder.status}`}>
                        {statusLabel[modalOrder.status]}
                      </span>
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Pembayaran:</span>
                    <span className="detail-value">
                      <span className={`payment-status ${modalOrder.payment}`}>
                        {paymentLabel[modalOrder.payment]}
                      </span>
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Metode Pembayaran:</span>
                    <span className="detail-value">{modalOrder.paymentMethod}</span>
                  </div>
                </div>
                <div className="detail-section">
                  <h4>Informasi Pelanggan</h4>
                  <div className="detail-row">
                    <span className="detail-label">Nama:</span>
                    <span className="detail-value">{modalOrder.customer.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Telepon:</span>
                    <span className="detail-value">{modalOrder.customer.phone}</span>
                  </div>
                  {modalOrder.customer.email && (
                    <div className="detail-row">
                      <span className="detail-label">Email:</span>
                      <span className="detail-value">{modalOrder.customer.email}</span>
                    </div>
                  )}
                  {modalOrder.customer.address && (
                    <div className="detail-row">
                      <span className="detail-label">Alamat:</span>
                      <span className="detail-value">{modalOrder.customer.address}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="order-items-detail">
                <h4>Detail Produk</h4>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Produk</th>
                      <th>Harga</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modalOrder.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.name}</td>
                        <td>
                          {item.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          {(item.price * item.qty).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="order-total">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>
                    {modalOrder.total.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="total-row">
                  <span>Ongkos Kirim:</span>
                  <span>
                    {modalOrder.shipping.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="total-row">
                  <span>Diskon:</span>
                  <span>
                    -{modalOrder.discount.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="total-row final">
                  <span>Total:</span>
                  <span>
                    {(
                      modalOrder.total +
                      modalOrder.shipping -
                      modalOrder.discount
                    ).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
              <div className="status-update">
                <h4>Update Status Pesanan</h4>
                <div className="status-buttons">
                  <button
                    className="status-btn confirm"
                    onClick={() => updateOrderStatus(modalOrder.id, "processing")}
                  >
                    <i className="fas fa-check"></i> Konfirmasi Pesanan
                  </button>
                  <button
                    className="status-btn ship"
                    onClick={() => updateOrderStatus(modalOrder.id, "shipped")}
                  >
                    <i className="fas fa-truck"></i> Kirim Pesanan
                  </button>
                  <button
                    className="status-btn deliver"
                    onClick={() => updateOrderStatus(modalOrder.id, "delivered")}
                  >
                    <i className="fas fa-check-circle"></i> Pesanan Selesai
                  </button>
                  <button
                    className="status-btn cancel"
                    onClick={() => updateOrderStatus(modalOrder.id, "cancelled")}
                  >
                    <i className="fas fa-times"></i> Batalkan Pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;