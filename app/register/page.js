"use client";
import React from "react";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/Register", {
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
        localStorage("token", data.token);
        console.log(data.token);
        console.log("Redirecionado a la ruta....");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    fetchAutenticacion();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          placeholder="last name"
        />
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          placeholder="Password"
        />
      </form>
      <button onClick={handleChange}>Add user</button>
    </main>
  );
}
