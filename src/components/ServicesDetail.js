import React, { useState, useEffect } from 'react'; // Importar useState y useEffect
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// -> IMPORTAR HELMET
import { Helmet } from 'react-helmet-async';

import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import service4 from '../assets/images/service4.png';
import service5 from '../assets/images/service5.jpg';
import service6 from '../assets/images/service6.jpg';
import service7 from '../assets/images/service7.jpg';

const ServiceCard = ({ image, title, description, delay }) => (
  <motion.div
    className="relative group h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer will-change-transform" // Añadido will-change-transform
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    // CAMBIO CLAVE: Una vez que aparece, no se repite
    viewport={{ once: true, amount: 0.3 }}
    // Duración ligeramente reducida para una sensación más ágil
    transition={{ duration: 0.5, delay }}
  >
    {/* Imagen de fondo */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{
        backgroundImage: `url('${image}')`
      }}
    ></div>
    
    {/* Overlay con difuminado */}
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300"></div>
    
    {/* Contenido que aparece en hover */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {title}
      </h3>
      <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
        {description}
      </p>
    </div>
    
    {/* Título siempre visible */}
    <div className="absolute bottom-6 left-6 text-white">
      <h3 className="text-xl font-semibold group-hover:opacity-0 transition-opacity duration-300">
        {title}
      </h3>
    </div>
  </motion.div>
);

const ServicesDetail = () => {
  // CLAVE: Estado para controlar el inicio de la animación
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Retrasar el inicio de las animaciones 50ms después del montaje
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  // Definición de las props de animación condicional para la entrada
  const enterAnimationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, 
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };
  
  // Datos de servicios
  const services = [
    {
      image: service1,
      title: 'Elaboración de Proyectos de estructuras Metálicas',
      description: 'Diseñamos y planificamos estructuras de acero para proyectos de construcción, garantizando la funcionalidad y seguridad.'
    },
    {
      image: service2,
      title: 'Elaboración de proyectos de carpintería metálica.',
      description: 'Diseñamos y fabricamos elementos de carpintería metálica a medida, combinando estética y funcionalidad. Utilizando materiales de alta calidad y acabados precisos para complementar la arquitectura de cualquier espacio residencial, comercial o industrial.'
    },
    {
      image: service3,
      title: 'Fabricación de plataformas, naves industriales, techos parabólicos, soportaría industrial.',
      description: 'Ofrecemos soluciones de fabricación de estructuras metálicas de alta resistencia, ideales para el sector industrial. Cumpliendo con los más altos estándares de calidad.'
    },
    {
      image: service4,
      title: 'Galpones, bodegueras y almacenes.',
      description: 'Especializados en la construcción de galpones, bodegas y almacenes, proporcionamos soluciones integrales que optimizan el espacio y la funcionalidad.'
    },
    {
      image: service5,
      title: 'Montaje de equipos para minería.',
      description: 'Servicio de montaje y puesta en marcha de maquinaria y equipos pesados, específicamente para la industria minera.'
    },
    {
      image: service6,
      title: 'Elaboración de proyectos para el sector industrial,minero y centros comerciales',
      description: 'Desarrollamos proyectos de ingeniería y construcción para los sectores industrial, minero y comercial, garantizando soluciones funcionales y seguras.'
    },
    {
      image: service7,
      title: 'Mantenimiento y montaje de estructuras metálicas pesadas.',
      description: 'Realizamos servicios integrales de mantenimiento preventivo y correctivo para preservar el valor de tus inversiones.'
    }
  ];

  // Datos para la nueva sección de proceso
  const processSteps = [
    { 
      number: 1, 
      title: "Cotiza tu Proyecto y Planificación Inicial" 
    },
    { 
      number: 2, 
      title: "Ingeniería de Detalle y Modelado BIM" 
    },
    { 
      number: 3, 
      title: "Fabricación y Montaje Riguroso" 
    },
    { 
      number: 4, 
      title: "Entrega Final y Soporte Técnico" 
    },
  ];

// --- Datos de la Sección de Beneficios ---
  const benefits = [
      "Precisión y Calidad Estructural Garantizada",
      "Control Riguroso de Tiempos y Presupuesto",
      "Fabricación bajo Normas AWS y ASTM",
      "Seguridad Industrial y Cumplimiento de Protocolos",
      "Ingeniería de Detalle con Modelado BIM",
      "Equipo Certificado y Especializado en Montaje",
  ];

  return (
    // 1. Abrir el Fragmento de React
    <>
      <Helmet>
        <title>Servicios de Estructuras Metálicas y Montaje | Constructora Aleyan S.A.C.</title>
        <meta 
          name="description" 
          content="Somos líderes en la elaboración de proyectos, fabricación, montaje y mantenimiento de estructuras metálicas para los sectores industrial y minero." 
        />
        {/* Reemplaza con tu URL real */}
        <link rel="canonical" href="https://aleyansac.com/services-detail" />
      </Helmet>

      {/* 2. El div principal de la página ahora es el segundo elemento del Fragmento */}
      <div className="min-h-screen bg-gray-50">
        
        {/* Header de la página: FONDO DE COLOR SÓLIDO + ANIMACIÓN */}
        <div className="relative text-white py-40 overflow-hidden bg-gray-800">
          
          {/* Nuevo Elemento: Animación de Gradiente Sutil (GPU Accelerated) */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0b254eff, #334155)', // Colores de gradiente
            }}
            // Animación sutil de desplazamiento de fondo infinito
            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
            transition={{ 
              ease: "linear", 
              duration: 30, // Más lento para que no sea intrusivo
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          

          
          {/* Overlay para oscurecer y mejorar legibilidad del texto - MANTENIDO */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="relative container mx-auto px-6 text-center z-10">
            {/* Animaciones de Header: Usamos animate directamente para que inicien inmediatamente con la carga */}
            
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nuestros Servicios
            </motion.h1>
            <motion.p
              className="text-xl text-gray-100 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Somos especialistas en la fabricación, montaje y mantenimiento de estructuras metálicas diseñadas para satisfacer las necesidades de proyectos en diversos sectores, como la construcción, la industria, la logística y el comercio. 
            </motion.p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-black font-semibold py-3 px-6 rounded-xl mt-8 hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: '#ffd500' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Inicio
            </Link>
          </div>
        </div>

        {/* Sección de servicios */}
        <div className="bg-[#191A19]">
          <div className="container mx-auto px-6 py-16 ">
          {/* Título de Servicios: Aplicación de Animación Condicional */}
          <motion.h2
            className="text-2xl font-bold text-center text-white mb-12 will-change-transform"
            {...enterAnimationProps}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nuestra experiencia y compromiso nos permiten ofrecer soluciones personalizadas y de alta calidad que se adaptan a las necesidades específicas de cada cliente.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              // ServiceCard ya tiene su propia animación optimizada
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        </div>

        {/* NUEVA SECCIÓN: Nuestro Proceso de Trabajo */}
        <section className="bg-gray-100 py-16 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Título de Proceso: Aplicación de Animación Condicional */}
            <motion.div
              className="mx-auto max-w-3xl text-center mb-16 will-change-transform"
              {...enterAnimationProps}
              transition={{ duration: 0.6 }}
            >
              {/* Título de la sección */}
              <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                ¿Cómo funciona nuestro <span className="text-blue-600">proceso de servicios?</span>
              </h2>
            </motion.div>

            {/* Contenedor de las tarjetas de los pasos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full will-change-transform"
                  {...enterAnimationProps}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Círculo Numerado */}
                  <div className="w-16 h-16 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full text-2xl font-bold mb-6 shadow-md">
                    {step.number}
                  </div>
                  
                  {/* Título del Paso */}
                  <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
        
        {/* SECCIÓN DE BENEFICIOS */}
        <section className="bg-gray-50 py-16 md:py-16">
          <div className="container mx-auto px-6">
            
            <motion.h2
              className="text-4xl md:text-4xl font-bold text-gray-800 text-center mb-12 will-change-transform"
              {...enterAnimationProps}
              transition={{ duration: 0.6 }}
            >
              Retorno Sólido: La Ventaja <span className="text-blue-600">Aleyan S.A.C</span>
            </motion.h2>

            {/* Lista de Beneficios en 2 Columnas */}
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start will-change-transform"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} // Animación Condicional
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Ícono de Check/Viñeta */}
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 mr-3" />
                    
                    <p className="text-lg text-gray-700">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE LLAMADA A LA ACCIÓN (CTA) */}
        <div className="bg-[#101c22] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            <motion.div
              className="mx-auto max-w-3xl text-center will-change-transform"
              {...enterAnimationProps}
              transition={{ duration: 0.6 }}
            >
              
              {/* Título de la CTA */}
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                ¿Listo para realizar <span className="text-blue-600">tu proyecto con nosotros?</span>
              </h2>
              
              {/* Descripción */}
              <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-gray-100">
                Contáctanos y recibe una atención personalizada y una cotización a medida para tu empresa.
              </p>
              
              {/* Contenedor de Botones */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                
                {/* Botón Principal (Amarillo/Blanco Sólido - Destaca sobre el fondo oscuro) */}
                <Link
                  to="/contact-page" // Enlace a tu formulario de cotización
                  className="rounded-lg bg-[#e5c524] px-8 py-3 text-lg font-semibold text-black shadow-lg transition duration-200 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Solicitar Cotización
                </Link>
                
                {/* Botón Secundario (Outline o Color del Título) */}
                <Link
                  to="/projects-detail" // Enlace a tus proyectos
                  className="rounded-lg border-2 border-[#e5c524] px-8 py-3 text-lg font-semibold leading-6 text-[#e5c524] transition duration-200 hover:bg-white hover:text-black"
                >
                  Ver Proyectos
                </Link>
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </> // 3. Cierre del Fragmento
  );
};

export default ServicesDetail;
