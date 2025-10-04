import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const QuoteForm = () => {
  

  return (
   <div className="bg-[#101c22] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Título de la CTA */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            ¿Listo para realizar <span className="text-blue-600">tu proyecto con nosotros?</span>
          </h2>
          
          {/* Descripción */}
          <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-gray-100">
            Contáctanos hoy mismo y descubre por qué somos la mejor opción en la construcción de estructuras metálicas en el Perú.
          </p>
          
          {/* Contenedor de Botones */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            
            {/* Botón Principal (Blanco Sólido - Destaca sobre el fondo oscuro) */}
            <Link
              to="/contact-page" // Enlace a tu formulario de cotización
              className="rounded-lg bg-[#e5c524] px-8 py-3 text-lg font-semibold text-black shadow-lg transition duration-200 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Solicitar Cotización
            </Link>
            
            {/* Botón Secundario (Outline o Color del Título) */}
            <Link
              to="/services-detail" // Enlace a tus servicios
              className="rounded-lg border-2 border-[#e5c524] px-8 py-3 text-lg font-semibold leading-6 text-[#e5c524] transition duration-200 hover:bg-white hover:text-black"
            >
              Ver Servicios
            </Link>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default QuoteForm;