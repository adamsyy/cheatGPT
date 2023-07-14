import React from 'react';
import styles from './Navbar.module.css';
import logo from './logo.png';

const Navbar = () => {
  const handleContributeClick = () => {
    window.open('https://www.buymeacoffee.com/adamsyyy', '_blank');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem} onClick={handleContributeClick}>
          Contribute
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
