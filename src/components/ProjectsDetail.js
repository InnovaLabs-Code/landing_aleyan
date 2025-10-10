import React, { useState, useEffect } from "react"; // Importar useState y useEffect
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

import service1 from "../assets/images/service1.webp";
import service2 from "../assets/images/service2.webp";
import service3 from "../assets/images/service3.webp";
import service4 from "../assets/images/service4.webp";
import service5 from "../assets/images/service5.jpg";
import service6 from "../assets/images/service6.webp";
import service7 from "../assets/images/service7.webp";
import background5 from "../assets/images/background5.webp";

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
        backgroundImage: `url('${image}')`,
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

  // Datos de servicios
  const services = [
    {
      image: service1,
      title: "Elaboración de Proyectos de estructuras Metálicas",
      description:
        "Diseñamos y planificamos estructuras de acero para proyectos de construcción, garantizando la funcionalidad y seguridad.",
    },
    {
      image: service2,
      title: "Elaboración de proyectos de carpintería metálica.",
      description:
        "Diseñamos y fabricamos elementos de carpintería metálica a medida, combinando estética y funcionalidad. Utilizando materiales de alta calidad y acabados precisos para complementar la arquitectura de cualquier espacio residencial, comercial o industrial.",
    },
    {
      image: service3,
      title:
        "Fabricación de plataformas, naves industriales, techos parabólicos, soportaría industrial.",
      description:
        "Ofrecemos soluciones de fabricación de estructuras metálicas de alta resistencia, ideales para el sector industrial. Cumpliendo con los más altos estándares de calidad.",
    },
    {
      image: service4,
      title: "Galpones, bodegueras y almacenes.",
      description:
        "Especializados en la construcción de galpones, bodegas y almacenes, proporcionamos soluciones integrales que optimizan el espacio y la funcionalidad.",
    },
    {
      image: service5,
      title: "Montaje de equipos para minería.",
      description:
        "Servicio de montaje y puesta en marcha de maquinaria y equipos pesados, específicamente para la industria minera.",
    },
    {
      image: service6,
      title:
        "Elaboración de proyectos para el sector industrial,minero y centros comerciales",
      description:
        "Desarrollamos proyectos de ingeniería y construcción para los sectores industrial, minero y comercial, garantizando soluciones funcionales y seguras.",
    },
    {
      image: service7,
      title: "Mantenimiento y montaje de estructuras metálicas pesadas.",
      description:
        "Realizamos servicios integrales de mantenimiento preventivo y correctivo para preservar el valor de tus inversiones.",
    },
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
              backgroundSize: "cover", // Asegura que la imagen cubra todo el div sin estirarse
              backgroundPosition: "center", // Centra la imagen en el div
              filter: "blur(2px)", // Aplica un difuminado de 4 píxeles
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
                  // CLASES MODIFICADAS: Se eliminan border-l-4 y border-[#FFD500]
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
        <div className="bg-[#191A19]">
          <div className="container mx-auto px-6 py-16 ">
            {/* Título de Servicios: Aplicación de Animación Condicional */}
            <motion.h2
              className="text-2xl font-bold text-center text-white mb-12 will-change-transform"
              {...enterAnimationProps}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nuestra experiencia y compromiso nos permiten ofrecer soluciones
              personalizadas y de alta calidad que se adaptan a las necesidades
              específicas de cada cliente.
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
                    // AJUSTE 1: Aumentar el ancho (w-56) y alto (h-36) de la caja del logo
                    // También aumentamos ligeramente el padding si es necesario para el nuevo tamaño
                    className="flex-shrink-0 w-56 h-42 flex items-center justify-center px-3 py-4"
                  >
                    <img
                      src={provider.src}
                      alt={provider.alt}
                      // AJUSTE 2 (Opcional): Podemos ajustar el tamaño de la imagen si 'h-full w-auto' no es suficiente,
                      // o si queremos que ocupe más espacio en el nuevo contenedor más grande.
                      // Por ejemplo: 'h-[90%] w-auto' o incluso un 'max-h-full max-w-full' si hay logos muy grandes.
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
                  to="/contact-page" // Enlace a tu formulario de cotización
                  className="rounded-lg bg-[#e5c524] px-8 py-3 text-lg font-semibold text-black shadow-lg transition duration-200 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contactar Especialista
                </Link>

                {/* Botón Secundario (Outline o Color del Título) */}
                <Link
                  to="/projects-detail" // Enlace a tus proyectos
                  className="rounded-lg border-2 border-[#e5c524] px-8 py-3 text-lg font-semibold leading-6 text-[#e5c524] transition duration-200 hover:bg-white hover:text-black"
                >
                  Descubrir Servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </> // 3. Cierre del Fragmento
  );
};

export default ProjectDetail;
