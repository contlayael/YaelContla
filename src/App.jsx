import React from 'react';
import './App.css';
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok, FaWhatsapp, FaLaptopCode, FaTshirt, FaFutbol, FaPlane } from 'react-icons/fa';
import { HiOutlineAcademicCap } from "react-icons/hi";
import perfilImg from '../src/assets/perfil.png';

function App() {

  // AQUÍ CONFIGURAS TUS ENLACES
  const links = [
    {
      id: 1,
      title: "Catálogo de productos",
      icon: <FaTshirt />,
      url: "https://tutienda.com", // Pon aquí tu link real
    },
    {
      id: 2,
      title: "Desarrollo web a tu medida",
      icon: <FaLaptopCode />,
      url: "https://tuservicio.com", 
    },
    {
      id: 3,
      title: "Curso: Crea tu Web con IA",
      icon: <HiOutlineAcademicCap />,
      url: "https://tucurso.com", 
      highlight: true // Un toque especial para resaltar este botón
    },
    {
      id: 4,
      title: "Portafolio: Aplicaciones",
      icon: <FaFutbol />,
      url: "https://ligadeotumba.com", 
    },
    {
      id: 5,
      title: "Shopping USA [Grupo VIP]",
      icon: <FaWhatsapp />,
      url: "https://chat.whatsapp.com/TU_ENLACE_DEL_GRUPO", // Link del grupo de WA
    }
  ];

  

  return (
    <div className="container">
      
      {/* CABECERA */}
      <header className="profile-header">
        <div className="image-container">
          <img src={perfilImg} alt="Yael Contla" className="profile-pic" />
        </div>
        
        <h1 className="name">Yael Contla</h1>
        <div className="underline"></div>
        
        <p className="slogan">Emprende e impulsa tu negocio</p>
      </header>

      {/* BOTONES */}
      <main className="links-container">
        {links.map((link) => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`link-btn ${link.highlight ? 'highlight-btn' : ''}`}
          >
            <span className="icon">{link.icon}</span>
            <span className="text">{link.title}</span>
          </a>
        ))}
      </main>

      {/* FOOTER / REDES */}
      <footer className="social-footer">
        <p className="footer-text">Aquí resolvemos tus dudas</p>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTiktok /></a>
        </div>
        <p className="copyright">© Yael Contla {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}

export default App;