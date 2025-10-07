import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import styles from "./Auth.module.css";
import Toast from "@/components/Toast";

export default function LoginForm({ onSwitchToRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [focusedField, setFocusedField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth(); // ✅ ambil fungsi login dari AuthContext
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil path asal, misal dari ProtectedRoute
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    setErrorMessage("");
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = login(data.email, data.password);
    setIsLoading(false);

    if (result.success) {
      toast.success("✅ Login berhasil!", { autoClose: 2000 });
      setTimeout(() => navigate(from, { replace: true }), 2000);
    } else {
      toast.error(result.message || "❌ Email atau password salah", {
        autoClose: 2500,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Selamat Datang</h1>
        <p className={styles.subtitle}>Masuk ke akun Anda</p>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={`${styles.input} ${
                focusedField === "email" ? styles.inputFocus : ""
              } ${errors.email ? styles.inputError : ""}`}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid",
                },
              })}
              placeholder="nama@email.com"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={`${styles.input} ${
                focusedField === "password" ? styles.inputFocus : ""
              } ${errors.password ? styles.inputError : ""}`}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField("")}
              {...register("password", {
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password minimal 6 karakter",
                },
              })}
              placeholder="••••••••"
            />
            {errors.password && (
              <span className={styles.error}>{errors.password.message}</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className={styles.button}>
            {isLoading ? "Memeriksa..." : "Masuk"}
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className={styles.switchText}>
          Belum punya akun?{" "}
          <span className={styles.link} onClick={onSwitchToRegister}>
            Daftar sekarang
          </span>
        </p>
      </div>
    </div>
  );
}
