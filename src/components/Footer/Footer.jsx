import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="gradient-text">Pritesh</span>Jadhav
          </div>
          <div className="footer-socials">
            <a href="https://github.com/Pritesh-Jadhav" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
            <a href="www.linkedin.com/in/pritesh-jadhav-34877736a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              IN
            </a>
            <a href="priteshjadhav400@gmail.com" aria-label="Email">
              EM
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Pritesh Jadhav. All rights reserved.</p>
          <p className="footer-credit">Built with React.js,CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
