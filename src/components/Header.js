import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoaleyan.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.header
      className="bg-[#BCBCBC] backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 bg-opacity-60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", 
        ease: "easeOut", 
        duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        {/* Layout para móvil: flex con justify-between */}
        <div className="flex md:hidden items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo Constructora Aleyan SAC" className="h-10 w-auto" />
          </Link>
          <button 
            onClick={toggleMenu} 
            className="text-white hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Layout para desktop: grid de 3 columnas */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center">
          {/* Logo - Columna izquierda */}
          <div className="flex items-center gap-3 justify-self-start">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo Constructora Aleyan SAC" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Menú - Columna central (centrado) */}
          <ul className="flex space-x-8 justify-self-center">
            <li>
              <Link to="/" className="text-white hover:text-blue-600 font-medium text-lg transition-colors duration-300">Inicio</Link>
            </li>
            
            <li>
              <Link to="/about-detail" className="text-white hover:text-blue-600 font-medium text-lg transition-colors duration-300">Nosotros</Link>
            </li>

            <li>
              <Link to="/services-detail" className="text-white hover:text-blue-600 font-medium text-lg transition-colors duration-300">Servicios</Link>
            </li>
            
            <li>
              <Link to="/projects-detail" className="text-white hover:text-blue-600 font-medium text-lg transition-colors duration-300">Proyectos</Link>
            </li>

            {/* <li>
              <Link to="/clients-detail" className="text-white hover:text-blue-600 font-medium text-lg transition-colors duration-300">Clientes</Link>
            </li> */}
          </ul>

          {/* Botón de contacto - Columna derecha */}
          <div className="flex items-center justify-self-end">
            <Link
              to="/contact-page"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 pb-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Contáctanos'].map((item, index) => {
                // Mapeo de rutas para que coincidan con tus rutas definidas
                const routeMap = {
                  'Inicio': '/',
                  'Nosotros': '/about-detail',
                  'Servicios': '/services-detail',
                  'Proyectos': '/projects-detail',
                  
                  'Contáctanos': '/contact-page',
                };
                
                return (
                  <motion.li key={item} variants={linkVariants} initial="hidden" animate="visible" custom={index}>
                    <Link
                      to={routeMap[item]}
                      className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;