import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Button, Divider } from '@chakra-ui/react';

const Menu = ({ mainFilter, subFilter}) => {

  const [menu, setMenu] = useState([]);


  useEffect(() => {
    fetch('src/menu.json')  // Ruta relativa al archivo JSON en la carpeta src
      .then(response => response.json())
      .then(data => setMenu(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const menuFiltrado = menu.filter((producto) => {
    // Filtrar por mainFilter
    if (mainFilter === producto.categoria) {
      if (subFilter === 'TODOS') {
        return true;
      }
      // Si subFilter es null, mostrar todos los productos
      if (subFilter === null) {
        return true;
      }
      // Filtrar adicionalmente por subFilter
      return producto[subFilter.toLowerCase()] === true;
    }
    return false;
  });

  return (
    <div>
    {menuFiltrado.map((producto) => (
    <Card maxW='sm' key={producto.nombre} className='cardMenu'>
  <CardBody className='productContainer'>
    <Image
      src={producto.img}
      alt='imagen del producto'
      borderRadius='lg'
      className='imgMenu'
    />
    <Stack className='datosMenu'>
      <Heading size='md'>{producto.nombre}</Heading>
      <Text fontSize='2xl'>
        ${producto.precio}
      </Text>
    </Stack>
  </CardBody>
</Card>
    ))}
    </div>
  )
}

export default Menu