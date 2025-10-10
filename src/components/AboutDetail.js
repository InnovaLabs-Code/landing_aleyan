import React, { useState, useEffect } from 'react'; // Importar useEffect
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Lightbulb, Handshake, Calendar, Award, Target, Eye, Shield, Leaf, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
// -> IMPORTAR HELMET
import { Helmet } from 'react-helmet-async';
import history from '../assets/images/history.webp';
import about1 from '../assets/images/about1.webp';
import about2 from '../assets/images/about2.webp';
import background1 from '../assets/images/background2.webp';


const AboutDetail = () => {
  // CLAVE: Nuevo estado para controlar la carga y el inicio de la animación
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Retrasar el inicio de las animaciones 50ms después de que el componente se monta
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  // Definición de las props de animación condicional
  const animationProps = {
    initial: { opacity: 0, x: 50 },
    whileInView: isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }, // Solo anima si isLoaded es true
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };
  
  // Definición de las props de animación invertida condicional
  const animationPropsInverted = {
    initial: { opacity: 0, x: -50 },
    whileInView: isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }, // Solo anima si isLoaded es true
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };


  return (
    // 1. Abrir el Fragmento de React
    <>
      {/* 2. COMPONENTE HELMET CON METADATOS DE SEO */}
      <Helmet>
        <title>Nuestra Historia, Misión y Valores | Constructora Aleyan S.A.C.</title>
        <meta 
          name="description" 
          content="Conoce la historia, visión, misión y los 8 valores de Constructora Aleyan S.A.C., líderes en precisión y construcción de estructuras metálicas en Perú." 
        />
        {/* Reemplaza con tu URL real */}
        <link rel="canonical" href="https://aleyansac.com/about-detail" />
        {/* Eliminamos el preconnect, ya no se usa la imagen de Unsplash */}
      </Helmet>

      {/* 3. El div principal de la página ahora es el segundo elemento del Fragmento */}
      <div className="min-h-screen bg-gray-50">
        
        {/* Header de la página: FONDO DE COLOR SÓLIDO */}
        <div className="relative text-white py-40 overflow-hidden bg-gray-800"> {/* CLAVE: bg-gray-800 */}
          {/* CAPA DE IMAGEN ELIMINADA: 
            Se eliminó el div que contenía la imagen de fondo de Unsplash
          */}
          <div
              className="absolute inset-0 z-0"
              style={{
                  backgroundImage: `url(${background1})`,
                  backgroundSize: 'cover',         // Asegura que la imagen cubra todo el div sin estirarse
                  backgroundPosition: 'center',    // Centra la imagen en el div
                  filter: 'blur(2px)',            // Aplica un difuminado de 4 píxeles
                
              }}
          >
          </div>

                    
          {/* Capa de degradado MANTENIDA para efecto visual sutil si lo deseas, o ELIMINALA */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div> 
          
          <div className="relative container mx-auto px-6 text-center z-10">
    
    <motion.h1
      // CAMBIO 1: Cambiar a text-white para máximo contraste
      className="text-5xl md:text-6xl font-extrabold mb-4 text-white" 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8}}
      
      // CAMBIO 2: Aplicar sombra de texto para separarlo del fondo
      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
    >
      Sobre Nosotros
    </motion.h1>
    
    <motion.p
      // CAMBIO 3: Usar text-gray-100 para el subtítulo (similar al blanco)
      className="text-xl text-gray-100 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}

      // CAMBIO 4: Aplicar sombra de texto sutil al párrafo
      style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}
    >
      Con más de 2 años de experiencia, somos tu socio confiable en la construcción de sueños sólidos.
    </motion.p>
    
    <Link
      to="/"
      // Botón: Ya usas un color de fondo #ffd500 (Amarillo/Dorado)
      // Aseguramos que el texto del botón sea negro para el contraste.
      className="inline-flex items-center gap-2 text-black font-semibold py-3 px-6 rounded-xl mt-8 hover:opacity-90 transition-all duration-300"
      style={{ backgroundColor: '#ffd500' }}
    >
      <ArrowLeft className="w-5 h-5" />
      Volver al Inicio
    </Link>
