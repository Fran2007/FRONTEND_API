import React from "react";
import styles from "./Productlist.module.css";

const Productlist = ({ products }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles["product-title"]}>Productos</h2>
      <ul className={styles.list}>
        {products.map((product, index) => (
          <li key={index} className={styles.listItem}>
            <h3>{product.name}</h3>
            <p className={styles.price}>Precio: $ {product.price}.00</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;
