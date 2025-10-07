import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Simpan status login di localStorage supaya tetap login setelah refresh
  //   const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //     const saved = localStorage.getItem("isLoggedIn");
  //     return saved === "true"; // konversi string ke boolean
  //   });

  //   // Fungsi login (simulasi)
  //   const login = () => {
  //     setIsLoggedIn(true);
  //     localStorage.setItem("isLoggedIn", "true");
  //   };

  //   // Fungsi logout
  //   const logout = () => {
  //     setIsLoggedIn(false);
  //     localStorage.removeItem("isLoggedIn");
  //   };

  //   return (
  //     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
  //       {children}
  //     </AuthContext.Provider>
  //   );
  const [user, setUser] = useState(null);

  const dummy_email = "user@gmail.com";
  const dummy_password = "123456";

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    if (email !== dummy_email) {
      return { success: false, message: "Email tidak terdaftar!" };
    } else if (password !== dummy_password) {
      return { success: false, message: "Password salah!" };
    } else {
      setUser({ email });
      return { success: true };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk akses Auth di komponen lain
export const useAuth = () => useContext(AuthContext);
