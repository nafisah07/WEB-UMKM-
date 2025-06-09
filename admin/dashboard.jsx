import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialProductData = [
  {
    nama: "Beras Premium 5kg",
    kategori: "Bahan Makanan",
    harga: 65000,
    stok: 50,
    status: "Tersedia",
    update: "9/6/2025, 07.16.16",
    aksi: "",
  },
  {
    nama: "Minyak Goreng 2L",
    kategori: "Bahan Makanan",
    harga: 28000,
    stok: 8,
    status: "Stok Menipis",
    update: "9/6/2025, 07.16.16",
    aksi: "",
  },
  {
    nama: "Gula Pasir 1kg",
    kategori: "Bahan Makanan",
    harga: 15000,
    stok: 5,
    status: "Stok Menipis",
    update: "9/6/2025, 07.16.36",
    aksi: "",
  },
  {
    nama: "Indomie Goreng",
    kategori: "Mie Instan",
    harga: 3500,
    stok: 100,
    status: "Tersedia",
    update: "9/6/2025, 07.16.16",
    aksi: "",
  },
  {
    nama: "Kecap Manis ABC",
    kategori: "Bumbu Masakan",
    harga: 12000,
    stok: 3,
    status: "Stok Menipis",
    update: "9/6/2025, 07.16.16",
    aksi: "",
  },
  {
    nama: "Teh Botol Sosro",
    kategori: "Jajanan & Minuman",
    harga: 4500,
    stok: 75,
    status: "Tersedia",
    update: "9/6/2025, 07.16.16",
    aksi: "",
  },
];

const statusColor = (status) => {
  if (status === "Tersedia") return { background: "#2563eb", color: "#fff" };
  if (status === "Stok Menipis") return { background: "#ef4444", color: "#fff" };
  return {};
};

