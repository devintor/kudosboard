
import React from 'react';
import './Header.css';
import img from "../../assets/kudevsboard_logo.png";


const Header = () => {
  return (
    <header className="banner">
    <img src={img} alt="Kudoboard Logo" />
    </header>
  );
};

export default Header;