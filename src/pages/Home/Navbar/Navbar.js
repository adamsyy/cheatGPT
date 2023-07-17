import React from "react";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

const Navbar = () => {
  const handleContributeClick = () => {
    window.open("https://www.buymeacoffee.com/adamsyyy", "_blank");
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.navItems}>
        <div className={styles.navItem} onClick={handleContributeClick}>
          Contribute
        </div>
      </div>
    </div>
  );
};

export default Navbar;
