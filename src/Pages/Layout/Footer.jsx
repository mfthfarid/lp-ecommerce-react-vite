import React, { use, useEffect, useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  // const currentTime = new Date().toLocaleTimeString();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const hour = now.getHours();
      if (hour >= 8 && hour < 17) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, 1000); // update setiap 1 detik

    return () => clearInterval(interval); // bersihkan interval saat unmount
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "1px",
        textAlign: "center",
      }}>
      <p>Jam: {currentTime.toLocaleTimeString()}</p>
      <p>Status: {isOpen ? "🟢 Buka" : "🔴 Tutup"}</p>
      <p>&copy; {currentYear} React App. All rights reserved.</p>
      {/* {isOpen && <p>Kami buka dari jam 9 pagi sampai 5 malam</p>} */}
    </footer>
  );
}

export default Footer;
