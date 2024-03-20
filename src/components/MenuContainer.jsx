import React from 'react'
import Filtros from './Filtros';
import Filters from './Filters';

const MenuContainer = (idioma) => {

  if (idioma.idioma === 'es') {
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