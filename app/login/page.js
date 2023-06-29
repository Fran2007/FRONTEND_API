"use client";
import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchAutenticacion = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `username=${encodeURIComponent(
            username
          )}&password=${encodeURIComponent(password)}`,
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          console.log(data.token);
          console.log("Redireccionando a la ruta de inicio...");
          // Aquí puedes agregar el código para redirigir al usuario a la ruta de inicio de tu aplicación
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAutenticacion();
  };

  return (
    <main className={styles.main_container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form_container}
        method="POST"
      >
        <input
          name="username"
          placeholder="nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
