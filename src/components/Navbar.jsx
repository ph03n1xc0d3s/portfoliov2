import React from "react";
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="name__logo">
        <h3 className="name">Vaibhav Maini</h3>
      </div>
      <div className="link-list">
        <ul className="ul--list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
