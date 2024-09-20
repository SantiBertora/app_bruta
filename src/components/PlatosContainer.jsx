import React, { useState } from "react";
import Swal from "sweetalert2";
import Platos from "./Platos"; // Importamos el componente de presentación

const PlatosContainer = ({ menu, subFilter, variables }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Función para mostrar el producto seleccionado en una alerta
  const mostrarProducto = (producto) => {
    setProductoSeleccionado(producto);
    Swal.fire({
      title: producto.nombre,
      text: producto.descripcion,
      imageUrl: producto.foto,
      imageAlt: "Custom image",
      confirmButtonText: "Cerrar",
    });
  };

  // Filtramos el menú según el subfiltro
  let filteredMenu = menu;

  if (subFilter === "VEGGIE") {
    filteredMenu = menu.filter(
      (producto) => producto.veggie === true || producto.opcionVeggie === true
    );
  } else if (subFilter === "SIN GLUTEN") {
    filteredMenu = menu.filter(
      (producto) =>
        producto.sinGluten === true || producto.opcionSinGluten === true
    );
  }

  // Buscamos el precio de cubierto en el array de variables
  const cubierto = variables.find((v) => v.id === "cubierto");

  return (
    <Platos
      menu={filteredMenu}
      mostrarProducto={mostrarProducto}
      cubierto={cubierto}
    />
  );
};

export default PlatosContainer;
