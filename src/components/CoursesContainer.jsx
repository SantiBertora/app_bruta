import React, { useState } from "react";
import Swal from "sweetalert2";
import Courses from "./Courses";

const CoursesContainer = ({ menu, subFilter, variables }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);


  const mostrarProducto = (producto) => {
    setProductoSeleccionado(producto);
    Swal.fire({
      title: producto.name,
      text: producto.description,
      imageUrl: producto.foto,
      imageAlt: "Custom image",
      confirmButtonText: "Cerrar",
    });
  };

  // Filtramos el menú según el subfiltro
    let filteredMenu = menu;

  if (subFilter === "VEGETARIANS") {
    menu = menu.filter(
      (producto) => producto.veggie === true || producto.opcionVeggie === true
    );
  } else if (subFilter === "NO GLUTEN") {
    menu = menu.filter(
      (producto) =>
        producto.sinGluten === true || producto.opcionSinGluten === true
    );
    }

  // Buscamos el precio de cubierto en el array de variables
  const cubierto = variables.find((v) => v.id === "cubierto");

    return (
    <Courses
      menu={filteredMenu}
      mostrarProducto={mostrarProducto}
      cubierto={cubierto}
    />
    );
}

export default CoursesContainer;
