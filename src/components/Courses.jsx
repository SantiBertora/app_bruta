import React from 'react'
import { Card, CardBody, Stack, Heading, Text } from '@chakra-ui/react';

const Courses = ( {menu, subFilter} ) => {

  if (subFilter === 'VEGETARIANS') {
    menu = menu.filter((producto) => producto.veggie === true || producto.opcionVeggie === true);
  } else if (subFilter === 'NO GLUTEN') {
    menu = menu.filter((producto) => producto.sinGluten === true || producto.opcionSinGluten === true);
  } else if (subFilter === 'NO LACTOSE') {
    menu = menu.filter((producto) => producto.sinLactosa === true || producto.opcionSinLactosa === true);
  }
  
    return (
      <div>
        {menu.filter((producto) => producto.activo === true)
        .map((producto) => (
        <Card maxW='sm' key={producto.nombre} className='cardMenu'>
      <CardBody className='productContainer'>
        <Stack className='datosMenu'>
          <Heading size='md'>{producto.nombre}</Heading>
        </Stack>
        <Text fontSize='2xl'>
          ${producto.precio}
        </Text>
      </CardBody>
    </Card>
        ))}
      </div>
    )
}

export default Courses