import React, { useState } from 'react'
import Menu from './Menu';

const Filtros = () => {
    // Estado para el filtro principal
    const [mainFilter, setMainFilter] = useState('bebidas');

    // Estado para el filtro secundario
    const [subFilter, setSubFilter] = useState(null);

    const subFilters = {
      bebidas: ['APERITIVOS', 'GINTONICS', 'CÓCTELES CLÁSICOS', 'CÓCTELES DE AUTOR', 'SIN ALCOHOL', 'CERVEZAS', 'LICORES'],
      vinos: ['TINTOS', 'BLANCOS', 'ROSADOS', 'ESPUMANTES'],
      platos: ['TODOS', 'VEGETARIANOS', 'VEGANOS', 'SIN GLUTEN', 'SIN LACTOSA'],
      postres: ['POSTRES', 'CAFETERÍA', 'DIGESTIVOS']
    };
  
    const handleMainFilterChange = (filter) => {
      setMainFilter(filter);
      setSubFilter(null);
    };

    const handleSubFilterChange = (filter) => {
      setSubFilter(filter);
    };
  
    return (
      <div>
        <div id='filtroPrincipal'>
          {Object.keys(subFilters).map((filter) => (
            <button
              id='btnPrincipal'
              key={filter}
              onClick={() => handleMainFilterChange(filter)}
              className={mainFilter === filter ? 'active' : ''}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>
        <div>
          {mainFilter && subFilters[mainFilter] && (
            <div id='filtroSub'>
              {subFilters[mainFilter].map((subFilterOption) => (
                <button id='btnSub'
                key={subFilterOption}
                onClick={() => handleSubFilterChange(subFilterOption)}
                className={subFilter === subFilterOption ? 'active' : ''}
                >{subFilterOption}</button>
              ))}
            </div>
          )}
        </div>
        <Menu mainFilter={mainFilter} subFilter={subFilter}/>
      </div>
    );
}

export default Filtros