import React from 'react'
import { useState } from 'react';
import MenuContainer from './MenuContainer';


const Idioma = () => {

  const languages = [
    { code: 'es', flag: 'es.png', name: 'Español' },
    { code: 'en', flag: 'en.png', name: 'English' },
    // Agrega más idiomas según sea necesario
  ];

  // Estado para controlar si el dropdown está abierto o cerrado
const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Estado para mantener el idioma seleccionado
const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

// Función para manejar el cambio de idioma seleccionado
const handleLanguageChange = (language) => {
setSelectedLanguage(language);
setDropdownOpen(false);
// Aquí puedes realizar alguna acción con el idioma seleccionado, como cambiar el contenido de la app según el idioma, etc.
};

// Función para alternar el estado del dropdown (abierto/cerrado)
const toggleDropdown = () => {
setDropdownOpen((prevOpen) => !prevOpen);
};

  return (
    <>
    <div className="language-selector-container">
      <button className="language-selector-button" onClick={toggleDropdown}>
        <img src={`src/assets/${selectedLanguage.flag}`} alt={selectedLanguage.name} />
      </button>
      {isDropdownOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button key={language.code} onClick={() => handleLanguageChange(language)}>
              <img src={`src/assets/${language.flag}`} alt={language.name} />
            </button>
          ))}
        </div>
      )}
    </div>
    <MenuContainer idioma={selectedLanguage.code}/>
    </>
  );
};


export default Idioma