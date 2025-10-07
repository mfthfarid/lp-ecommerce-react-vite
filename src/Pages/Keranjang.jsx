import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "../../src/assets/css/Keranjang.css";
import "../index.css";

const Keranjang = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    cart,
    products,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    if (user) {
      alert("Checkout berhasil!");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="shopping-cart-container">
      {/* Cart Icon with Badge */}
      <div className="cart-icon-container">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="cart-icon-btn">
          <ShoppingCart size={30} />
          {getTotalItems() > 0 && (
            <span className="cart-badge">{getTotalItems()}</span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-backdrop" onClick={() => setIsCartOpen(false)} />

          <div className="cart-sidebar">
            <div className="cart-content">
              {/* Header */}
              <div className="cart-header">
                <h2 className="cart-title">Keranjang Belanja</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="close-btn">
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="cart-items">
                {cart.length === 0 ? (
                  <div className="empty-cart">
                    <ShoppingCart size={48} className="empty-cart-icon" />
                    <p className="empty-cart-text">Keranjang kosong</p>
                    <p className="empty-cart-subtext">
                      Tambahkan produk untuk mulai berbelanja
                    </p>
                  </div>
                ) : (
                  <div className="cart-items-list">
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="cart-item-image"
                        />

                        <div className="cart-item-details">
                          <h4 className="cart-item-title">{item.title}</h4>
                          <p className="cart-item-price">
                            Rp {item.harga.toLocaleString()}
                          </p>

                          {/* Quantity Controls */}
                          <div className="quantity-controls">
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="quantity-btn minus">
                              <Minus size={14} />
                            </button>

                            <span className="quantity-display">
                              {item.quantity}{" "}
                              {/* gunakan quantity, bukan stok */}
                            </span>

                            <button
                              onClick={() => increaseQty(item.id)}
                              className="quantity-btn plus">
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>

                        <div className="cart-item-actions">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="remove-btn">
                            <Trash2 size={16} />
                          </button>
                          <p className="item-total">
                            Rp {(item.harga * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer - Total & Checkout */}
              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="total-section">
                    <span className="total-label">Total:</span>
                    <span className="total-amount">
                      Rp {getTotalPrice().toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className={`checkout-btn ${!user ? "disabled" : ""}`}
                    disabled={!user}>
                    Checkout ({getTotalItems()} items)
                  </button>
                  {!user && (
                    <p className="login-message">
                      Silakan{" "}
                      <span
                        className="login-link"
                        onClick={() => navigate("/login")}>
                        login
                      </span>{" "}
                      terlebih dahulu untuk melanjutkan checkout.
                    </p>
                  )}

                  <button onClick={clearCart} className="clear-cart-btn">
                    Kosongkan Keranjang
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Keranjang;
