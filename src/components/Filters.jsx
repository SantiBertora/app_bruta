import React, { useState } from "react";
import EnglishMenu from "./EnglishMenu";

const Filters = () => {
  // Estado para el filtro principal (bebidas, vinos, platos, postres y digestivos)
  const [mainFilter, setMainFilter] = useState("drinks");

  // Estado para el filtro secundario dentro de "bebidas"
  const [subFilter, setSubFilter] = useState("ALL");

  const subFilters = {
    drinks: [
      "ALL",
      "APERITIVES",
      "GIN&TONICS",
      "OTHER CLASSIC COCKTAILS",
      "OTHER SIGNATURE COCKTAILS",
      "NO ALCOHOL",
      "VERMOUTHS",
      "BEERS",
      "LIQUORS AND SPIRITS",
    ],
    wines: ["ALL", "RED", "WHITE & ROSE", "SPARKLING"],
    courses: ["ALL", "VEGETARIANS", "NO GLUTEN", "NO LACTOSE"],
    desserts: ["ALL", "DESSERTS", "COFFEE", "DIGESTIVE"],
  };

  const handleMainFilterChange = (filter) => {
    setMainFilter(filter);
    setSubFilter('ALL');
  };

  const handleSubFilterChange = (filter) => {
    setSubFilter(filter);
  };

  return (
    <div>
      <div id="filtroPrincipal">
        {Object.keys(subFilters).map((filter) => (
          <button
            id="btnPrincipal"
            key={filter}
            onClick={() => handleMainFilterChange(filter)}
            className={mainFilter === filter ? "active" : ""}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>
      <div>
        {mainFilter && subFilters[mainFilter] && (
          <div id="filtroSub">
            <select
              id="dropdownMenu"
              value={subFilter}
              onChange={(event) => handleSubFilterChange(event.target.value)}
            >
              {subFilters[mainFilter].map((subFilterOption) => (
                <option key={subFilterOption} value={subFilterOption}>
                  {subFilterOption}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <EnglishMenu mainFilter={mainFilter} subFilter={subFilter} />
    </div>
  );
};

export default Filters;
