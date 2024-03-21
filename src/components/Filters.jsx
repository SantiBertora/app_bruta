import React, { useState } from 'react';
import EnglishMenu from './EnglishMenu';


const Filters = () => {
  // Estado para el filtro principal (bebidas, vinos, platos, postres y digestivos)
  const [mainFilter, setMainFilter] = useState('drinks');

  // Estado para el filtro secundario dentro de "bebidas"
  const [subFilter, setSubFilter] = useState(null);

  const subFilters = {
    drinks: ['APERITIVES', 'GIN&TONICS','CLASSIC COCKTAILS', 'SIGNATURE COCKTAILS', 'NO ALCOHOL', 'BEERS', 'LIQUORS'],
    wines: ['RED', 'WHITE', 'PINK', 'SPARKLING'],
    courses: ['ALL', 'VEGETARIANS', 'VEGAN', 'NO GLUTEN', 'NO LACTOSE'],
    desserts: ['DESSERTS', 'COFFEE', 'DIGESTIVE']
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
        <EnglishMenu mainFilter={mainFilter} subFilter={subFilter}/>
      </div>
    );
};

export default Filters;