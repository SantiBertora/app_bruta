import React from 'react'
import { useState } from 'react';
import MenuContainer from './MenuContainer';


const Idioma = () => {

  const languages = [
    { code: 'es', flag: 'https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fes.png?alt=media&token=28292de1-9ac0-4e6a-b1fd-c8130b623828', name: 'Español' },
    { code: 'en', flag: 'https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fen.png?alt=media&token=759a5472-b39b-4679-991f-32085fd30087', name: 'English' },
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
        <img src={selectedLanguage.flag} alt={selectedLanguage.name} />
      </button>
      {isDropdownOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button key={language.code} onClick={() => handleLanguageChange(language)}>
              <img src={language.flag} alt={language.name} />
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