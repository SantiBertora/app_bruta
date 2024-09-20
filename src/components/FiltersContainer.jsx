import React, { useState } from "react";
import Filters from "./Filters";
import MenuContainerEN from "./MenuContainerEN";

const FiltersContainer = () => {
  const [mainFilter, setMainFilter] = useState("drinks");
  const [subFilter, setSubFilter] = useState("ALL");

  const subFilters = {
    drinks: [
      "ALL",
      "APERITIVES",
      "GIN&TONICS",
      "OTHER SIGNATURE COCKTAILS",
      "OTHER CLASSIC COCKTAILS",
      "NO ALCOHOL",
      "VERMOUTHS",
      "BEERS",
      "LIQUORS AND SPIRITS",
    ],
    wines: ["ALL", "RED", "ROSE", "WHITE", "SPARKLING", "WINES BY THE GLASS"],
    menu: ["ALL", "VEGETARIANS", "NO GLUTEN"],
    desserts: ["ALL", "DESSERTS", "COFFEE", "DIGESTIVE"],
    };

    const handleMainFilterChange = (filter) => {
        setMainFilter(filter);
        setSubFilter("ALL");
        };

        const handleSubFilterChange = (filter) => {
            setSubFilter(filter);
            };

            return (
                <div>
                <Filters
                mainFilter={mainFilter}
                subFilter={subFilter}
                subFilters={subFilters}
                onMainFilterChange={handleMainFilterChange}
                onSubFilterChange={handleSubFilterChange}
                />
                <MenuContainerEN mainFilter={mainFilter} subFilter={subFilter} />
                </div>
                );
            };

            export default FiltersContainer;