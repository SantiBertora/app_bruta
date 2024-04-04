import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto para el idioma
const LanguageContext = createContext();

// Creamos un hook personalizado para usar el contexto del idioma
export const useLanguage = () => useContext(LanguageContext);

// Creamos el proveedor del contexto del idioma
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Inicializamos el idioma por defecto como español

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};