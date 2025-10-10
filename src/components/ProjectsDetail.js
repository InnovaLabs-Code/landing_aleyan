import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  TrendingUp,
  Clock,
  Shield,
  Users,
  HardHat,
  Home,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";

// -> IMPORTAR HELMET
import { Helmet } from "react-helmet-async";


import background5 from "../assets/images/background5.webp";

import project1 from "../assets/images/interbank3.jpg";
import project2 from "../assets/images/interbank1.jpg";
import project3 from "../assets/images/interbank2.jpg";
import project4 from "../assets/images/aeropuerto1.jpg";
import project5 from "../assets/images/aeropuerto2.webp";
import project6 from "../assets/images/aeropuerto3.jpg";
import project7 from "../assets/images/fridays1.jpg";
import project8 from "../assets/images/hablabroaster.webp";
import project9 from "../assets/images/papachos1.jpg";
import project10 from "../assets/images/starbucks.jpg";
import project11 from "../assets/images/mallsjl.webp";
import project12 from "../assets/images/mallcomas.jpg";



// Importa tus imágenes aquí
import logo1 from "../assets/images/proveedor1.jpg";
import logo2 from "../assets/images/proveedor2.jpeg";
import logo3 from "../assets/images/proveedor3.jpg";
import logo4 from "../assets/images/proveedor4.png";
import logo5 from "../assets/images/proveedor6.jpg";
import logo6 from "../assets/images/proveedor7.jpg";
import logo7 from "../assets/images/proveedor8.png";
import logo8 from "../assets/images/proveedor9.png";
import logo9 from "../assets/images/proveedor10.png";
import { i } from "framer-motion/client";

// Array de logos movido fuera del componente
const providerLogos = [
  { src: logo1, alt: "Empresa A" },
  { src: logo2, alt: "Empresa B" },
  { src: logo3, alt: "Empresa C" },
  { src: logo4, alt: "Empresa D" },
  { src: logo8, alt: "Empresa H" },
  { src: logo5, alt: "Empresa E" },
  { src: logo9, alt: "Empresa I" },
  { src: logo6, alt: "Empresa F" },
  { src: logo7, alt: "Empresa G" },

  // Duplicar los logos para el efecto de bucle infinito
  { src: logo1, alt: "Empresa A" },
  { src: logo2, alt: "Empresa B" },
  { src: logo3, alt: "Empresa C" },
  { src: logo4, alt: "Empresa D" },
  { src: logo8, alt: "Empresa H" },
  { src: logo5, alt: "Empresa E" },
  { src: logo9, alt: "Empresa I" },
  { src: logo6, alt: "Empresa F" },
  { src: logo7, alt: "Empresa G" },
];

