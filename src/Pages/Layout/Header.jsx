import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import "../../assets/css/Header.css";

function Header() {
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
    <header
      style={{
        backgroundColor: "#03b6ceff",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <h1 style={{ margin: 0 }}>{websiteName}</h1>

      <nav>
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
      </nav>
    </header>
  );
}

export default Header;
