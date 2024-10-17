'use client'

// conditional navbar 

import React from "react";
import "./Layout.css";
import Link from "next/link";
 import { usePathname } from "next/navigation";


const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log('pathName>>>',pathName)

  return (
    <div>
      {pathName !== "/login/loginTeacher" ? 
    <nav className="navbar">
    <div className="logo">
      <h2>Brand Login Navbar</h2>
    </div>
    <ul className='nav-links'>
      <li><Link href="/login">Login Main</Link></li>
      <li><Link href="/login/loginStudent">Student Login</Link></li>
      <li><Link href="/login/loginTeacher">Teacher Login</Link></li>
    </ul>
  </nav>: null  
    }
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
