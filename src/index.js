import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // <-- 1. IMPORTACIÓN CLAVE
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* 2. ENVOLVER EL COMPONENTE <App /> CON HELMETPROVIDER */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);