const ServiceCard = ({ images, title, delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Solo inicia el carrusel si está en hover
    if (!isHovered) {
      setCurrentImageIndex(0); // Resetea a la primera imagen cuando no hay hover
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1300); // Cambia cada 1.3 segundos (más rápido)

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <motion.div
      className="relative group h-[400px] overflow-hidden shadow-xl cursor-pointer will-change-transform"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Imágenes de fondo con transición de desvanecimiento */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentImageIndex === index ? 1 : 0,
            transform: currentImageIndex === index ? 'scale(1.05)' : 'scale(1)',
          }}
        ></div>
      ))}

      {/* Overlay con difuminado - se oscurece más en hover */}
      <div className={`absolute inset-0 bg-black transition-all duration-300 ${isHovered ? 'bg-opacity-65' : 'bg-opacity-10'}`}></div>

      {/* Título centrado - solo aparece en hover */}
      <div className={`absolute inset-0 flex items-center justify-center p-6 text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-2xl font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const ProjectDetail = () => {
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
    initial: { opacity: 0, y: -30 },
    whileInView: isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 },
  };

  // Datos de servicios - Ahora cada servicio tiene un array de imágenes
  const services = [
    

    {
      images: [project1, project2, project3],
      title: "EDIFICIO INTERBANK",
    },
    {
      images: [project4, project5, project6],
      title: "AMPLIACIÓN AEROPUERTO JORGE CHAVEZ - LIMA",
    },
    {
      images: [project11],
      title: "MALL AVENTURA PLAZA SJL",
    },

    {
      images: [project12],
      title: "MALL PLAZA COMAS",
    },

    {
      images: [project7],
      title: "FRIDAYS SEDE JOCKEY PLAZA",
    },

    {
      images: [project10],
      title: "STARBUCKS COFFEE",
    },

    {
      images: [project9, project8],
      title: "IMPLEMENTACIONES DE LOCALES: PAPACHOS Y HABLA BROASTER",
    },
    {
      images: [],
      title: "UTEC SEDE BARRANCO - LIMA",
    },
    {
      images: [],
      title: "LOCAL TANTA CAFE - LIMA",
    },
    {
      images: [],
      title:
        "COLEGIOS BICENTENARIOS I.E. 1235 UNIÓN LATINOAMERICANA",
    },
    {
      images: [],
      title: "COLEGIOS BICENTENARIOS - I.E. MANUEL GONZALES PRADA",
    },
    {
      images: [],
      title: "LOCALES: GRUPO DELOSI",
    },
    {
      images: [],
      title:
        "I.E. 8184 - SAN BENITO",
    }
    

    
  ];

  // Datos para la sección de Foco de Especialización
  const specializationFocus = [
    {
      title: "Estructuras Industriales",
      desc: "Diseño y montaje de naves, almacenes y plataformas que requieren máxima resistencia y precisión dimensional.",
      icon: Factory,
    },
    {
      title: "Edificaciones Comerciales",
      desc: "Soluciones estructurales eficientes para oficinas, centros comerciales y ampliaciones, optimizando tiempos de construcción.",
      icon: Home,
    },
    {
      title: "Proyectos Mineros y Energía",
      desc: "Fabricación y montaje de estructuras especializadas para plantas de procesamiento, cumpliendo normas de seguridad rigurosas.",
      icon: HardHat,
    },
  ];

  return (
    // 1. Abrir el Fragmento de React
    <>
      <Helmet>
        <title>Portafolio de Proyectos | Constructora Aleyan S.A.C.</title>
        <meta
          name="description"
          content="Explora nuestro portafolio de proyectos exitosos, incluyendo complejos comerciales y obras civiles con estructuras metálicas de alta precisión."
        />
        {/* Reemplaza con tu URL real */}
        <link rel="canonical" href="https://aleyansac.com/projects-detail" />
      </Helmet>

      {/* 2. El div principal de la página ahora es el segundo elemento del Fragmento */}
      <div className="min-h-screen bg-gray-50">
        {/* Header de la página: FONDO DE COLOR SÓLIDO + ANIMACIÓN */}
        <div className="relative text-white py-40 overflow-hidden bg-gray-800">
          {/* Nuevo Elemento: Animación de Gradiente Sutil (GPU Accelerated) */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${background5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
            }}
          ></div>

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
              Nuestros Proyectos
            </motion.h1>
            <motion.p
              className="text-xl text-gray-100 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explora una selección de nuestros proyectos más destacados que
              demuestran nuestra excelencia en construcción.
            </motion.p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-black font-semibold py-3 px-6 rounded-xl mt-8 hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: "#ffd500" }}
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Inicio
            </Link>
          </div>
        </div>

        {/* NUEVA SECCIÓN 1: FOCO DE ESPECIALIZACIÓN (Reemplaza a "Proceso") */}
        <section className="bg-gray-100 py-16 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Título */}
            <motion.div
              className="mx-auto max-w-3xl text-center mb-10 will-change-transform"
              {...enterAnimationProps}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                <span className="text-blue-600">Proyectos Destacados</span> por
                Segmento
              </h2>
              <p className="mt-4 text-xl text-black">
                Te mostramos el tipo de desafíos que dominamos y dónde radica
                nuestra mayor experiencia.
              </p>
            </motion.div>

            {/* Contenedor de las tarjetas de especialización */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializationFocus.map((focus, index) => (
                <motion.div
                  key={index}
                  className="bg-[#252934] rounded-xl shadow-xl p-8 flex flex-col items-start h-full will-change-transform"
                  {...enterAnimationProps}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Contenedor Flex para Icono y Título */}
                  <div className="flex items-center mb-4">
                    {/* Ícono (mantiene el color Amarillo) */}
                    <focus.icon className="w-8 h-8 text-[#FFD500] mr-3 flex-shrink-0" />

                    {/* Título del Foco (mantiene el color Blanco) */}
                    <h3 className="text-xl font-semibold text-white leading-tight">
                      {focus.title}
                    </h3>
                  </div>

                  {/* Descripción (mantiene el color Gris claro) */}
                  <p className="text-gray-300 leading-relaxed mt-2">
                    {focus.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de servicios */}
        <div className="bg-white">
          <div className="container mx-auto px-6 py-16 max-w-[1400px]">
            {/* Título de Servicios: Aplicación de Animación Condicional */}
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  images={service.images}
                  title={service.title}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* NUEVA SECCIÓN 2: Proveedores */}
        <section id="clientes" className="py-20 bg-gray-100 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-extrabold text-center text-gray-900 mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Materiales que{" "}
              <span className="text-blue-600">Garantizan la Solidez</span>
            </motion.h2>
            {/* Descripción */}
            <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-black text-center mb-6">
              Elegimos a los mejores del mercado para asegurar la durabilidad y
              la resistencia de todas nuestras estructuras.
            </p>
            <div className="max-w-6xl mx-auto flex whitespace-nowrap px-6 overflow-hidden">
              <motion.div
                className="flex space-x-2"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
              >
                {providerLogos.map((provider, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-56 h-42 flex items-center justify-center px-3 py-4"
                  >
                    <img
                      src={provider.src}
                      alt={provider.alt}
                      className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
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
                Un paso más cerca de{" "}
                <span className="text-blue-600">tu proyecto.</span>
              </h2>

              {/* Descripción */}
              <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-gray-100">
                Ponte en contacto con nuestros especialistas para recibir una
                consulta sin compromiso y una cotización personalizada. Tu éxito
                es nuestra prioridad.
              </p>

              {/* Contenedor de Botones */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* Botón Principal (Amarillo/Blanco Sólido - Destaca sobre el fondo oscuro) */}
                <Link
                  to="/contact-page"
                  className="rounded-lg bg-[#e5c524] px-8 py-3 text-lg font-semibold text-black shadow-lg transition duration-200 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contactar Especialista
                </Link>

                {/* Botón Secundario (Outline o Color del Título) */}
                <Link
                  to="/projects-detail"
                  className="rounded-lg border-2 border-[#e5c524] px-8 py-3 text-lg font-semibold leading-6 text-[#e5c524] transition duration-200 hover:bg-white hover:text-black"
                >
                  Descubrir Servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;