import React from "react";
import PropTypes from "prop-types";
import "../../src/assets/css/Card.css";
import { useCart } from "../context/CartContext";

function Card({ produk }) {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    try {
      addToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    } catch (error) {
      console.error("Gagal menambahkan ke keranjang:", error);
    }
  };

  return (
    <div className="card">
      <div className="produk-top">
        <img src={produk.imageUrl} alt={produk.title} />
        {produk.diskon > 0 && (
          <span className="diskon">Diskon {produk.diskon}%</span>
        )}
      </div>

      <div className="produk-bottom">
        <h3 className="produk-judul">{produk.title}</h3>
        <p className="produk-deskripsi">{produk.description}</p>
        <div className="produk-footer">
          <div className="harga">Rp {produk.harga.toLocaleString()}</div>
          <div className="stok">
            Stok: <span className="stok-value">{produk.stok}</span>
          </div>
        </div>
        <button
          className="card-btn"
          onClick={() => addToCart(produk)}
          disabled={produk.stok <= 0}>
          {produk.stok > 0 ? "Tambah ke Keranjang" : "Stok Habis"}
        </button>
      </div>
    </div>
  );
}

export default Card;
