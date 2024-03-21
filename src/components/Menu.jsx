import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Button, Divider } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Menu = ({ mainFilter, subFilter}) => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const platosCollection = collection(db, 'platos');
    const bebidasCollection = collection(db, 'bebidas');
    const postresCollection = collection(db, 'postres');
    const vinosCollection = collection(db, 'vinos');
    getDocs(platosCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setMenu(docs);
    });
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