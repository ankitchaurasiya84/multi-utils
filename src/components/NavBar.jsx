import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 
import DigitalTime from '../components/DigitalTime.jsx';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1 className="navbar-logo"><Link  style ={ {color:"white", textDecoration:"none"}}to="/">Multi Utils</Link></h1>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/text-util">Text Utils</Link></li>
                    <li><Link to="/dummy-files">Dummy Files</Link></li>
                    <li><Link to="/word-cloud">Word Cloud</Link></li>
                    <li><Link to="/QRcode-genrator">QRcode Generate</Link></li>
                    <li><Link to="/Base64Converter">Base64 Converter</Link></li>
                    <li><Link to="/url-shortner">URL Shortner</Link></li>
                    <li><Link to="/password-generator">Password Generator</Link></li>
                    <li><Link to="/pdf-locker">Lock PDF</Link></li>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div style={{ fontWeight:"700"}} > <DigitalTime/></div>
        </nav>
    );
};

export default NavBar;
