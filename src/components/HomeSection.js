import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Hammer, Award, ArrowRight, CheckCircle, Award as AwardIcon, Users as UsersIcon, Lightbulb, Settings, Layout, Rocket, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
// -> IMPORTAR HELMET
import { Helmet } from 'react-helmet-async';

// Componente Contador Animado (Mantenido igual)
const AnimatedCounter = ({ from, to, duration, suffix = '' }) => {
    // ... (código de AnimatedCounter)
    const [count, setCount] = useState(from);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
      if (isInView) {
        let start = from;
        const end = to;
        const increment = (end - start) / (duration * 60);
        let currentCount = start;

        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= end) {
            currentCount = end;
            clearInterval(timer);
          }
          setCount(Math.floor(currentCount));
        }, 1000 / 60);

        return () => clearInterval(timer);
      }
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

// Componente StatItem (Mantenido igual)
const StatItem = ({ icon: Icon, value, label, delay, type }) => (
    // ... (código de StatItem)
    <motion.div
        className="flex flex-row items-center gap-2 text-gray-800" // Cambiado a flex-row y text-gray-800
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay }}
    >
        {/* <Icon className="w-6 h-6 text-gray-700" />  Puedes descomentar si quieres un icono pequeño */}{/* Iconos eliminados del diseño actual de la imagen */}
        <motion.span
            className="text-3xl md:text-4xl font-extrabold text-amber-500" // Valor numérico en color ámbar
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: delay + 0.3, type: "spring", stiffness: 200 }}
        >
            <AnimatedCounter
                from={0}
                to={parseInt(value.replace('+', ''))}
                duration={2}
                suffix='+' // El "+" solo para clientes y proyectos, no años
            />
        </motion.span>
        <p className="text-base font-medium text-white">{label}</p> {/* Etiqueta en gris */}
    </motion.div>
);

