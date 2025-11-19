import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFutbol } from 'react-icons/fa';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="container">
        <div style={{width: '100%', marginBottom: '20px', textAlign: 'left'}}>
            <Link to="/" style={{color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'}}>
                <FaArrowLeft /> Volver al inicio
            </Link>
        </div>

        <h1 className="name" style={{fontSize: '2rem'}}>Mi Portafolio</h1>
        <div className="underline"></div>

        <div className="link-btn" style={{flexDirection: 'column', gap: '10px', alignItems: 'flex-start', marginTop: '20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <FaFutbol style={{color: '#D4AF37', fontSize: '1.5rem'}}/>
                <h3 style={{color: '#D4AF37', margin: 0}}>Liga de Fútbol Otumba</h3>
            </div>
            <p style={{fontSize: '0.9rem', textAlign: 'left', color: '#ccc'}}>
                Sistema integral de gestión deportiva: roles, tablas y estadísticas en tiempo real.
            </p>
            <a href="https://liga-futbol-otumba.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'underline', fontSize: '0.9rem'}}>
                Ver proyecto en vivo →
            </a>
        </div>

        <Footer />
    </div>
  );
};

export default Portfolio;