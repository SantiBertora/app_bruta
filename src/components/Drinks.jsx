import React from 'react'
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Drinks = ({ menu, subFilter }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);


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

    const productosAperitivo = menu.filter(
        (producto) => producto.clasificacion === "aperitivo"
      );
      const productosGintonic = menu.filter(
        (producto) => producto.clasificacion === "gintonic"
      );
      const productosAutor = menu.filter(
        (producto) => producto.clasificacion === "autor"
      );
      const productosClasico = menu.filter(
        (producto) => producto.clasificacion === "clasico"
      );
      const productosCerveza = menu.filter(
        (producto) => producto.clasificacion === "cerveza"
      );
      const productosVermouth = menu.filter(
        (producto) => producto.clasificacion === "vermouth"
      );
      const productosSinAlcohol = menu.filter(
        (producto) => producto.clasificacion === "sin alcohol"
      );
      const productosDestilado = menu.filter(
        (producto) => producto.clasificacion === "destilado"
      );

      // Obtener la altura del componente "filtros"

const [alturaFiltros, setAlturaFiltros] = useState(null);

useEffect(() => {
  const filtrosElement = document.getElementById("filtros");
  if (filtrosElement) {
    const altura = filtrosElement.offsetHeight;
    setAlturaFiltros(altura);
  }
}, []);


  // Función para manejar cambios en subFilter
  useEffect(() => {
    // Función para calcular la posición de scroll basada en la opción seleccionada
    const calcularPosicionScroll = () => {
      let posicionScroll = 0;

      // Calcula la posición de scroll basada en el valor de subFilter
      switch (subFilter) {
        case 'APERITIVES':
          // Calcula la posición para la opción 1
          posicionScroll = document.getElementById('aperitivos').offsetTop - alturaFiltros;
          break;
        case 'GIN&TONICS':
          // Calcula la posición para la opción 2
          posicionScroll = document.getElementById('gintonics').offsetTop - alturaFiltros;
          break;
        case 'OTHER SIGNATURE COCKTAILSR':
          // Calcula la posición para la opción 3
          posicionScroll = document.getElementById('autor').offsetTop - alturaFiltros;
          break;
        case 'OTHER CLASSIC COCKTAILS':
          // Calcula la posición para la opción 4
          posicionScroll = document.getElementById('clasicos').offsetTop - alturaFiltros;
          break;
        case 'NO ALCOHOL':
          // Calcula la posición para la opción 5
          posicionScroll = document.getElementById('sinAlcohol').offsetTop - alturaFiltros;
          break;
        case 'VERMOUTHS':
          // Calcula la posición para la opción 6
          posicionScroll = document.getElementById('vermuts').offsetTop - alturaFiltros;
          break;
        case 'BEERS':
          // Calcula la posición para la opción 7
          posicionScroll = document.getElementById('cervezas').offsetTop - alturaFiltros;
          break;
        case 'LIQUORS AND SPIRITS':
          // Calcula la posición para la opción 8
          posicionScroll = document.getElementById('destilados').offsetTop - alturaFiltros;
          break;
        // Agrega más casos según tus necesidades
        default:
          // Por defecto, no se hace scroll
          posicionScroll = 0;
          break;
      }

      // Realiza el scroll
      window.scrollTo({
        top: posicionScroll,
        behavior: 'smooth', // Esto hace el scroll suave, puedes cambiarlo si lo deseas
      });
    };

    // Llama a la función para calcular la posición de scroll cuando subFilter cambie
    calcularPosicionScroll();
  }, [subFilter]);

  return (
    <div>
      <h2 id="aperitivos" className="titulo">APERITIVES</h2>
      {productosAperitivo.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card key={producto.nombre} className="cardMenu" onClick={() => mostrarProducto(producto)}>
          <CardBody className="productContainer">
            <Stack className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
            </Stack>
            <Text className="precio">${producto.precio}</Text>
          </CardBody>
        </Card>
      ))}
      <h2 id="gintonics" className="titulo">GIN&TONICS</h2>
      {productosGintonic.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
          <CardBody className="productContainer">
            <Stack className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
            </Stack>
            <Text className="precio">${producto.precio}</Text>
          </CardBody>
        </Card>
      ))}
        <h2 id="autor" className="titulo">OTHER SIGNATURE COCKTAILS</h2>
        {productosAutor.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text className="precio">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="clasicos" className="titulo">OTHER CLASSIC COCKTAILS</h2>
        {productosClasico.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text className="precio">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="sinAlcohol" className="titulo">NO ALCOHOL</h2>
        {productosSinAlcohol.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text className="precio">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="vermuts" className="titulo">VERMOUTHS</h2>
        {productosVermouth.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text className="precio">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="cervezas" className="titulo">BEERS</h2>
        {productosCerveza.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text className="precio">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="destilados" className="titulo">LIQUORS AND SPIRIT</h2>
        {productosDestilado.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text className="precio">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
    </div>
  );
}

export default Drinks