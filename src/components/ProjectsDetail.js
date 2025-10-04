import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin,Users,Image,Award } from 'lucide-react';
import { Link } from 'react-router-dom';
// IMPORTACIÓN CLAVE: Helmet
import { Helmet } from 'react-helmet-async'; 

// Componente para tarjeta de proyecto con overlay hover
const ProjectCard = ({ title, description, image, date, location, category, index }) => (
  <motion.div
    className="relative group overflow-hidden rounded-3xl shadow-xl h-80 cursor-pointer"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    {/* Imagen principal */}
    <motion.img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:opacity-50"
    />
    
    {/* Overlay de descripción */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0, scale: 0.9 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.h3
        className="text-2xl font-bold mb-2"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-white/90 mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <div className="flex items-center gap-4 text-sm">
        <motion.div
          className="flex items-center gap-1"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-1"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </motion.div>
      </div>
      <motion.div
        className="mt-2"
        initial={{ x: 20, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-semibold">
          {category}
        </span>
      </motion.div>
    </motion.div>
  </motion.div>
);

// Componente para resumen de proyectos
const ProjectsSummary = () => (
  <div className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl shadow-xl mx-4 mb-12 relative overflow-hidden">
    <motion.h2
      className="text-3xl font-bold text-center text-gray-900 mb-8 relative z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Nuestros Principales Proyectos
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
      {[
        { icon: Image, title: "Proyectos Destacados", count: "50+", desc: "Proyectos residenciales completados", color: "from-purple-500" },
        { icon: Users, title: "Clientes Satisfechos", count: "500+", desc: "Empresas y familias servidas", color: "from-blue-500" },
        { icon: Award, title: "Premios Recibidos", count: "12+", desc: "Reconocimientos por excelencia", color: "from-green-500" }
      ].map((stat, index) => (
        <motion.div
          key={stat.title}
          className={`text-center p-6 bg-white rounded-2xl backdrop-blur-sm border border-gray-200/50 hover:${stat.color} hover:text-white transition-all duration-300`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <stat.icon className={`w-12 h-12 ${index === 0 ? 'text-purple-600' : index === 1 ? 'text-blue-600' : 'text-green-600'} mx-auto mb-2 group-hover:text-white`} />
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-white">{stat.title}</h3>
          <p className="text-2xl font-extrabold text-purple-600 mb-2 group-hover:text-white">{stat.count}</p>
          <p className={`text-gray-600 text-sm group-hover:text-white/90`}>{stat.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProjectsDetail = () => {
  useEffect(() => {
    // Forzar actualización para animaciones al cargar
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Edificio Residencial Moderno",
      description: "Complejo de apartamentos de lujo con amenidades premium y diseño sostenible.",
      image: "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Residencial+Moderno",
      date: "2024",
      location: "Centro, CDMX",
      category: "Residencial"
    },
    // ... (rest of your projects data)
    {
      title: "Desarrollo Mixto Social",
      description: "Proyecto residencial y comercial para comunidad local con espacios inclusivos.",
      image: "https://via.placeholder.com/400x300/FBBF24/FFFFFF?text=Desarrollo+Mixto",
      date: "2019",
      location: "Coyoacán, CDMX",
      category: "Mixto"
    }
  ];

  return (
    // 1. Abrir el Fragmento de React
    <>
      {/* 2. COMPONENTE HELMET CON METADATOS DE SEO */}
      <Helmet>
          <title>Portafolio de Proyectos | Construcción de Estructuras Metálicas en Perú</title>
          <meta 
              name="description" 
              content="Explora nuestro portafolio de proyectos exitosos, incluyendo naves industriales, complejos comerciales y obras civiles con estructuras metálicas de alta precisión." 
          />
          {/* Reemplaza con tu URL real */}
          <link rel="canonical" href="https://tudominio.com/projects-detail" />
      </Helmet>

      {/* 3. El div principal de la página ahora es el segundo elemento del Fragmento */}
      <div className="min-h-screen bg-gray-50">
        {/* Sección 1: Header de la página */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 relative overflow-hidden"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 opacity-30 grid grid-cols-5 gap-4 p-8">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              />
            ))}
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nuestros Proyectos
            </motion.h1>
            <motion.p
              className="text-xl text-indigo-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explora una selección de nuestros proyectos más destacados que demuestran nuestra excelencia en construcción.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl mt-8 hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al Inicio
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección 2: Resumen de proyectos */}
        <ProjectsSummary />

        {/* Sección 3: Galería de proyectos */}
        <div className="container mx-auto px-6 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.15, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Sección 4: Llamado a acción */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-gray-600 text-lg mb-8">
              ¿Interesado en ver más detalles o iniciar tu propio proyecto? Contáctanos hoy.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-purple-700 transition-colors duration-300 text-lg shadow-lg"
            >
              Iniciar Proyecto
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetail;