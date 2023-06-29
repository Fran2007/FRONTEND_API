"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navtop from "@/components/Navtop";
import Productlist from "@/components/Productslist";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <Navtop />
      <Productlist products={products} />
      {console.log(products)}
    </main>
  );
}
