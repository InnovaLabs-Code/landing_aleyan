import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ServicesDetail from './components/ServicesDetail';
import AboutDetail from './components/AboutDetail';
import Clients from './components/Clients';
import ProjectsDetail from './components/ProjectsDetail';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScroollTop';
import WhatsAppWidget from './components/WhatsAppWidget'; 
import ContactPage from './components/ContactPage';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* 2. Colocar el widget aquí para que aparezca en todas las rutas */}
      <WhatsAppWidget /> 
      
      <div className="font-sans antialiased text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HomeSection /> 
                <Clients />
                <QuoteForm />
              </>
            } />
            <Route path="/about-detail" element={<AboutDetail />} />
            <Route path="/services-detail" element={<ServicesDetail />} />
            <Route path="/projects-detail" element={<ProjectsDetail />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/quote" element={<QuoteForm />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;