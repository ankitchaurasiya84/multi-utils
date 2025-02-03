import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-logo"><Link  style ={ {color:"white", textDecoration:"none"}}to="/">Multi Utils</Link></h1>
          <ul className="navbar-links">
            <li><Link to="/text-util">Text Utils</Link></li>
            <li><Link to="/dummy-files">Dummy Files</Link></li>
            <li><Link to="/word-cloud">Word Cloud</Link></li>
            <li><Link to="/QRcode-genrator">QRcode Generate</Link></li>
            <li><Link to="/Base64Converter">Base64 Converter</Link></li>
            <li><Link to="/Json-formatter">JSON Formatter</Link></li>
          </ul>
        </div>
      </nav>
    );
  };

export default NavBar;
