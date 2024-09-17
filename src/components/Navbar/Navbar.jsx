import React, {useState} from "react";
import styles from "./Navbar.module.css";
/*import {getImageUrl} from "../../utils";
import menuIcon from "../../../assets/nav/menuIcon.png"
import closeIcon from "../../../assets/nav/closeIcon.png"*/

export const Navbar = () => {
  /*const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);*/

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
      </div>
    </nav>
  );
};
