import React from 'react';
import styles from './Navtop.module.css';

const Navtop = () => {
  return (
    <nav className={styles.navtop}>
      <div className={styles.logo}>
        {/* Logo y nombre de la tienda */}
        <a href="/">Mi Tienda</a>
      </div>
      <ul className={styles.categories}>
        {/* Categorías principales */}
        <li><a href="/categoria1">Categoría 1</a></li>
        <li><a href="/categoria2">Categoría 2</a></li>
        <li><a href="/categoria3">Categoría 3</a></li>
      </ul>
      <div className={styles.search}>
        {/* Barra de búsqueda */}
        <input type="text" placeholder="Buscar productos" />
        <button type="submit">Buscar</button>
      </div>
      <div className={styles.cart}>
        {/* Carrito de compras */}
        <a href="/carrito">
          <span className={styles['cart-icon']}>&#128722;</span>
          <span className={styles['cart-count']}>1</span>
        </a>
      </div>
      <div className={styles.user}>
        {/* Inicio de sesión y registro */}
        <a href="/login">Iniciar sesión</a>
        <a href="/registro">Registrarse</a>
      </div>
    </nav>
  );
};

export default Navtop;
