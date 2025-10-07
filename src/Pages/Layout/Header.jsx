import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import "../../assets/css/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("Anda telah logout");
    navigate("/");
  };

  const websiteName = "Toko Snack";
  // const currentDate = new Date().toLocaleDateString();
  // const AboutPage = () => {
  //   window.location.href = "/about";
  // };

  return (
    <header className="header">
      <div className="nav-container">
        <h1 className="logo">{websiteName}</h1>
        <div className="dekstop-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Home
          </NavLink>
          <NavLink
            to="/katalog"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Katalog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            About
          </NavLink>
          <NavLink
            to="/kontak"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Kontak
          </NavLink>
          {user ? (
            <button onClick={handleLogout} className="nav-link logout-btn">
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Login
            </NavLink>
          )}
          {/* <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Login
          </NavLink> */}
        </div>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link">
            Home
          </Link>
          <Link to="/katalog" className="mobile-link">
            Katalog
          </Link>
          <Link to="/about" className="mobile-link">
            About
          </Link>
          <Link to="/kontak" className="mobile-link">
            Kontak
          </Link>
          {user ? (
            <button onClick={handleLogout} className="nav-link logout-btn">
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Login
            </NavLink>
          )}
          {/* <Link to="/login" className="mobile-login-btn">
            Login
          </Link> */}
        </div>
      )}

      {/* <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "30px",
            margin: 0,
            padding: 0,
            marginRight: 40,
          }}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/katalog"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Katalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Kontak
            </NavLink>
          </li>
          <li>
            {user ? (
              <button onClick={handleLogout} className="nav-link logout-btn">
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
