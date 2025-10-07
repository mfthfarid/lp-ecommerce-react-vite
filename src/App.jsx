import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Pages/Layout/Header";
import Footer from "./Pages/Layout/Footer";
import MainContent from "./Pages/Home";
import About from "./Pages/About";
import Kontak from "./Pages/Kontak";
import "./assets/css/App.css";
import Katalog from "./Pages/Katalog";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Cart from "./Pages/Keranjang";
import ProtectedRoute from "@/components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Header />

            <div className="content">
              <Routes>
                <Route
                  path="/"
                  element={<MainContent userStatus={"Reguler"} />}
                />
                {/* <Route path="/" element={<MainContent userStatus={"Premium"} />} /> */}
                <Route path="/katalog" element={<Katalog />} />
                <Route path="/keranjang" element={<Cart />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
