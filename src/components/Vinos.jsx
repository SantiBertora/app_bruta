import React from 'react'

const Vinos = ( {menu} ) => {

    if (subFilter === 'TINTOS') {
        menu = menu.filter((producto) => producto.clasificacion === "tinto");
      } else if (subFilter === 'BLANCOS Y ROSÉ') {
        menu = menu.filter((producto) => producto.clasificacion === "blanco" || producto.clasificacion === "rose");
      } else if (subFilter === 'ESPUMANTES') {
        menu = menu.filter((producto) => producto.clasificacion === "espumante");
      }

  return (
    <div>
        <h2>TINTOS</h2>
            
    </div>
  )
}

export default Vinos