</div>
        </div>

        {/* Sección de Historia */}
        <div className="bg-[#191A19] py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                {...animationPropsInverted} // Aplicación de props condicionales
                transition={{ duration: 0.6 }}
                // CLAVE: Avisar al navegador que este div será animado (ayuda al GPU)
                className="will-change-transform" 
              >
                {/* IMAGEN DE HISTORIA CORREGIDA: Usando srcset para optimización */}
                <img
                  src={history}
                  alt="Equipo de Constructora ALEYAN"
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                  loading="lazy"
                  // ATRIBUTOS CLAVE A AÑADIR/GENERAR (ejemplo conceptual):
                  srcSet={`${history} 400w, ${history} 800w, ${history} 1200w`} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div
                {...animationProps} // Aplicación de props condicionales
                transition={{ duration: 0.6, delay: 0.1 }}
                className="will-change-transform" 
              >
                <h2 className="text-4xl font-bold text-white mb-6">Nuestra <span className="text-blue-600">Historia</span></h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Nacida de la visión y la sólida experiencia del ingeniero Hyeraldo Acevedo Basualdo, Constructora ALEYAN S.A.C. se fundó hace poco más de un año para transformar la industria de la construcción. Con 35 años y una trayectoria en proyectos de gran envergadura, Hyeraldo entendió que el mercado necesitaba una empresa diferente: un socio que construyera no solo con calidad, eficiencia y sostenibilidad, sino que pusiera al cliente en el centro de cada proyecto.
                  <br /><br />En este corto tiempo, ALEYAN S.A.C. se ha consolidado como una opción confiable y responsable, ganando la confianza de clientes que valoran nuestra excelencia, puntualidad y enfoque personalizado. Somos más que constructores; somos transformadores de espacios.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">2023</p>
                    <p className="text-gray-300">Fundación</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-gray-300">Profesionales</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">2+</p>
                    <p className="text-gray-300">Años de Experiencia</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Misión */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                {...animationPropsInverted} // Aplicación de props condicionales
                transition={{ duration: 0.6 }}
                className="will-change-transform" 
              >
                <div className="flex items-center mb-6">  
                  <Target className="w-16 h-16 text-blue-600 mb-4 mr-4" />
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Misión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Transformar las ideas de nuestros clientes en realidades constructivas de alta calidad y sostenibles, ofreciendo soluciones innovadoras y a medida. Nos comprometemos a entregar proyectos con la máxima seguridad, durabilidad y eficiencia, optimizando consistentemente tiempos y costos a través de un equipo experto y la mejora continua.
                </p>
              </motion.div>

              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl will-change-transform"
                {...animationProps} // Aplicación de props condicionales
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* IMAGEN DE MISIÓN CORREGIDA: Usando srcset para optimización */}
                <img
                  src={about1}
                  alt="Misión - Proyecto de construcción"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  srcSet={`${about1} 400w, ${about1} 800w, ${about1} 1200w`} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 will-change-transform"
                {...animationPropsInverted} // Aplicación de props condicionales
                transition={{ duration: 0.6 }}
              >
                {/* IMAGEN DE VISIÓN CORREGIDA: Usando srcset para optimización */}
                <img
                  src={about2}
                  alt="Visión - Edificio moderno"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  srcSet={`${about2} 400w, ${about2} 800w, ${about2} 1200w`} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                className="order-1 lg:order-2 will-change-transform"
                {...animationProps} // Aplicación de props condicionales
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center mb-6">  
                  <Eye className="w-16 h-16 text-yellow-500 mb-4 mr-4" />
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Visión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Consolidarnos como la Constructora líder y referente nacional, reconocida por transformar el concepto de edificación a través de la innovación, calidad y sostenibilidad. Nuestro objetivo es ser el socio estratégico predilecto, impulsando el desarrollo de infraestructura segura, eficiente y con un profundo compromiso social en todo el Perú.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-[#1d2e41] py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="will-change-transform"
            >
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Nuestros Valores</h3>
              <p className="text-gray-300 text-center text-lg mb-10 max-w-4xl mx-auto">
                Los valores que guían cada decisión y acción en Constructora ALEYAN, formando la base de nuestra cultura empresarial.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Calidad y Precisión</h4>
                  <p className="text-gray-300">Cada proyecto se ejecuta con los más altos estándares de calidad y atención al detalle.</p>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Innovación Continua</h4>
                  <p className="text-gray-300">Adoptamos tecnologías de vanguardia para ofrecer soluciones eficientes y sostenibles.</p>
                </div>
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Sostenibilidad</h4>
                  <p className="text-gray-300">Comprometidos con prácticas responsables que protegen el medio ambiente.</p>
                </div>
                <div className="text-center">
                  <Heart className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Compromiso con el Cliente</h4>
                  <p className="text-gray-300">Ponemos a nuestros clientes en el centro de cada decisión y proyecto.</p>
                </div>
                <div className="text-center">
                  <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Trabajo en Equipo</h4>
                  <p className="text-gray-300">Colaboración y sinergia entre profesionales para lograr resultados excepcionales.</p>
                </div>
                <div className="text-center">
                  <Shield className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Seguridad</h4>
                  <p className="text-gray-300">Priorizamos la seguridad en cada etapa del proyecto para proteger a todos.</p>
                </div>
                <div className="text-center">
                  <Handshake className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Ética y Transparencia</h4>
                  <p className="text-gray-300">Construimos relaciones basadas en la honestidad y el cumplimiento de promesas.</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Resiliencia y Adaptabilidad</h4>
                  <p className="text-gray-300">Capacidad de adaptarnos a desafíos y superar obstáculos con determinación.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-[#101c22] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white">
                ¿Listo para trabajar con <span className="text-blue-600">nosotros?</span>
              </h1>
              <p className="mx-auto mt-6 text-xl text-white">
                Únase a las empresas que confían en Constructora Aleyan S.A.C. para sus proyectos de construcción de estructuras metálicas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact-page"
                  className="rounded-lg  border-2 border-blue-600 bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-white hover:text-blue-600"
                >
                  Contactar Ahora
                </Link>
                <Link
                  to="/services-detail"
                  className="rounded-lg border-2 border-[#e5c524] px-8 py-3 text-lg font-semibold text-[#e5c524] transition duration-200 hover:bg-[#e5c524] hover:text-white"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetail;
