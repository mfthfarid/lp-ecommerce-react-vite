import React, { useState } from "react";
import "../assets/css/Kontak.css";

function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dari ${formData.name} terkirim!`);
    // bisa disambungkan ke API / backend
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ minHeight: "100vh", padding: "40px", textAlign: "center" }}>
      <h2>Hubungi Kami</h2>
      <p>Silakan tinggalkan pesan Anda melalui form berikut:</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}>
        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Alamat Email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Pesan Anda"
          className="form-control"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required></textarea>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          Kirim
        </button>
      </form>
    </main>
  );
}

export default Kontak;
