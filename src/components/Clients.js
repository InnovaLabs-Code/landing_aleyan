import React from 'react';
import { motion } from 'framer-motion';

// Importa tus imágenes aquí
import logo1 from '../assets/images/client1.png';
import logo2 from '../assets/images/client2.1.webp';
import logo3 from '../assets/images/client3.1.webp';
import logo4 from '../assets/images/client4.png';
import logo5 from '../assets/images/client5.1.webp';
import logo6 from '../assets/images/client6.png';
import logo7 from '../assets/images/client7.png';
import logo8 from '../assets/images/client8.png';
import logo9 from '../assets/images/client9.jpeg';
import logo10 from '../assets/images/client10.svg';
import logo11 from '../assets/images/client11.jpg';
import logo12 from '../assets/images/client12.jpeg';

// 1. Definimos los clientes y sus dimensiones REALES una sola vez
// NOTA: Reemplaza los valores numéricos (width, height) por el tamaño real de cada archivo imagen
const uniqueClients = [
  { src: logo1, alt: "Empresa A", width: 200, height: 100 },
  { src: logo2, alt: "Empresa B", width: 150, height: 80 },
  { src: logo3, alt: "Empresa C", width: 180, height: 90 },
  { src: logo4, alt: "Empresa D", width: 200, height: 100 },
  { src: logo5, alt: "Empresa E", width: 160, height: 80 },
  { src: logo6, alt: "Empresa F", width: 190, height: 95 },
  { src: logo7, alt: "Empresa G", width: 200, height: 100 },
  { src: logo8, alt: "Empresa H", width: 170, height: 85 },
  { src: logo9, alt: "Empresa I", width: 210, height: 105 },
  { src: logo10, alt: "Empresa J", width: 140, height: 70 },
  { src: logo11, alt: "Empresa K", width: 180, height: 90 },
  { src: logo12, alt: "Empresa L", width: 200, height: 100 },
];

// 2. Generamos el array final duplicado automáticamente para el bucle infinito
const clientLogos = [...uniqueClients, ...uniqueClients];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nuestra <span className="text-blue-600">Cartera de Clientes</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto flex whitespace-nowrap px-4 overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{ x: [0, '-50%'] }}
            transition={{ 
              x: { 
                repeat: Infinity, 
                repeatType: 'loop', 
                duration: 35, 
                ease: 'linear' 
              } 
            }}
          >
            {clientLogos.map((client, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-32 flex items-center justify-center p-4">
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  width={client.width}   // Atributo crítico para CLS
                  height={client.height} // Atributo crítico para CLS
                  className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;