// Componente ReasonCard (Mantenido igual)
const ReasonCard = ({ icon: Icon, title, description, delay, iconColor }) => (
    <motion.div
        
        className="bg-gray-800/80 rounded-2xl shadow-xl p-6 border border-transparent flex flex-col items-center text-center text-white backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // RECOMENDACIÓN: Usé once: true para mejor rendimiento
        transition={{ duration: 0.6, delay }}
    >
        {/* Usamos iconColor para un color dinámico, si lo estás pasando */}
        <Icon className={`w-12 h-12 ${iconColor ? iconColor : 'text-[#ffd500]'} mb-4`} />
        
        {/* Título: Aseguramos el color blanco */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3> 
        
        {/* Descripción: Aseguramos un color gris claro */}
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

// Componente WorkProcessStep (Mantenido igual)
const WorkProcessStep = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        className="bg-gray-900/90 rounded-2xl shadow-xl p-6 border border-transparent flex flex-col items-center text-center text-white backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay }}
    >
        <Icon className="w-16 h-16 text-[#ffd500] mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white leading-relaxed">{description}</p>
    </motion.div>
);


const HomeSection = () => {
    return (
        // 1. Abrir el Fragmento de React
        <> 
            {/* 2. COMPONENTE HELMET CON METADATOS OPTIMIZADOS */}
            <Helmet>
                <title>Constructora Aleyan S.A.C. | Estructuras Metálicas </title>
                <meta 
                    name="description" 
                    content="Constructora Aleyan S.A.C. ofrece servicios especializados en estructuras metálicas, montaje industrial y proyectos civiles de alta precisión en Lima y todo Perú. ¡Cotiza tu proyecto hoy!" 
                />
                {/* Reemplaza con tu URL real */}
                <link rel="canonical" href="https://aleyansac.com/" />

                <script type="application/ld+json">{`
                    {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Constructora Aleyan S.A.C.",
                    "url": "https://aleyansac.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://aleyansac.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                    }
                    `}</script>
            </Helmet>

            {/* 3. El contenido principal de la página (la section #inicio) */}
            <section id="inicio">
                <section className="relative min-h-[950px] flex items-center justify-center overflow-hidden pt-24"> {/* Añadido pt-24 */}
                    {/* Imagen de fondo */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1758218210743-8a5c47492bdf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // Imagen de construcción moderna (reemplaza con tu URL o '/images/fondo_landing.jpg')
                        }}
                    ></div>

                    {/* Overlay degradado para mejorar la legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div> {/* Ajuste de overlay */}

                    {/* Contenido del banner */}
                    <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/2 text-center md:text-left">
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg" // Texto principal en blanco
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Nos preparamos <br /> para el <span className="text-blue-600">Futuro</span> {/* Color azul para "Futuro" */}
                            </motion.h1>
                            <motion.p
                                className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto md:mx-0 mb-12 drop-shadow-md" // Párrafo en un gris más claro para contraste
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Le ofrecemos los mejores servicios de diseño arquitectónico y construcción, transformando ideas en estructuras sólidas y duraderas.
                            </motion.p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-8">
                                {/* StatItems actualizados con los valores de la imagen */}
                                <StatItem icon={Users} value="3" label={<>Años de<br/>Experiencia</>} delay={0.4} type="years" />
                                <StatItem icon={Hammer} value="100" label={<>Proyectos<br/>Completados</>} delay={0.6} type="projects" />
                                <StatItem icon={Award} value="50" label={<>Clientes<br/>Satisfechos</>} delay={0.8} type="clients" />
                            </div>
                            
                            {/* Botones "Nuestros Servicios" y "Ver Proyectos" */}
                            <div className="mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                                <Link
                                    to="/services-Detail" // Asumo que este botón lleva a la página de servicios
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg text-lg"
                                >
                                    Nuestros Servicios <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/projects-Detail" // Asumo que este botón lleva a la página de proyectos
                                    className="inline-flex items-center justify-center gap-2 bg-[#ffd500] text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-lg"
                                >
                                    Ver Proyectos
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección: ¿Por qué elegirnos? */}
                <div className="py-20 bg-[#191A19]"> {/* Fondo de sección en negro */}
                    <div className="container mx-auto px-6">
                        <motion.h2
                            className="text-4xl font-extrabold text-center text-white mb-4"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            ¿ Por qué elegir <span className="text-blue-600">Constructora Aleyan S.A.C </span>?
                        </motion.h2>
                        <motion.p
                            className="text-center text-lg text-white mb-10 max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Transformamos tu idea de proyecto en infraestructura metálica robusta, eficiente y duradera. Elegirnos significa garantizar la máxima precisión en cada componente estructural, desde la fabricación en taller hasta el montaje final en obra.
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ReasonCard
                                icon={CheckCircle}
                                title="Calidad Inigualable"
                                description="Comprometidos con los más altos estándares de construcción y materiales duraderos."
                                delay={0.1}
                            />
                            <ReasonCard
                                icon={Award}
                                title="Experiencia Comprobada"
                                description="Más de 2 años en el sector, con un historial de proyectos exitosos y clientes satisfechos."
                                delay={0.2}
                            />
                            <ReasonCard
                                icon={Users}
                                title="Equipo Profesional"
                                description="Contamos con administradores, ingenieros y operarios altamente cualificados y dedicados."
                                delay={0.3}
                            />
                            <ReasonCard
                                icon={Lightbulb}
                                title="Innovación y Sostenibilidad"
                                description="Aplicamos las últimas tecnologías y prácticas ecológicas en cada proyecto."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>

                {/* Sección: Cómo Trabajamos */}
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            className="text-4xl font-extrabold text-center text-gray-900 mb-4"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            Nuestro <span className="text-blue-600">Proceso de Trabajo</span>
                        </motion.h2>
                        <motion.p
                            className="text-center text-lg text-black mb-12 max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Nuestra metodología está diseñada para garantizar la máxima precisión y la ejecución eficiente de tu proyecto de estructuras metálicas, minimizando los tiempos de inactividad en obra.
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <WorkProcessStep
                                icon={Settings}
                                title="1. Planificación Detallada"
                                description="Analizamos tus necesidades, diseñamos soluciones personalizadas y creamos un plan de proyecto exhaustivo."
                                delay={0.1}
                            />
                            <WorkProcessStep
                                icon={Layout}
                                title="2. Ejecución Eficiente"
                                description="Llevamos a cabo la construcción con la máxima eficiencia, supervisión constante y control de calidad riguroso."
                                delay={0.2}
                            />
                            <WorkProcessStep
                                icon={Rocket}
                                title="3. Entrega y Soporte"
                                description="Entregamos tu proyecto a tiempo y dentro del presupuesto, ofreciendo soporte post-construcción para tu tranquilidad."
                                delay={0.3}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </> // 4. Cierre del Fragmento
    );
};

export default HomeSection;