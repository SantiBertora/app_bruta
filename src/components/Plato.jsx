import React from 'react'
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

const Plato = ({producto}) => {

  console.log(producto)

  return (
    <div className='contenedorDetalles'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={producto.foto} alt={producto.nombre} borderRadius='lg'/>
          <Stack mt='6' spacing='3' className='cardContent'>
            <Heading size='md'>{producto.nombre}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              ${producto.precio}
            </Text>
            <Text className='descripcion'>
              {producto.descripcion}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}

export default Plato