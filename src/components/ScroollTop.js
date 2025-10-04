// ScrollToTop.js optimizado
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const rafIdRef = useRef(null); // Para limpiar el requestAnimationFrame

  useEffect(() => {
    // 1. Cancelamos cualquier solicitud pendiente antes de crear una nueva
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // 2. Usamos requestAnimationFrame para posponer el scroll
    rafIdRef.current = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      rafIdRef.current = null; // Limpiamos la referencia después de ejecutar
    });

    // 3. Función de limpieza al desmontar o antes de un nuevo useEffect
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;