import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFutbol, FaUniversity, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

const Portfolio = () => {

  // --- AQUÍ AGREGAS TUS PROYECTOS FÁCILMENTE ---
  const projects = [
    {
      id: 1,
      title: "Liga de Fútbol Otumba",
      category: "App Web / Gestión Deportiva",
      description: "Sistema integral para automatizar roles de juego, tablas de posiciones y estadísticas en tiempo real. Panel de administración incluido.",
      url: "https://liga-futbol-otumba.netlify.app",
      icon: <FaFutbol size={24} color="#D4AF37" />
    },
    {
      id: 2,
      title: "INJUFO",
      category: "Sitio Institucional / Educativo",
      description: "Portal web oficial institucional. Optimizado para mostrar oferta educativa, noticias y canal de contacto directo para alumnos.",
      url: "https://injufo.edu.mx",
      icon: <FaUniversity size={24} color="#D4AF37" />
    }
    // ¿Hiciste otro? Solo copia y pega otro bloque aquí { ... },
  ];

  return (
    <div className="container">
        
        {/* Botón de regreso */}
        <div style={{width: '100%', marginBottom: '20px', textAlign: 'left'}}>
            <Link to="/" style={{color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'}}>
                <FaArrowLeft /> Volver al inicio
            </Link>
        </div>

        {/* Título */}
        <h1 className="name" style={{fontSize: '2rem'}}>Mi Portafolio</h1>
        <div className="underline"></div>
        
        <p style={{color: '#ccc', marginBottom: '30px'}}>
            Una selección de proyectos desarrollados para solucionar problemas reales.
        </p>

        {/* Grid de Proyectos (Mapeo dinámico) */}
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            
            {projects.map((project) => (
                <div key={project.id} style={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '12px',
                    padding: '25px',
                    textAlign: 'left',
                    transition: 'transform 0.2s ease',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                    {/* Encabezado de la tarjeta */}
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px'}}>
                        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                            {/* Icono con fondo circular sutil */}
                            <div style={{background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '50%'}}>
                                {project.icon}
                            </div>
                            <div>
                                <h3 style={{color: 'white', margin: 0, fontSize: '1.2rem'}}>{project.title}</h3>
                                <span style={{color: '#D4AF37', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase'}}>
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Descripción */}
                    <p style={{color: '#bbb', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px'}}>
                        {project.description}
                    </p>

                    {/* Botón de enlace */}
                    <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-btn" // Reusamos tu clase de botón existente
                        style={{
                            padding: '12px 20px', 
                            fontSize: '0.9rem', 
                            display: 'inline-flex', 
                            width: 'auto',
                            gap: '8px',
                            background: 'transparent',
                            border: '1px solid #D4AF37',
                            color: '#D4AF37'
                        }}
                    >
                        Visitar Sitio Web <FaExternalLinkAlt size={14}/>
                    </a>
                </div>
            ))}

        </div>

        <Footer />
    </div>
  );
};

export default Portfolio;