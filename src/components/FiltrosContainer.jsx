import React, { useState } from "react";
import Filtros from "./Filtros";
import MenuContainer from "./MenuContainer";

const FiltrosContainer = () => {
  const [mainFilter, setMainFilter] = useState("bebidas");
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

  return (
    <div>
      <Filtros
        mainFilter={mainFilter}
        subFilter={subFilter}
        subFilters={subFilters}
        onMainFilterChange={handleMainFilterChange}
        onSubFilterChange={handleSubFilterChange}
      />
      <MenuContainer mainFilter={mainFilter} subFilter={subFilter} />
    </div>
  );
};

export default FiltrosContainer;