const Dashboard = () => {
  const [productData, setProductData] = useState(initialProductData);
  const [showAdd, setShowAdd] = useState(false);
  const [newProduct, setNewProduct] = useState({
    nama: "",
    kategori: "Bahan Makanan",
    harga: "",
    stok: "",
    status: "Tersedia",
    update: new Date().toLocaleString("id-ID"),
    aksi: "",
  });
  const navigate = useNavigate();

  const handleChangeStok = (idx, delta) => {
    setProductData((prev) => {
      return prev.map((row, i) => {
        if (i !== idx) return row;
        const newStok = Math.max(0, row.stok + delta);
        let newStatus = row.status;
        if (newStok <= 10) newStatus = "Stok Menipis";
        else newStatus = "Tersedia";
        return { ...row, stok: newStok, status: newStatus };
      });
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.nama || !newProduct.harga || !newProduct.stok) return;
    setProductData([
      ...productData,
      {
        ...newProduct,
        harga: parseInt(newProduct.harga),
        stok: parseInt(newProduct.stok),
        status: parseInt(newProduct.stok) <= 10 ? "Stok Menipis" : "Tersedia",
        update: new Date().toLocaleString("id-ID"),
      },
    ]);
    setShowAdd(false);
    setNewProduct({
      nama: "",
      kategori: "Bahan Makanan",
      harga: "",
      stok: "",
      status: "Tersedia",
      update: new Date().toLocaleString("id-ID"),
      aksi: "",
    });
  };

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginBottom: 32,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#2563eb" }}>
              Kirei's Mart - Manajemen Stok
            </div>
            <div style={{ color: "#64748b", fontSize: 17, marginTop: 2 }}>
              Kelola inventori dan stok produk
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 600, fontSize: 18 }}>Admin Kirei</div>
              <div style={{ color: "#64748b", fontSize: 14 }}>
                Administrator
              </div>
            </div>
            <button
              style={{
                background: "#fff",
                color: "#ef4444",
                border: "1px solid #ef4444",
                borderRadius: 8,
                padding: "8px 18px",
                fontWeight: 600,
                fontSize: 16,
                marginLeft: 8,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
              onClick={() => navigate("/")}
            >
              <i className="fas fa-sign-out-alt"></i> Keluar
            </button>
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
              minWidth: 180,
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Total Produk
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#2563eb",
              }}
            >
              {productData.length}
            </div>
            <div style={{ color: "#64748b", fontSize: 15 }}>Produk aktif</div>
          </div>
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
              minWidth: 180,
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Total Stok
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#22c55e",
              }}
            >
              {productData.reduce((a, b) => a + b.stok, 0)}
            </div>
            <div style={{ color: "#64748b", fontSize: 15 }}>Unit tersedia</div>
          </div>
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
              minWidth: 180,
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Nilai Inventori
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#f59e42",
              }}
            >
              Rp{" "}
              {(productData.reduce((a, b) => a + b.stok * b.harga, 0) / 1000000).toFixed(
                1
              )}
              JT
            </div>
            <div style={{ color: "#64748b", fontSize: 15 }}>Total nilai stok</div>
          </div>
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
              minWidth: 180,
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Stok Menipis
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#ef4444",
              }}
            >
              {productData.filter((p) => p.stok <= 10).length}
            </div>
            <div style={{ color: "#64748b", fontSize: 15 }}>Perlu restok</div>
          </div>
        </div>
        {/* Peringatan Stok Menipis */}
        <div
          style={{
            background: "#fef2f2",
            borderRadius: 16,
            padding: 24,
            marginBottom: 32,
            border: "1.5px solid #fecaca",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <i
              className="fas fa-exclamation-triangle"
              style={{ color: "#ef4444", fontSize: 26 }}
            ></i>
            <span
              style={{
                color: "#b91c1c",
                fontWeight: 700,
                fontSize: 28,
              }}
            >
              Peringatan Stok Menipis
            </span>
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {productData
              .filter((p) => p.stok <= 10)
              .map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px #0001",
                    padding: 18,
                    minWidth: 260,
                    marginBottom: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      color: "#dc2626",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    {p.nama}
                  </div>
                  <div style={{ color: "#64748b", fontSize: 15 }}>
                    {p.kategori}
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <span
                      style={{
                        background: "#ef4444",
                        color: "#fff",
                        borderRadius: 8,
                        padding: "4px 14px",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      Stok: {p.stok}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Manajemen Stok Produk
        </h1>
        <div style={{ color: "#64748b", marginBottom: 24 }}>
          Kelola inventori dan update stok secara real-time
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <input
            type="text"
            placeholder="Cari produk atau kategori..."
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 16,
            }}
          />
          <select
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 16,
            }}
            value={newProduct.kategori}
            onChange={(e) =>
              setNewProduct((p) => ({ ...p, kategori: e.target.value }))
            }
            disabled={!showAdd}
          >
            <option>Bahan Makanan</option>
            <option>Bumbu Masakan</option>
            <option>Mie Instan</option>
            <option>Jajanan & Minuman</option>
          </select>
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: 8,
              padding: "0 24px",
              fontSize: 16,
              height: 48,
              cursor: "pointer",
            }}
            onClick={() => setShowAdd(true)}
          >
            + Tambah Produk
          </button>
        </div>
        {showAdd && (
          <form
            onSubmit={handleAddProduct}
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
              marginBottom: 24,
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Nama Produk"
              value={newProduct.nama}
              onChange={(e) =>
                setNewProduct((p) => ({ ...p, nama: e.target.value }))
              }
              style={{
                padding: 10,
                borderRadius: 8,
                border: "1px solid #d1d5db",
                fontSize: 16,
                width: 180,
              }}
              required
            />
            <select
              value={newProduct.kategori}
              onChange={(e) =>
                setNewProduct((p) => ({ ...p, kategori: e.target.value }))
              }
              style={{
                padding: 10,
                borderRadius: 8,
                border: "1px solid #d1d5db",
                fontSize: 16,
                width: 160,
              }}
            >
              <option>Bahan Makanan</option>
              <option>Bumbu Masakan</option>
              <option>Mie Instan</option>
              <option>Jajanan & Minuman</option>
            </select>
            <input
              type="number"
              placeholder="Harga"
              value={newProduct.harga}
              onChange={(e) =>
                setNewProduct((p) => ({ ...p, harga: e.target.value }))
              }
              style={{
                padding: 10,
                borderRadius: 8,
                border: "1px solid #d1d5db",
                fontSize: 16,
                width: 120,
              }}
              required
            />
            <input
              type="number"
              placeholder="Stok"
              value={newProduct.stok}
              onChange={(e) =>
                setNewProduct((p) => ({ ...p, stok: e.target.value }))
              }
              style={{
                padding: 10,
                borderRadius: 8,
                border: "1px solid #d1d5db",
                fontSize: 16,
                width: 80,
              }}
              required
            />
            <button
              type="submit"
              style={{
                background: "#2563eb",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: 8,
                padding: "8px 24px",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => setShowAdd(false)}
              style={{
                background: "#fff",
                color: "#2563eb",
                border: "1px solid #2563eb",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Batal
            </button>
          </form>
        )}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px #0001",
            overflow: "hidden",
          }}
        >
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}
          >
            <thead style={{ background: "#f1f5f9" }}>
              <tr>
                <th style={{ textAlign: "left", padding: 16 }}>Nama Produk</th>
                <th style={{ textAlign: "left", padding: 16 }}>Kategori</th>
                <th style={{ textAlign: "left", padding: 16 }}>Harga</th>
                <th style={{ textAlign: "center", padding: 16 }}>Stok</th>
                <th style={{ textAlign: "center", padding: 16 }}>Status</th>
                <th style={{ textAlign: "center", padding: 16 }}>
                  Terakhir Update
                </th>
                <th style={{ textAlign: "center", padding: 16 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    background:
                      row.status === "Stok Menipis" ? "#fef2f2" : "#fff",
                  }}
                >
                  <td style={{ padding: 16 }}>{row.nama}</td>
                  <td style={{ padding: 16 }}>
                    <span
                      style={{
                        background: "#dbeafe",
                        color: "#2563eb",
                        borderRadius: 12,
                        padding: "4px 14px",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {row.kategori}
                    </span>
                  </td>
                  <td style={{ padding: 16 }}>
                    Rp {row.harga.toLocaleString("id-ID")}
                  </td>
                  <td
                    style={{
                      padding: 16,
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    <button
                      style={{
                        border: "1px solid #d1d5db",
                        background: "#fff",
                        borderRadius: 6,
                        width: 32,
                        height: 32,
                        fontSize: 18,
                        cursor: "pointer",
                        marginRight: 8,
                      }}
                      onClick={() => handleChangeStok(idx, -1)}
                      disabled={row.stok === 0}
                    >
                      -
                    </button>
                    <span
                      style={{ color: row.stok <= 10 ? "#ef4444" : "#22c55e" }}
                    >
                      {row.stok}
                    </span>
                    <button
                      style={{
                        border: "1px solid #d1d5db",
                        background: "#fff",
                        borderRadius: 6,
                        width: 32,
                        height: 32,
                        fontSize: 18,
                        cursor: "pointer",
                        marginLeft: 8,
                      }}
                      onClick={() => handleChangeStok(idx, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td style={{ padding: 16, textAlign: "center" }}>
                    <span
                      style={{
                        ...statusColor(row.status),
                        borderRadius: 12,
                        padding: "4px 14px",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: 16,
                      textAlign: "center",
                      color: "#64748b",
                      fontSize: 15,
                    }}
                  >
                    {row.update}
                  </td>
                  <td style={{ padding: 16, textAlign: "center" }}>
                    <button
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        marginRight: 8,
                      }}
                      title="Edit"
                    >
                      <i
                        className="fas fa-pen"
                        style={{ color: "#2563eb", fontSize: 18 }}
                      ></i>
                    </button>
                    <button
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                      title="Hapus"
                    >
                      <i
                        className="fas fa-trash"
                        style={{ color: "#ef4444", fontSize: 18 }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
