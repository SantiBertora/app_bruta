import React, { useState, useEffect } from "react";
import DrinksSeccion from "./DrinksSeccion";

const Drinks = ({ menu, subFilter }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [alturaFiltros, setAlturaFiltros] = useState(null);

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
        case "APERITIVES":
          posicionScroll =
            document.getElementById("aperitivos").offsetTop - alturaFiltros;
          break;
        case "GIN&TONICS":
          posicionScroll =
            document.getElementById("gintonics").offsetTop - alturaFiltros;
          break;
        case "OTHER SIGNATURE COCKTAILS":
          posicionScroll =
            document.getElementById("autor").offsetTop - alturaFiltros;
          break;
        case "OTHER CLASSIC COCKTAILS":
          posicionScroll =
            document.getElementById("clasicos").offsetTop - alturaFiltros;
          break;
        case "NO ALCOHOL":
          posicionScroll =
            document.getElementById("sinAlcohol").offsetTop - alturaFiltros;
          break;
        case "VERMOUTHS":
          posicionScroll =
            document.getElementById("vermuts").offsetTop - alturaFiltros;
          break;
        case "BEERS":
          posicionScroll =
            document.getElementById("cervezas").offsetTop - alturaFiltros;
          break;
        case "LIQUORS AND SPIRITS":
          posicionScroll =
            document.getElementById("destilados").offsetTop - alturaFiltros;
          break;
        default:
          posicionScroll = 0;
          break;
      }

      window.scrollTo({
        top: posicionScroll,
        behavior: "smooth",
      });
    }

    calcularPosicionScroll();
  }, [subFilter, alturaFiltros]);
  return (
    <div>
      <DrinksSeccion 
        id="aperitivos"
        titulo="APERITIVES"
        productos={menu.filter((producto) => producto.clasificacion === "aperitivo")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="gintonics"
        titulo="GIN&TONICS"
        productos={menu.filter((producto) => producto.clasificacion === "gintonic")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="autor"
        titulo="SIGNATURE COCKTAILS"
        productos={menu.filter((producto) => producto.clasificacion === "autor")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="clasicos"
        titulo="CLASSIC COCKTAILS"
        productos={menu.filter((producto) => producto.clasificacion === "clasico")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="sinAlcohol"
        titulo="NO ALCOHOL"
        productos={menu.filter((producto) => producto.clasificacion === "sin alcohol")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="vermuts"
        titulo="VERMOUTHS"
        productos={menu.filter((producto) => producto.clasificacion === "vermouth")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="cervezas"
        titulo="BEERS"
        productos={menu.filter((producto) => producto.clasificacion === "cerveza")}
        mostrarProducto={mostrarProducto}
      />
      <DrinksSeccion 
        id="destilados"
        titulo="LIQUORS AND SPIRITS"
        productos={menu.filter((producto) => producto.clasificacion === "destilado")}
        mostrarProducto={mostrarProducto}
      />
    </div>

  );
}

export default Drinks;
      