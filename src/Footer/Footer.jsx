import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Facundo - All rights reserved.</p>
      <div>
        <a href="https://twitter.com/home">Twitter</a>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.facebook.com/">Facebook</a>      </div>
    </footer>
  );
};

export default Footer;
