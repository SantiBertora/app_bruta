import React from 'react';

const Idioma = ({ selectedLanguage, languages, isDropdownOpen, toggleDropdown, handleLanguageChange }) => {
  return (
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
  );
};

export default Idioma;
