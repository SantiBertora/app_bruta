import React, { useState, useEffect } from 'react';
import SeccionBebidas from './SeccionBebidas';

const Bebidas = ({ menu, subFilter }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [alturaFiltros, setAlturaFiltros] = useState(null);

  const mostrarProducto = (producto) => {
    setProductoSeleccionado(producto);
    Swal.fire({
      title: producto.nombre,
      text: producto.descripcion,
      imageUrl: producto.foto,
      imageAlt: 'Custom image',
      confirmButtonText: 'Cerrar',
    });
  };

  useEffect(() => {
    const filtrosElement = document.getElementById('filtros');
    if (filtrosElement) {
      const altura = filtrosElement.offsetHeight;
      setAlturaFiltros(altura);
    }
  }, []);

  useEffect(() => {
    const calcularPosicionScroll = () => {
      let posicionScroll = 0;

      switch (subFilter) {
        case 'APERITIVOS':
          posicionScroll = document.getElementById('aperitivos').offsetTop - alturaFiltros;
          break;
        case 'GINTONICS':
          posicionScroll = document.getElementById('gintonics').offsetTop - alturaFiltros;
          break;
        case 'OTROS CÓCTELES DE AUTOR':
          posicionScroll = document.getElementById('autor').offsetTop - alturaFiltros;
          break;
        case 'OTROS CÓCTELES CLÁSICOS':
          posicionScroll = document.getElementById('clasicos').offsetTop - alturaFiltros;
          break;
        case 'SIN ALCOHOL':
          posicionScroll = document.getElementById('sinAlcohol').offsetTop - alturaFiltros;
          break;
        case 'VERMUTS':
          posicionScroll = document.getElementById('vermuts').offsetTop - alturaFiltros;
          break;
        case 'CERVEZAS':
          posicionScroll = document.getElementById('cervezas').offsetTop - alturaFiltros;
          break;
        case 'DESTILADOS':
          posicionScroll = document.getElementById('destilados').offsetTop - alturaFiltros;
          break;
        default:
          posicionScroll = 0;
          break;
      }

      window.scrollTo({
        top: posicionScroll,
        behavior: 'smooth',
      });
    };

    calcularPosicionScroll();
  }, [subFilter, alturaFiltros]);

  return (
    <div>
      <SeccionBebidas
        id="aperitivos"
        titulo="NUESTROS APERITIVOS"
        productos={menu.filter((producto) => producto.clasificacion === 'aperitivo')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="gintonics"
        titulo="NUESTROS GINTONICS"
        productos={menu.filter((producto) => producto.clasificacion === 'gintonic')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="autor"
        titulo="NUESTROS CÓCTELES DE AUTOR"
        productos={menu.filter((producto) => producto.clasificacion === 'autor')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="clasicos"
        titulo="NUESTROS CÓCTELES CLÁSICOS"
        productos={menu.filter((producto) => producto.clasificacion === 'clasico')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="sinAlcohol"
        titulo="SIN ALCOHOL"
        productos={menu.filter((producto) => producto.clasificacion === 'sin alcohol')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="vermuts"
        titulo="VERMUTS"
        productos={menu.filter((producto) => producto.clasificacion === 'vermouth')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="cervezas"
        titulo="CERVEZAS"
        productos={menu.filter((producto) => producto.clasificacion === 'cerveza')}
        mostrarProducto={mostrarProducto}
      />
      <SeccionBebidas
        id="destilados"
        titulo="DESTILADOS"
        productos={menu.filter((producto) => producto.clasificacion === 'destilado')}
        mostrarProducto={mostrarProducto}
      />
    </div>
  );
};

export default Bebidas;