import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="social-footer">
      <p className="footer-text">Aquí resolvemos tus dudas</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/yaelcontla?igsh=MWhzN3ZveGhjdWNoNw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com/@yaelcontla?si=WTlSE6Aaops7VAc2" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.facebook.com/share/14NsYtDT5V9/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.tiktok.com/@yaelcontla15?_r=1&_t=ZS-91VyltuoLah" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>
      <p className="copyright">© Yael Contla {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;