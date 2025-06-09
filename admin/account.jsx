import React, { useState } from "react";
import "./AccountLogin.css"; // Copy CSS dari <style> di HTML ke file ini

const AccountLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allowedUsername = "admin";
    const allowedPassword = "kirei123";
    if (username === allowedUsername && password === allowedPassword) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <h1>Kirei's Mart</h1>
        <p>Admin Panel</p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <i
                className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                id="toggle-password"
                onClick={handleTogglePassword}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="forgot-password">
          <a href="#">Lupa password?</a>
        </div>
        <div className="back-to-site">
          <a href="../index.html">
            <i className="fas fa-arrow-left"></i> Kembali ke Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountLogin;