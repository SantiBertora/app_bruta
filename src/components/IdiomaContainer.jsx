import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Importamos nuestro hook personalizado
import Idioma from './Idioma'; // Importamos el componente de presentación

const IdiomaContainer = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const languages = [
    { code: 'es', flag: 'https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fes.png?alt=media&token=28292de1-9ac0-4e6a-b1fd-c8130b623828', name: 'Español' },
  //  { code: 'en', flag: 'https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fen.png?alt=media&token=759a5472-b39b-4679-991f-32085fd30087', name: 'English' },
    // Agrega más idiomas según sea necesario
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.code);
    setDropdownOpen(false); // Cerramos el dropdown después de seleccionar un idioma
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <Idioma
      selectedLanguage={selectedLanguage}
      languages={languages}
      isDropdownOpen={isDropdownOpen}
      toggleDropdown={toggleDropdown}
      handleLanguageChange={handleLanguageChange}
    />
  );
};

export default IdiomaContainer;
