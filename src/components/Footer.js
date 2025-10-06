import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoaleyan2.webp'; 

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna 1: Logo y Descripción */}
        <div className="flex flex-col md:text-left">
          
          <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo Constructora Aleyan SAC" width={170} 
    height={46} className="h-10 w-auto" />
            </Link>
          
          <p className="text-sm leading-relaxed mb-6 py-2 text-gray-400">
            Somos una empresa líder especializada en el diseño, fabricación y montaje de estructuras metálicas robustas y de alta calidad. 
          </p>
          <div className="flex md:justify-start space-x-4">
            {/* Íconos de redes sociales */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" // CLAVE: El lector de pantalla leerá esto
  aria-label="Perfil de LinkedIn de Constructora Aleyan">
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a> */}
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a> */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" // CLAVE: El lector de pantalla leerá esto
  aria-label="Página de Facebook de Constructora Aleyan">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Columna 2: Oficina */}
        <div className="pt-1">
          <h2 className="text-lg font-semibold text-white mb-2">Oficina</h2>
          <p className="flex items-center gap-2 text-sm leading-relaxed mb-4 text-gray-400">
            <MapPin className="w-4 h-4 text-gray-400" />
            Condominio Residencial Valle Alto, Oficina G201, Puente Piedra
          </p>
          <h2 className="text-lg font-semibold text-white mb-2">Taller</h2>
          <p className="flex items-center gap-2 text-sm leading-relaxed mb-4 text-gray-400">
            <MapPin className="w-4 h-4 text-gray-400" />
            Jr. La Honestidad 8086 Urb. Residencial Los Olivos, Lima, Perú.
          </p>
        </div>

        {/* Columna 3: Sobre Nosotros */}
        <div className="pt-1">
          <h2 className="text-lg font-semibold text-white mb-2">Enlaces Rápidos</h2>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors duration-300">Inicio</Link></li>
            <li><Link to="/about-detail" className="hover:text-white transition-colors duration-300">Nosotros</Link></li>
            <li><Link to="/services-detail" className="hover:text-white transition-colors duration-300">Servicios</Link></li>
            <li><Link to="/projects-detail" className="hover:text-white transition-colors duration-300">Proyectos</Link></li>
            <li><Link to="/contact-page" className="hover:text-white transition-colors duration-300">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="pt-1">
          <h2 className="text-lG font-semibold text-white mb-2">Contacto</h2>
          <ul className="space-y-1 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-300" />
              <a href="mailto:gerencia@aleyansac.com" className="hover:text-white transition-colors duration-300">gerencia@aleyansac.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-300" />
              <a href="tel:+51932926758" className="hover:text-white transition-colors duration-300">+51 932 926 758</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-6 pt-5 text-center text-white text-sm">
        <p>&copy; {new Date().getFullYear()} Constructora Aleyan SAC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;