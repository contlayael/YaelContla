import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Services = () => {
  return (
    <div className="container">
        <div style={{width: '100%', marginBottom: '20px', textAlign: 'left'}}>
            <Link to="/" style={{color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'}}>
                <FaArrowLeft /> Volver al inicio
            </Link>
        </div>

        <h1 className="name" style={{fontSize: '2rem'}}>Desarrollo Web</h1>
        <div className="underline"></div>
        
        <p style={{color: 'white', marginBottom: '20px'}}>
            Transformamos tus ideas en sitios web funcionales y a la medida.
        </p>

        {/* Aquí pondremos el contenido de venta más adelante */}
        <div style={{border: '1px dashed #D4AF37', padding: '40px', color: '#888', borderRadius: '8px'}}>
            🚧 Próximamente: Tu Landing Page de Servicios 🚧
        </div>

        <Footer />
    </div>
  );
};

export default Services;