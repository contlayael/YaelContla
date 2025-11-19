import { Link } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaRobot, FaBolt, FaCode } from 'react-icons/fa'; // Nuevos iconos
import Footer from '../components/Footer';

const Course = () => {
  // Mensaje para la lista de espera
  const mensaje = "Hola Yael, quiero unirme a la Lista de Espera del curso 'Web con IA' para recibir el descuento de lanzamiento.";
  const whatsappUrl = `https://wa.me/525638746771?text=${encodeURIComponent(mensaje)}`; // ¡CAMBIA TU NÚMERO AQUÍ!

  return (
    <div className="container">
        {/* Botón Volver */}
        <div style={{width: '100%', marginBottom: '20px', textAlign: 'left'}}>
            <Link to="/" style={{color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'}}>
                <FaArrowLeft /> Volver al inicio
            </Link>
        </div>

        {/* Título */}
        <h1 className="name" style={{fontSize: '2rem'}}>Crea tu Web con IA</h1>
        <div className="underline"></div>

        {/* Aviso de Próximamente */}
        <div style={{
            backgroundColor: 'rgba(212, 175, 55, 0.1)', 
            border: '1px solid #D4AF37', 
            color: '#D4AF37', 
            padding: '10px', 
            borderRadius: '50px',
            display: 'inline-block',
            marginBottom: '20px',
            fontSize: '0.9rem',
            fontWeight: 'bold'
        }}>
            🚀 PRÓXIMAMENTE - EN CONSTRUCCIÓN
        </div>

        {/* Copywriting */}
        <div style={{textAlign: 'left', marginBottom: '30px'}}>
            <p style={{color: 'white', fontSize: '1.2rem', marginBottom: '15px', lineHeight: '1.5'}}>
                Aprende a programar 10x más rápido usando Inteligencia Artificial como tu copiloto.
            </p>
            <p style={{color: '#ccc', marginBottom: '20px'}}>
                Estoy preparando un curso práctico donde pasaremos de cero a tener tu sitio web publicado, sin teorías aburridas y usando herramientas modernas.
            </p>

            {/* Lo que aprenderán (Puntos clave) */}
            <div style={{display: 'grid', gap: '15px', marginBottom: '30px'}}>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center', background: '#1a1a1a', padding: '15px', borderRadius: '8px'}}>
                    <FaCode style={{color: '#D4AF37', fontSize: '1.5rem'}} />
                    <span style={{color: 'white', textAlign: 'left'}}>Bases sólidas de HTML, CSS y React.</span>
                </div>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center', background: '#1a1a1a', padding: '15px', borderRadius: '8px'}}>
                    <FaRobot style={{color: '#D4AF37', fontSize: '1.5rem'}} />
                    <span style={{color: 'white', textAlign: 'left'}}>Dominar la IA para escribir código por ti.</span>
                </div>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center', background: '#1a1a1a', padding: '15px', borderRadius: '8px'}}>
                    <FaBolt style={{color: '#D4AF37', fontSize: '1.5rem'}} />
                    <span style={{color: 'white', textAlign: 'left'}}>Publicar tu sitio en internet en minutos.</span>
                </div>
            </div>
        </div>

        {/* CTA Lista de Espera */}
        <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
            border: '1px solid #333',
            padding: '30px 20px',
            borderRadius: '12px',
            width: '100%'
        }}>
            <h3 style={{color: 'white', marginBottom: '10px'}}>¿Te interesa?</h3>
            <p style={{color: '#888', marginBottom: '20px', fontSize: '0.9rem'}}>
                Únete a la <strong>Lista de Espera</strong>. Te avisaré en cuanto lancemos y recibirás un <strong>descuento exclusivo</strong> por ser de los primeros.
            </p>
            
            <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-btn highlight-btn"
                style={{justifyContent: 'center', gap: '10px'}}
            >
                <FaWhatsapp style={{fontSize: '1.5rem'}} />
                <span>Unirme a la Lista de Espera</span>
            </a>
        </div>

        <Footer />
    </div>
  );
};

export default Course;