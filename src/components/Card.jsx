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
        console.error('Gagal menambahkan ke keranjang:', error);
    }
};

  return (
    <div className="card">
      <div className="produk-top">
        <img src={produk.imageUrl} alt={produk.title} />
        <h3>{produk.title}</h3>
      </div>

      <div className="produk-bottom">
        <p className="deskripsi-produk">{produk.description}</p>
        {produk.diskon > 0 && <p className="diskon">Diskon {produk.diskon}%</p>}
        <div className="row">
          <p className="harga">Rp {produk.harga.toLocaleString()}</p>
          <p className="stok">Stok: {produk.stok}</p>
        </div>
        {/* {children} */}
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
