import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Mail, Phone, Clock } from 'lucide-react';
// -> IMPORTACIÓN CLAVE para el SEO
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formMessage, setFormMessage] = useState(null); // Estado para mostrar el mensaje al usuario

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    
    // NOTA: Se reemplaza alert() por un mensaje en el estado de React
    setFormMessage({ type: 'success', text: '¡Gracias! Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.' });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setFormMessage(null), 5000);
  };


  
  return (
    // 1. Abrir el Fragmento de React
    <>
      {/* 2. COMPONENTE HELMET CON METADATOS DE SEO */}
      <Helmet>
          <title>Cotización y Contacto | Constructora Aleyan S.A.C.</title>
          <meta 
              name="description" 
              content="Solicite un presupuesto rápido y sin compromiso para su proyecto de estructuras metálicas. Contacte a nuestro equipo de ingeniería." 
          />
          {/* Reemplaza con tu URL real */}
          <link rel="canonical" href="https://aleyansac.com/contact-page" />
          <link rel="preconnect" href="https://images.unsplash.com" />
      </Helmet>

      {/* 3. Contenedor principal de la página */}
      <section 
        id="cotizar" 
        className="relative py-40 flex items-center bg-cover bg-center overflow-hidden min-h-screen"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1714504904786-b6732390b206?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        {/* Capa borrosa y oscura */}
        <div 
          className="absolute inset-0 z-0 bg-gray-900 bg-opacity-70"
          style={{ backdropFilter: "blur(8px)" }}
        ></div>
      
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Título y lista de características */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // <-- Cambiado a once: true
            transition={{ duration: 0.6 }}
          >
            {/* Título principal de la página (H1) */}
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-white">
              Liderando el camino en construcción de edificios y obras civiles
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-white">
              <span className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="text-white w-4 h-4" /> Personal profesional
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="text-white w-4 h-4" /> 100% Satisfacción
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="text-white w-4 h-4" /> Pruebas precisas
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="text-white w-4 h-4" /> Precios transparentes
              </span>
            </div>
          </motion.div>
      
          {/* Contenedores de formulario y contacto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Formulario de Cotización */}
            <motion.div
              className="bg-[#101c22] text-blue-500 rounded-2xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} // <-- Cambiado a once: true
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">Solicitar un presupuesto</h3>
              <p className="text-sm text-white mb-8">
                El control total sobre los productos nos permite ofrecer a nuestros clientes la mejor calidad en precios y servicios. Estamos muy orgullosos de todo lo que hacemos en Aleyan SAC.
              </p>
              
              {/* Mensaje de confirmación del formulario */}
              {formMessage && (
                  <div className={`p-4 mb-4 text-sm rounded-lg ${formMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`} role="alert">
                      {formMessage.text}
                  </div>
              )}
      
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre Completo"
                    className="bg-white border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-white border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="bg-white border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    required
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-white border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                  >
                    <option value="">Seleccione su servicio</option>
                    <option value="Construcción Residencial">Construcción Residencial</option>
                    <option value="Desarrollo Comercial">Desarrollo Comercial</option>
                    <option value="Proyectos Industriales">Proyectos Industriales</option>
                    <option value="Remodelaciones y Ampliaciones">Remodelaciones y Ampliaciones</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Mensaje Adicional / Detalles"
                    className="bg-white border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline flex items-center justify-center gap-3 text-lg transition-all duration-300 hover:bg-[#2c2c2e]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
      
            {/* Información de Contacto */}
            <motion.div
              className="bg-[#101c22] text-black rounded-2xl shadow-xl p-8 md:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-500">Información de Contacto</h3>
                
                {/* 1. Ubicación (MapPin) */}
                <div className="mb-6">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-5 h-5 text-[#ffd500]  flex-shrink-0 mr-2" />
                    <span className="font-semibold text-white">Ubicación</span>
                  </div>
                  <p className="text-sm text-white pl-7">
                    Oficina: Condominio Residencial Valle Alto, Oficina G201, Puente Piedra<br/>
                    Taller: Jr. La Honestidad 8086 Urb. Residencial Los Olivos, Lima, Perú
                  </p>
                </div>
      
                {/* 2. Email (Mail) */}
                <div className="flex items-center text-sm text-white mb-4">
                  <Mail className="w-5 h-5 text-[#ffd500] flex-shrink-0 mr-3" />
                  <span className="font-semibold mr-1">Email:</span>
                  <a href="mailto:gerencia@aleyansac.com" className="hover:underline">gerencia@aleyansac.com</a>
                </div>
          
                {/* 3. Teléfono (Phone) */}
                <div className="flex items-center text-sm text-white mb-6">
                  <Phone className="w-5 h-5 text-[#ffd500]  flex-shrink-0 mr-3" />
                  <span className="font-semibold mr-1">Teléfono:</span>
                  <span>+51 932 926 758</span>
                </div>
                
                {/* 4. Horario de Atención (Clock) */}
                <div className="mb-1">
                  <div className="flex items-center mb-1">
                    <Clock className="w-5 h-5 text-[#ffd500]  flex-shrink-0 mr-2" />
                    <span className="font-semibold text-white">Horario de Atención</span>
                  </div>
                  
                  <p className="text-sm text-white pl-7">
                    Lunes - Viernes: 08:00 AM - 05:30 PM<br />
                    Sábado: 08:00 AM - 01:00 PM
                  </p>
                </div>
          
              </div>
            </motion.div>
          </div>
          
          {/* Mapa de Ubicación */}
          <div className="bg-[#101c22] py-16 mt-16 rounded-2xl shadow-xl">
            <div className="container mx-auto px-6">
              <motion.h3
                className="text-3xl font-extrabold text-center text-white mb-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // Cambiado a once: true
                transition={{ duration: 0.6 }}
              >
                Nuestra Ubicación de <span className="text-blue-600">Instalaciones</span>
              </motion.h3>
              <motion.p
                className="text-center text-lg text-white mb-12 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // Cambiado a once: true
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Visítenos en nuestras instalaciones principales para discutir cómo podemos ayudar a hacer realidad su próximo proyecto.
              </motion.p>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.838424553179!2d-77.08154282403024!3d-11.916330539487747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1a270fdbd87%3A0xb1bcaf85942a0c96!2sCondominio%20Residencial%20Valle%20Alto!5e0!3m2!1ses-419!2spe!4v1759439165799!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Constructora ALEYAN"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </> // 4. Cierre del Fragmento
  );
};

export default ContactPage;