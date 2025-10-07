import React, { useEffect } from "react";
// import "./Toast.css";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // hilang otomatis 3 detik
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="toast">
      <p>{message}</p>
    </div>
  );
}
