import React, { Suspense } from 'react'; // Importar Suspense
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScroollTop';
import WhatsAppWidget from './components/WhatsAppWidget'; 
import { Analytics } from "@vercel/analytics/react"

// 1. Componentes de Layout (Carga Estática, siempre necesarios)
import Clients from './components/Clients'; 
import QuoteForm from './components/QuoteForm';

// 2. Componentes de Página (Carga Dinámica con React.lazy())
const HomeSection = React.lazy(() => import('./components/HomeSection')); 
const ServicesDetail = React.lazy(() => import('./components/ServicesDetail')); 
const AboutDetail = React.lazy(() => import('./components/AboutDetail')); 
const ProjectsDetail = React.lazy(() => import('./components/ProjectsDetail')); 
const ContactPage = React.lazy(() => import('./components/ContactPage')); 

function App() { 
  return ( 
    <Router> 
      <ScrollToTop /> 
      <WhatsAppWidget />  
      <Analytics />
      
      <div className="font-sans antialiased text-gray-900 flex flex-col min-h-screen"> 
        <Header /> 
        <main className="flex-grow"> 
          {/* 3. ENVOLVER LAS RUTAS CON <Suspense> */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes> 
              <Route path="/" element={ 
                <> 
                  {/* Estos componentes usan carga estática o se definen aquí si son pequeños */}
                  <HomeSection />  
                  <Clients /> 
                  <QuoteForm /> 
                </> 
              } /> 
              {/* Rutas de página completa usan carga dinámica */}
              <Route path="/about-detail" element={<AboutDetail />} /> 
              <Route path="/services-detail" element={<ServicesDetail />} /> 
              <Route path="/projects-detail" element={<ProjectsDetail />} /> 
              <Route path="/contact-page" element={<ContactPage />} /> 
              <Route path="/quote" element={<QuoteForm />} /> 
            </Routes> 
          </Suspense>
        </main> 
        <Footer /> 
      </div> 
    </Router> 
  ); 
} 

// 4. Componente Básico de Carga (Fallback)
// Se muestra mientras se descarga el JS de la página
const LoadingFallback = () => (
    <div className="flex justify-center items-center h-full py-20 text-xl font-semibold text-gray-600">
        Cargando contenido...
    </div>
);

export default App;