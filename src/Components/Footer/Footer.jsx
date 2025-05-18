import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-left">
                <p>© 2025 Jayveer Kumar. All rights reserved.</p>
            </div>
            <div className="footer-right">
                <a href="https://www.linkedin.com/in/jayveer-kumar-766a83252" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Jayveer-kumar" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/jasan_0987/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
}
