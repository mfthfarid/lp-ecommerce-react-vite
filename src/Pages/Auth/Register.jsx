import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Auth.module.css";

export default function RegisterForm({ onSwitchToLogin }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [focusedField, setFocusedField] = useState("");
  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register data:", data);
    alert("Registrasi berhasil! Check console untuk data.");
    // Di sini Anda bisa menambahkan logic untuk API call
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Buat Akun Baru</h1>
        <p className={styles.subtitle}>Daftar untuk memulai</p>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Lengkap</label>
            <input
              type="text"
              className={`${styles.input} ${
                focusedField === "name" ? styles.inputFocus : ""
              } ${errors.name ? styles.inputError : ""}`}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
              {...register("name", {
                required: "Nama wajib diisi",
                minLength: {
                  value: 3,
                  message: "Nama minimal 3 karakter",
                },
              })}
              placeholder="John Doe"
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>

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

          <div className={styles.formGroup}>
            <label className={styles.label}>Konfirmasi Password</label>
            <input
              type="password"
              className={`${styles.input} ${
                focusedField === "confirmPassword" ? styles.inputFocus : ""
              } ${errors.confirmPassword ? styles.inputError : ""}`}
              onFocus={() => setFocusedField("confirmPassword")}
              onBlur={() => setFocusedField("")}
              {...register("confirmPassword", {
                required: "Konfirmasi password wajib diisi",
                validate: (value) =>
                  value === password || "Password tidak cocok",
              })}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <span className={styles.error}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className={styles.button}>
            Daftar
          </button>
        </div>

        <p className={styles.switchText}>
          Sudah punya akun?{" "}
          <span className={styles.link} onClick={onSwitchToLogin}>
            Masuk di sini
          </span>
        </p>
      </div>
    </div>
  );
}
