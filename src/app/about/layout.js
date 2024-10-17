'use client'
import React, { useState } from "react";
import "./Layout.css";
import Link from "next/link";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>Brand About Navbar</h2>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link href="/about">About Main</Link></li>
          <li><Link href="/about/aboutColleg">About Colleg</Link></li>
          <li><Link href="/about/aboutStudent">About Student</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
