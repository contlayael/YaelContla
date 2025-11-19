import { Link } from 'react-router-dom'; // Importante para navegación interna
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaLaptopCode, FaTshirt, FaFutbol } from 'react-icons/fa';
import { HiOutlineAcademicCap } from "react-icons/hi";

const Home = () => {
  const links = [
    {
      id: 1,
      title: "Catálogo de productos",
      icon: <FaTshirt />,
      url: "https://wa.me/message/CKTR6O3NBP2SN1", 
      isInternal: false
    },
    {
      id: 2,
      title: "Desarrollo web a tu medida",
      icon: <FaLaptopCode />,
      url: "/servicios", // Ruta interna
      isInternal: true
    },
    {
      id: 3,
      title: "Curso: Crea tu Web con IA",
      icon: <HiOutlineAcademicCap />,
      url: "/curso", 
      highlight: true,
      isInternal: false
    },
    {
      id: 4,
      title: "Portafolio: Aplicaciones",
      icon: <FaFutbol />,
      url: "/portafolio", // Ruta interna
      isInternal: true
    },
    /*{
      id: 5,
      title: "Shopping USA [Grupo VIP]",
      icon: <FaWhatsapp />,
      url: "https://chat.whatsapp.com/EiwaXV2LjRE763c5R8FWmP?mode=hqrc", 
      isInternal: false
  }*/
  ];

  return (
    <div className="container">
      <Header />

      <main className="links-container">
        {links.map((link) => (
          link.isInternal ? (
            // Opción A: Navegación Interna (Sin recargar página)
            <Link 
              key={link.id} 
              to={link.url} 
              className={`link-btn ${link.highlight ? 'highlight-btn' : ''}`}
            >
              <span className="icon">{link.icon}</span>
              <span className="text">{link.title}</span>
            </Link>
          ) : (
            // Opción B: Navegación Externa (Pestaña nueva)
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
          )
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Home;