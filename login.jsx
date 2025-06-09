import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login admin: username admin, password admin123
    if (username === "admin" && password === "admin123") {
      setError("");
      navigate("/admin/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1976d2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 36,
          marginBottom: 8,
        }}
      >
        Kirei's Mart
      </div>
      <div style={{ color: "#fff", fontSize: 18, marginBottom: 32 }}>
        Admin Login
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px #0002",
          padding: 32,
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#1976d2",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Masuk Admin
        </div>
        <div
          style={{
            color: "#555",
            fontSize: 15,
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Username: <b>admin</b> &nbsp; Password: <b>admin123</b>
        </div>
        <label style={{ fontWeight: 600, fontSize: 15 }}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan username"
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #bbb",
            fontSize: 16,
          }}
          required
        />
        <label style={{ fontWeight: 600, fontSize: 15 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #bbb",
            fontSize: 16,
          }}
          required
        />
        {error && <div style={{ color: "#d32f2f", fontSize: 14 }}>{error}</div>}
        <button
          type="submit"
          style={{
            background: "#1976d2",
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
            border: "none",
            borderRadius: 6,
            padding: "10px 0",
            marginTop: 10,
            cursor: "pointer",
          }}
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
