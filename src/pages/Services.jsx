import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'; // Agregamos FaCheckCircle
import Footer from '../components/Footer';

const Services = () => {
  // Mensaje predefinido para WhatsApp (codificado para URL)
  const mensaje = "Hola Yael, vi tu portafolio y tengo una idea para un sitio web. Me gustaría cotizar...";
  const whatsappUrl = `https://wa.me/525638746771?text=${encodeURIComponent(mensaje)}`; // ¡CAMBIA EL NÚMERO AQUÍ!

  return (
    <div className="container">
        {/* Navegación de regreso */}
        <div style={{width: '100%', marginBottom: '20px', textAlign: 'left'}}>
            <Link to="/" style={{color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'}}>
                <FaArrowLeft /> Volver al inicio
            </Link>
        </div>

        {/* Título Principal */}
        <h1 className="name" style={{fontSize: '2rem'}}>Desarrollo A Medida</h1>
        <div className="underline"></div>
        
        {/* Texto Persuasivo (Copywriting) */}
        <div style={{textAlign: 'left', marginBottom: '30px'}}>
            <p style={{color: 'white', marginBottom: '15px', fontSize: '1.1rem', lineHeight: '1.6'}}>
                Tu negocio es único, tu sitio web también debería serlo. 
            </p>
            <p style={{color: '#ccc', marginBottom: '20px', lineHeight: '1.5'}}>
                No te ofrezco una plantilla genérica que todos tienen. Desarrollo <strong>soluciones digitales funcionales</strong> pensadas para resolver los problemas reales de tu operación (como inventarios, gestión de torneos, reservas o catálogos).
            </p>
            
            {/* Lista de Beneficios */}
            <ul style={{listStyle: 'none', padding: 0, color: '#fff'}}>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <FaCheckCircle style={{color: '#D4AF37'}} /> 100% Adaptado a tus necesidades.
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <FaCheckCircle style={{color: '#D4AF37'}} /> Autogestionable (tú tienes el control).
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <FaCheckCircle style={{color: '#D4AF37'}} /> Diseño moderno y optimizado.
                </li>
            </ul>
        </div>

        {/* Tarjeta de Llamada a la Acción (CTA) */}
        <div style={{
            border: '1px solid #D4AF37', 
            background: 'linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(15,15,15,1) 100%)',
            padding: '30px 20px', 
            borderRadius: '12px',
            width: '100%',
            boxShadow: '0 4px 20px rgba(212, 175, 55, 0.15)' // Sutil brillo dorado
        }}>
            <p style={{color: '#D4AF37', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>
                ¿Tienes una idea en mente?
            </p>
            <h3 style={{color: 'white', marginBottom: '20px', fontSize: '1.3rem'}}>
                Hagamos realidad esa idea hoy mismo.
            </h3>

            <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="link-btn highlight-btn" // Reusamos tus estilos de botón
                style={{justifyContent: 'center', gap: '10px'}}
            >
                <FaWhatsapp style={{fontSize: '1.5rem'}} />
                <span style={{fontSize: '1.1rem'}}>Contactar por WhatsApp</span>
            </a>
            
            <p style={{color: '#666', fontSize: '0.8rem', marginTop: '15px'}}>
                Sin compromisos. Cuéntame tu proyecto y vemos cómo hacerlo funcionar.
            </p>
        </div>

        <Footer />
    </div>
  );
};

export default Services;