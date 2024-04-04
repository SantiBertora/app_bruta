import React from 'react'
import { useEffect } from 'react';
import { Card, CardBody, Stack, Heading, Text } from '@chakra-ui/react';

const Desserts = ( {menu, subFilter} ) => {
  const postres = menu.filter((producto) => producto.clasificacion === 'postre');
  const cafes = menu.filter((producto) => producto.clasificacion === 'cafe');
  const digestivos = menu.filter((producto) => producto.clasificacion === 'digestivo');

     // Función para manejar cambios en subFilter
     useEffect(() => {
      // Función para calcular la posición de scroll basada en la opción seleccionada
      const calcularPosicionScroll = () => {
        let posicionScroll = 0;
  
        // Calcula la posición de scroll basada en el valor de subFilter
        switch (subFilter) {
          case 'DESSERTS':
            // Calcula la posición para la opción 1
            posicionScroll = document.getElementById('postres').offsetTop;
            break;
          case 'COFFEE':
            // Calcula la posición para la opción 2
            posicionScroll = document.getElementById('cafes').offsetTop;
            break;
          case 'DIGESTIVE':
            // Calcula la posición para la opción 3
            posicionScroll = document.getElementById('digestivos').offsetTop;
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
      <h2 id='postres'>DESSERTS</h2>
      {postres
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
      <h2 id='cafes'>COFFEE</h2>
      {cafes
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
      <h2 id='digestivos'>DIGESTIVES</h2>
      {digestivos
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
  )
}

export default Desserts