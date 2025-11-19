import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import './App.css';

// Componente auxiliar para que al cambiar de página siempre inicie arriba
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Ruta Principal (Tu Link Hub) */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas Internas */}
        <Route path="/servicios" element={<Services />} />
        <Route path="/portafolio" element={<Portfolio />} />
        
        {/* Ruta por defecto (Si ponen una url rara, regresan al home) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;