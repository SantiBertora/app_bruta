import React from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Bebidas = ({ menu, subFilter }) => {
    
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
        case 'APERITIVOS':
          // Calcula la posición para la opción 1
          posicionScroll = document.getElementById('aperitivos').offsetTop;
          break;
        case 'GINTONICS':
          // Calcula la posición para la opción 2
          posicionScroll = document.getElementById('gintonics').offsetTop;
          break;
        case 'OTROS CÓCTELES DE AUTOR':
          // Calcula la posición para la opción 3
          posicionScroll = document.getElementById('autor').offsetTop;
          break;
        case 'OTROS CÓCTELES CLÁSICOS':
          // Calcula la posición para la opción 4
          posicionScroll = document.getElementById('clasicos').offsetTop;
          break;
        case 'SIN ALCOHOL':
          // Calcula la posición para la opción 5
          posicionScroll = document.getElementById('sinAlcohol').offsetTop;
          break;
        case 'VERMUTS':
          // Calcula la posición para la opción 6
          posicionScroll = document.getElementById('vermuts').offsetTop;
          break;
        case 'CERVEZAS':
          // Calcula la posición para la opción 7
          posicionScroll = document.getElementById('cervezas').offsetTop;
          break;
        case 'LICORES Y DESTILADOS':
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
      <h2 id="aperitivos">NUESTROS APERITIVOS</h2>
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
      <h2 id="gintonics">NUESTROS GINTONICS</h2>
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
        <h2 id="autor">NUESTROS CÓCTELES DE AUTOR</h2>
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
        <h2 id="clasicos">NUESTROS CÓCTELES CLÁSICOS</h2>
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
        <h2 id="sinAlcohol">SIN ALCOHOL</h2>
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
        <h2 id="vermuts">VERMUTS</h2>
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
        <h2 id="cervezas">CERVEZAS</h2>
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
        <h2 id="destilados">LICORES Y DESTILADOS</h2>
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
};

export default Bebidas;
