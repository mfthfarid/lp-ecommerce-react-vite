import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); // kosong dulu
  const handleAddToCart = () => {
    try {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1500);
    } catch (error) {
        console.error('Gagal menambahkan ke keranjang:', error);
    }
};

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          // cek apakah sudah mencapai stok maksimum
          if (item.quantity < item.stok) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            alert("Stok tidak memadai!");
            return item; // tetap sama, tidak bisa tambah lagi
          }
        }
        return item;
      })
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => {
      const subtotal = item.harga * item.quantity;

      if (item.diskon && item.diskon > 0) {
        // hitung diskon hanya sekali per produk
        const potongan = (item.harga * item.diskon) / 100;
        return total + subtotal - potongan;
      }

      return total + subtotal;
    }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        setProducts, // ini biar bisa dipanggil di luar
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
