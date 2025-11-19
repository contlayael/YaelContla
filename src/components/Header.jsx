import React from 'react';
import perfilImg from '../assets/perfil.png'; // Ajusta la ruta si es necesario
import '../App.css';

const Header = () => {
  return (
    <header className="profile-header">
      <div className="image-container">
        <img src={perfilImg} alt="Yael Contla" className="profile-pic" />
      </div>
      
      <h1 className="name">Yael Contla</h1>
      <div className="underline"></div>
      
      <p className="slogan">Emprende e impulsa tu negocio</p>
    </header>
  );
};

export default Header;