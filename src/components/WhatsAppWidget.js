import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 
// IMPORTACIONES DE FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 


// --- Configuración ---
const CONTACT_INFO = {
  phoneNumber: "51932926758", // Reemplaza con tu número
  salesMessage: "Hola, solicito información sobre sus servicios de construcción de estructuras metálicas.",
};

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Genera la URL para el chat
  const generateChatUrl = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONTACT_INFO.phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <>
      {/* Botón Flotante (Control de Abrir/Cerrar) */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`
          p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center 
          ${isOpen ? 'bg-white border border-gray-200 hover:scale-100' : 'bg-[#25D366] text-white hover:scale-110'}
        `}>
          {/* ÍCONO PRINCIPAL MODIFICADO */}
          {isOpen ? (
            <X className="w-8 h-8 text-[#25D366]" />
          ) : (
            // Uso de FontAwesomeIcon para el botón principal (Tamaño grande '2x')
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          )}
        </div>
        
        {/* Texto "Chatea con nosotros" con el estilo de "nube" */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bottom-5 text-gray-700 font-semibold hidden md:block 
            bg-white px-4 py-2 rounded-lg shadow-md whitespace-nowrap"
          >
            Chatea con nosotros
          </span>
        )}
      </div>

      {/* Pop-up o Ventana de Conversación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 rounded-xl bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Cabecera Verde */}
            <div className="bg-[#25D366] text-white p-5">
              <div className="flex items-center mb-2">
                {/* ÍCONO DE CABECERA MODIFICADO (Tamaño 'lg') */}
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="mr-3" />
                <h3 className="text-xl font-bold">Empezar una conversación</h3>
              </div>
              <p className="text-sm">
                ¡Hola! Haga clic a continuación para chatear en WhatsApp.
              </p>
            </div>
            
            {/* Cuerpo del Widget */}
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-3">
                El equipo responde en unos minutos
              </p>
              
              {/* Opción de Chat - Botón de Acción */}
              <a
                href={generateChatUrl(CONTACT_INFO.salesMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border-l-4 border-[#25D366] bg-gray-50 rounded-md transition duration-200 hover:bg-gray-100"
              >
                <div className="flex-shrink-0">
                    {/* ÍCONO DE VENTA MODIFICADO (Tamaño '2x', con color de Font Awesome) */}
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-[#25D366] mr-4" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">Asistente</h4>
                    <p className="text-sm text-gray-600">Hola, solicito información sobre sus servicios de construcción de estructuras metálicas.</p>
                </div>
                <div className="ml-auto text-gray-400">
                    {/* ÍCONO FINAL MODIFICADO (Tamaño 'lg') */}
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;