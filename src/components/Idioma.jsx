import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Importamos nuestro hook personalizado
import { useState } from 'react';

const Idioma = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const languages = [
    { code: 'es', flag: 'https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fes.png?alt=media&token=28292de1-9ac0-4e6a-b1fd-c8130b623828', name: 'Español' },
  //  { code: 'en', flag: 'https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fen.png?alt=media&token=759a5472-b39b-4679-991f-32085fd30087', name: 'English' },
    // Agrega más idiomas según sea necesario
  ];

  // Estado para controlar si el dropdown está abierto o cerrado
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Función para manejar el cambio de idioma seleccionado
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.code);
    setDropdownOpen(false); // Cerramos el dropdown después de seleccionar un idioma
  };

  // Función para alternar el estado del dropdown (abierto/cerrado)
  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className="language-selector-container">
        <button className="language-selector-button" onClick={toggleDropdown}>
          <img src={languages.find(lang => lang.code === selectedLanguage).flag} alt={languages.find(lang => lang.code === selectedLanguage).name} />
        </button>
        {isDropdownOpen && ( // Mostramos el dropdown solo si isDropdownOpen es verdadero
          <div className="language-dropdown">
            {languages.map((language) => (
              <button key={language.code} onClick={() => handleLanguageChange(language)}>
                <img src={language.flag} alt={language.name} />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Idioma;
