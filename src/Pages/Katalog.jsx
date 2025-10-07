// src/components/Katalog.jsx
import React, { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../components/Products";
import { useCart } from "../context/CartContext";
import Card from "../components/Card";
import "../../src/assets/css/Katalog.css";
import "../index.css";
import ShoppingCartComponent from "./Keranjang";

function Katalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Manis", "Asin", "Pedas"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="catalog-container">
      {/* Filter */}
      <div className="category-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Produk */}
      <section className="catalog-section">
        <h2 className="catalog-judul">Katalog Produk Kami</h2>
        {/* List Produk */}
        <div className="catalog-grid">
          {filteredProducts.map((item) => (
            <Card key={item.id} produk={item}></Card>
          ))}
        </div>
      </section>

      {/* Tombol Cart */}
      <ShoppingCartComponent size={40} />
      {/* <button className="cart-fab" onClick={() => setIsCartOpen(true)}>
        {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
      </button> */}
    </div>
  );
}

export default Katalog;
