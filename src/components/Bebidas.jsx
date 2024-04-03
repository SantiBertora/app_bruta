import React from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

const Bebidas = ({ menu, subFilter }) => {
    
  // Filtrar productos por clasificación "aperitivo"
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

  

  return (
    <div>
      <h2 id="aperitivos">NUESTROS APERITIVOS</h2>
      {productosAperitivo.map((producto) => (
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
      {productosGintonic.map((producto) => (
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
        {productosAutor.map((producto) => (
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
        {productosClasico.map((producto) => (
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
        {productosSinAlcohol.map((producto) => (
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
        {productosVermouth.map((producto) => (
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
        {productosCerveza.map((producto) => (
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
        {productosDestilado.map((producto) => (
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
