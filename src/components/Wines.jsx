import React from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Wines = ({ menu, subFilter }) => {

const vinosTinto = menu.filter(
    (producto) => producto.clasificacion === "tinto"
  );
  const vinosByR = menu.filter(
    (producto) =>
      producto.clasificacion === "blanco" || producto.clasificacion === "rose"
  );
  const vinosEspumante = menu.filter(
    (producto) => producto.clasificacion === "espumante"
  );

  const cabSauv = vinosTinto.filter(
    (producto) => producto.cepa === "cabernet sauvignon"
  );

  const tannat = vinosTinto.filter((producto) => producto.cepa === "tannat");

  const pinotNoir = vinosTinto.filter(
    (producto) => producto.cepa === "pinot noir"
  );

  const cabFranc = vinosTinto.filter(
    (producto) => producto.cepa === "cabernet franc"
  );

  const malbec = vinosTinto.filter((producto) => producto.cepa === "malbec");

  const ensamblajes = vinosTinto.filter(
    (producto) => producto.cepa === "ensamblaje"
  );

  const otrasCepas = vinosTinto.filter(
    (producto) => producto.cepa === "otra"
  );

  const rosados = vinosByR.filter(
    (producto) => producto.cepa === "rose"
  );

  const torrontes = vinosByR.filter(
    (producto) => producto.cepa === "torrontes"
  );

  const albarino = vinosByR.filter(
    (producto) => producto.cepa === "albariño"
  );

  const sauvignonBlanc = vinosByR.filter(
    (producto) => producto.cepa === "sauvignon blanc"
  );

  const chardonnay = vinosByR.filter(
    (producto) => producto.cepa === "chardonnay"
  );

  const otrosBlancos = vinosByR.filter(
    (producto) => producto.cepa === "otra"
  );

  const espumantes = vinosEspumante.filter(
    (producto) => producto.cepa === "espumante"
  );

   // Función para manejar cambios en subFilter
   useEffect(() => {
    // Función para calcular la posición de scroll basada en la opción seleccionada
    const calcularPosicionScroll = () => {
      let posicionScroll = 0;

      // Calcula la posición de scroll basada en el valor de subFilter
      switch (subFilter) {
        case 'RED':
          // Calcula la posición para la opción 1
          posicionScroll = document.getElementById('tintos').offsetTop;
          break;
        case 'ROSE':
          // Calcula la posición para la opción 2
          posicionScroll = document.getElementById('rosados').offsetTop;
          break;
        case 'WHITE':
          // Calcula la posición para la opción 3
          posicionScroll = document.getElementById('blancos').offsetTop;
          break;
        case 'SPARKLING':
          // Calcula la posición para la opción 4
          posicionScroll = document.getElementById('espumantes').offsetTop;
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
      <h2 id="tintos" >TINTOS</h2>
      <h3>Cabernet Sauvignon</h3>
      {cabSauv
        .filter((producto) => producto.activo === true)
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
      <h3>Tannat</h3>
      {tannat
        .filter((producto) => producto.activo === true)
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
      <h3>Pinot Noir</h3>
      {pinotNoir
        .filter((producto) => producto.activo === true)
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
      <h3>Cabernet Franc</h3>
      {cabFranc
        .filter((producto) => producto.activo === true)
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
      <h3>Malbec</h3>
      {malbec
        .filter((producto) => producto.activo === true)
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
      <h3>Blends</h3>
      {ensamblajes
        .filter((producto) => producto.activo === true)
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
      <h3>Other Strains</h3>
      {otrasCepas
        .filter((producto) => producto.activo === true)
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
      <h2 id="rosados">ROSE</h2>
          {rosados
          .filter((producto) => producto.activo === true)
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
      <h2 id="blancos">WHITE</h2>
      <h3>Torrontes</h3>
      {torrontes
        .filter((producto) => producto.activo === true)
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
      <h3>Albariño</h3>
      {albarino
        .filter((producto) => producto.activo === true)
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
      <h3>Sauvignon Blanc</h3>
      {sauvignonBlanc
        .filter((producto) => producto.activo === true)
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
      <h3>Chardonnay</h3>
      {chardonnay
        .filter((producto) => producto.activo === true)
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
      <h3>Others</h3>
      {otrosBlancos
        .filter((producto) => producto.activo === true)
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
      <h2 id="espumantes">SPARKLING</h2>
      {espumantes
        .filter((producto) => producto.activo === true)
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

export default Wines