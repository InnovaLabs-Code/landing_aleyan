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

// Array de logos movido fuera del componente
const clientLogos = [
  { src: logo1, alt: "Empresa A" },
  { src: logo2, alt: "Empresa B" },
  { src: logo3, alt: "Empresa C" },
  { src: logo4, alt: "Empresa D" },
  { src: logo5, alt: "Empresa E" },
  { src: logo6, alt: "Empresa F" },
  { src: logo7, alt: "Empresa G" },
  { src: logo8, alt: "Empresa H" },
  { src: logo9, alt: "Empresa I" },
  { src: logo10, alt: "Empresa J" },
  // Duplicar los logos para el efecto de bucle infinito
  { src: logo1, alt: "Empresa A" },
  { src: logo2, alt: "Empresa B" },
  { src: logo3, alt: "Empresa C" },
  { src: logo4, alt: "Empresa D" },
  { src: logo5, alt: "Empresa E" },
  { src: logo6, alt: "Empresa F" },
  { src: logo7, alt: "Empresa G" },
  { src: logo8, alt: "Empresa H" },
  { src: logo9, alt: "Empresa I" },
  { src: logo10, alt: "Empresa J" },
];

// Component no longer needed - using inline structure
// const ClientLogo = ({ src, alt }) => (
//   <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center p-4">
//     <img 
//       src={src} 
//       alt={alt} 
//       className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
//     />
//   </div>
// );

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
          Nuestros <span className="text-blue-600">Socios Estratégicos</span>
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