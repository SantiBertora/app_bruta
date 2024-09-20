import React, { useState, useEffect } from "react";
import Postres from "./Postres";
import Swal from "sweetalert2"; // Asegúrate de tener esta importación correcta

const PostresContainer = ({ menu, subFilter }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [alturaFiltros, setAlturaFiltros] = useState(null);

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

  // Filtrar los productos por clasificación
  const postres = menu.filter((producto) => producto.clasificacion === "postre" && producto.activo === true);
  const cafes = menu.filter((producto) => producto.clasificacion === "cafe" && producto.activo === true);
  const digestivos = menu.filter((producto) => producto.clasificacion === "digestivo" && producto.activo === true);

  useEffect(() => {
    const filtrosElement = document.getElementById("filtros");
    if (filtrosElement) {
      const altura = filtrosElement.offsetHeight;
      setAlturaFiltros(altura);
    }
  }, []);

  useEffect(() => {
    const calcularPosicionScroll = () => {
      let posicionScroll = 0;

      switch (subFilter) {
        case "POSTRES":
          posicionScroll =
            document.getElementById("postres").offsetTop - alturaFiltros;
          break;
        case "CAFETERÍA":
          posicionScroll =
            document.getElementById("cafes").offsetTop - alturaFiltros;
          break;
        case "DIGESTIVOS":
          posicionScroll =
            document.getElementById("digestivos").offsetTop - alturaFiltros;
          break;
        default:
          break;
      }

      window.scrollTo({
        top: posicionScroll,
        behavior: "smooth",
      });
    };

    calcularPosicionScroll();
  }, [subFilter, alturaFiltros]);

  return (
    <Postres
      postres={postres}
      cafes={cafes}
      digestivos={digestivos}
      mostrarProducto={mostrarProducto}
    />
  );
};

export default PostresContainer;
