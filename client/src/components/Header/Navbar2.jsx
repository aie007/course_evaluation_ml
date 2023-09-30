import { useState } from 'react'
import  styles from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <Link to='/' className={`${styles.logo}`}>LOGO</Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/about' className={`${styles.navLink}`}>About</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/courses' className={`${styles.navLink}`}>Courses</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/signin' className={`${styles.navLink}`}>Sign In</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar2;