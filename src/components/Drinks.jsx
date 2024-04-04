import React from 'react'
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Drinks = ({ menu, subFilter }) => {

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

  // Función para manejar cambios en subFilter
  useEffect(() => {
    // Función para calcular la posición de scroll basada en la opción seleccionada
    const calcularPosicionScroll = () => {
      let posicionScroll = 0;

      // Calcula la posición de scroll basada en el valor de subFilter
      switch (subFilter) {
        case 'APERITIVES':
          // Calcula la posición para la opción 1
          posicionScroll = document.getElementById('aperitivos').offsetTop;
          break;
        case 'GIN&TONICS':
          // Calcula la posición para la opción 2
          posicionScroll = document.getElementById('gintonics').offsetTop;
          break;
        case 'OTHER SIGNATURE COCKTAILSR':
          // Calcula la posición para la opción 3
          posicionScroll = document.getElementById('autor').offsetTop;
          break;
        case 'OTHER CLASSIC COCKTAILS':
          // Calcula la posición para la opción 4
          posicionScroll = document.getElementById('clasicos').offsetTop;
          break;
        case 'NO ALCOHOL':
          // Calcula la posición para la opción 5
          posicionScroll = document.getElementById('sinAlcohol').offsetTop;
          break;
        case 'VERMOUTHS':
          // Calcula la posición para la opción 6
          posicionScroll = document.getElementById('vermuts').offsetTop;
          break;
        case 'BEERS':
          // Calcula la posición para la opción 7
          posicionScroll = document.getElementById('cervezas').offsetTop;
          break;
        case 'LIQUORS AND SPIRITS':
          // Calcula la posición para la opción 8
          posicionScroll = document.getElementById('destilados').offsetTop;
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
      <h2 id="aperitivos">APERITIVES</h2>
      {productosAperitivo.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card maxW="sm" key={producto.nombre} className="cardMenu">
          <CardBody className="productContainer">
            <Stack className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
            </Stack>
            <Text fontSize="2xl">${producto.precio}</Text>
          </CardBody>
        </Card>
      ))}
      <h2 id="gintonics">GIN&TONICS</h2>
      {productosGintonic.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card maxW="sm" key={producto.nombre} className="cardMenu">
          <CardBody className="productContainer">
            <Stack className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
            </Stack>
            <Text fontSize="2xl">${producto.precio}</Text>
          </CardBody>
        </Card>
      ))}
        <h2 id="autor">OTHER SIGNATURE COCKTAILS</h2>
        {productosAutor.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card maxW="sm" key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="clasicos">OTHER CLASSIC COCKTAILS</h2>
        {productosClasico.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card maxW="sm" key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="sinAlcohol">NO ALCOHOL</h2>
        {productosSinAlcohol.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card maxW="sm" key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="vermuts">VERMOUTHS</h2>
        {productosVermouth.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card maxW="sm" key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="cervezas">BEERS</h2>
        {productosCerveza.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card maxW="sm" key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="destilados">LIQUORS AND SPIRIT</h2>
        {productosDestilado.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card maxW="sm" key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
    </div>
  );
}

export default Drinks