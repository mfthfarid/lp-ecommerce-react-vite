import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-left" autoClose={2000} />
  </StrictMode>
);

// ReactDOM.render(
//   <CartProvider>
//     <App />
//   </CartProvider>,
//   document.getElementById("root")
// );
