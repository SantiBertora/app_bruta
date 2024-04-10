import React from 'react'
import Filtros from './Filtros';
import Filters from './Filters';
import { useLanguage } from '../context/LanguageContext';

const MenuContainer = () => {

  const { selectedLanguage } = useLanguage();

  if (selectedLanguage === 'es') {
    return (
        <Filtros/>
    )
  } else {
    return (
      <Filters/>
    )
  }
}

export default MenuContainer