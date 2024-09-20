import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import FiltrosContainer from './FiltrosContainer';
import FiltersContainer from './FiltersContainer';

const Carta = () => {

  const { selectedLanguage } = useLanguage();

  if (selectedLanguage === 'es') {
    return (
        <FiltrosContainer/>
    )
  } else if (selectedLanguage === 'en') {
    return (
      <FiltersContainer/>
    )
  }
}

export default Carta