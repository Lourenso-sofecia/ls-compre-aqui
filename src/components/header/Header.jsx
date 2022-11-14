import React from 'react';
import { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import LogoCompreAqui from '../../assets/logo/LogoCompreAqui.png';

const logo = (
  <div className = {styles.logo}>
    <Link to = "/">
      <img src = {LogoCompreAqui} alt = "LogoTipo Compre Aqui" className = {styles.logoDimensao}/>            
    </Link>
  </div>
);

const cart = (
  <span className = {styles.cart}>
    <Link to = "/cart">
      Cart
      <FaShoppingCart size = {20}/>
      <p>0</p>
    </Link>
  </span>
);


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const controllLogo = () => {
    setShowLogo(!showLogo);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className = {styles.header}>
        {logo}
        <nav 
          className = {
            showMenu ? `${styles["show-nav"]}` : 
            `${styles["hide-nav"]}`
            }
          >
          <div 
            className = {
              showMenu 
                ? `${styles ["nav-wrapper"]} 
                ${styles["show-nav-wrapper"]}` 
                : `${styles["nav-wrapper"]}`
            }
            onClick = {hideMenu}
          >
          </div>
          <ul onClick={hideMenu}>
            <li className={ styles["logo-mobile"]}>
              {logo}
              {hideMenu}
            </li>
            <li>
              <Link to = "/">
                Home
              </Link>
            </li>
            <li>
              <Link to = "/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className = {styles["header-right"]} onClick={hideMenu}>
            <span className = {styles.links}>
              <Link to = "/login">Login</Link>
              <Link to = "/register">Register</Link>
              <Link to = "/order-history">My Orders</Link>
            </span>
            {cart}
          </div>
        </nav>
        <div className = {styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size = {28} onClick = {toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;