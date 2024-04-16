import React, { useState } from "react";
import Menu from "./Menu";

const Filtros = () => {
  // Estado para el filtro principal
  const [mainFilter, setMainFilter] = useState("bebidas");

  // Estado para el filtro secundario
  const [subFilter, setSubFilter] = useState("TODOS");

  const subFilters = {
    bebidas: [
      "TODOS",
      "APERITIVOS",
      "GINTONICS",
      "OTROS CÓCTELES DE AUTOR",
      "OTROS CÓCTELES CLÁSICOS",
      "SIN ALCOHOL",
      "VERMUTS",
      "CERVEZAS",
      "DESTILADOS",
    ],
    vinos: ["TODOS", "TINTOS", "ROSADOS", "BLANCOS", "ESPUMANTES", "VINOS POR COPA"],
    menú: ["TODOS", "VEGGIE", "SIN GLUTEN"],
    "postres y digestivos": ["TODOS", "POSTRES", "CAFETERÍA", "DIGESTIVOS"],
  };

  const handleMainFilterChange = (filter) => {
    setMainFilter(filter);
    setSubFilter("TODOS");
  };

  const handleSubFilterChange = (filter) => {
    setSubFilter(filter);
  };

  const filtros = document.getElementById("filtroPrincipal");

  return (
    <div>
      <div id="filtros">
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
      <Menu mainFilter={mainFilter} subFilter={subFilter} />
    </div>
  );
};

export default Filtros;
