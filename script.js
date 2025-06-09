// Gunakan di file: useCart.js
import { useState, useEffect } from "react";

// Helper untuk membersihkan harga
const cleanPrice = (price) =>
  parseInt(price.replace("Rp ", "").replace(/\./g, "")) || 0;

export function useCart() {
  const [cart, setCart] = useState([]);

  // Load cart dari localStorage saat mount
  useEffect(() => {
    const savedCart = localStorage.getItem("kireiCart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Simpan cart ke localStorage setiap berubah
  useEffect(() => {
    localStorage.setItem("kireiCart", JSON.stringify(cart));
  }, [cart]);

  // Tambah produk ke cart
  const addToCart = (name, price, image) => {
    const priceValue = typeof price === "number" ? price : cleanPrice(price);
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.name === name);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        { name, price: priceValue, image, quantity: 1 }
      ];
    });
  };

  // Hapus produk dari cart
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // Ubah jumlah produk
  const updateQuantity = (name, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, qty) }
          : item
      )
    );
  };

  // Kosongkan cart
  const clearCart = () => setCart([]);

  // Hitung total item
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Hitung subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Checkout ke WhatsApp
  const checkout = ({ name, phone, address }) => {
    if (!cart.length) return alert("Keranjang belanja Anda kosong");
    if (!name || !phone || !address) return alert("Lengkapi data diri Anda");

    const shipping = 10000;
    const grandTotal = subtotal + shipping;
    let cartText = cart
      .map(
        (item) =>
          `- ${item.name} (${item.quantity}x) @ Rp ${item.price.toLocaleString(
            "id-ID"
          )} = Rp ${(item.price * item.quantity).toLocaleString("id-ID")}`
      )
      .join("\n");

    let message = `*PESANAN BARU - KIREI'S MART*\n\n*Data Pelanggan:*\nNama: ${name}\nTelepon: ${phone}\nAlamat: ${address}\n\n*Detail Pesanan:*\n${cartText}\n\n*Ringkasan Pembayaran:*\nSubtotal: Rp ${subtotal.toLocaleString(
      "id-ID"
    )}\nOngkos Kirim: Rp ${shipping.toLocaleString(
      "id-ID"
    )}\nTotal: Rp ${grandTotal.toLocaleString(
      "id-ID"
    )}\n\nTerima kasih telah berbelanja di Kirei's Mart!`;

    window.open(
      `https://wa.me/6287879060790?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    clearCart();
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    checkout,
  };
}