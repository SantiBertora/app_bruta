import React from "react";

const Filtros = ({
  mainFilter,
  subFilter,
  subFilters,
  onMainFilterChange,
  onSubFilterChange,
}) => {
  return (
    <div id="filtros">
      <div id="filtroPrincipal">
        {Object.keys(subFilters).map((filter) => (
          <button
            id="btnPrincipal"
            key={filter}
            onClick={() => onMainFilterChange(filter)}
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
            onChange={(event) => onSubFilterChange(event.target.value)}
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
  );
};

export default Filtros;
