import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardBody, Stack, Heading, Text } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const EnglishMenu = ({ mainFilter, subFilter}) => {

    const [platos, setPlatos] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [postres, setPostres] = useState([]);
    const [vinos, setVinos] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
  
      const platosCollection = collection(db, 'platos');
    getDocs(platosCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setPlatos(docs);
      console.log(platosCollection)
    });
  }, []);
  
  useEffect(() => {
    const db = getFirestore();

    const bebidasCollection = collection(db, 'bebidas');
    getDocs(bebidasCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setBebidas(docs);
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();

    const postresCollection = collection(db, 'postres');
    getDocs(postresCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setPostres(docs);
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const vinosCollection = collection(db, 'vinos');
    getDocs(vinosCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setVinos(docs);
    });
  }, []);

  let menu = [];

  if (mainFilter === 'courses') {
    menu.push(...platos);
  } else if (mainFilter === 'drinks') {
    menu.push(...bebidas);
  } else if (mainFilter === 'desserts') {
    menu.push(...postres);
  } else if (mainFilter === 'wines') {
    menu.push(...vinos);
  };

  if (subFilter === 'APERITIVES') {
    menu = menu.filter((producto) => producto.clasificacion === "aperitivo");
  } else if (subFilter === 'GIN&TONICS') {
    menu = menu.filter((producto) => producto.clasificacion === "gintonic");
  } else if (subFilter === 'OTHER CLASSIC COCKTAILS') {
    menu = menu.filter((producto) => producto.clasificacion === "clasico");
  } else if (subFilter === 'OTHER SIGNATURE COCKTAILS') {
    menu = menu.filter((producto) => producto.clasificacion === "autor");
  } else if (subFilter === 'NO ALCOHOL') {
    menu = menu.filter((producto) => producto.clasificacion === "sin alcohol");
  } else if (subFilter === 'VERMOUTHS') {
    menu = menu.filter((producto) => producto.clasificacion === "vermouth");
  } else if (subFilter === 'BEERS') {
    menu = menu.filter((producto) => producto.clasificacion === "cerveza");
  } else if (subFilter === 'LIQUORS AND SPIRITS') {
    menu = menu.filter((producto) => producto.clasificacion === "destilado");
  } else if (subFilter === 'RED') {
    menu = menu.filter((producto) => producto.clasificacion === "tinto");
  } else if (subFilter === 'WHITE') {
    menu = menu.filter((producto) => producto.clasificacion === "blanco");
  } else if (subFilter === 'ROSE') {
    menu = menu.filter((producto) => producto.clasificacion === "rosado");
  } else if (subFilter === 'SPARKLING') {
    menu = menu.filter((producto) => producto.clasificacion === "espumante");
  } else if (subFilter === 'VEGGIE') {
    menu = menu.filter((producto) => producto.veggie === true);
  } else if (subFilter === 'NO GLUTEN') {
    menu = menu.filter((producto) => producto.sinGluten === true);
  } else if (subFilter === 'NO LACTOSA') {
    menu = menu.filter((producto) => producto.sinLactosa === true);
  } else if (subFilter === 'DESSERTS') {
    menu = menu.filter((producto) => producto.clasificacion === "postre");
  } else if (subFilter === 'COFFEE') {
    menu = menu.filter((producto) => producto.clasificacion === "cafe");
  } else if (subFilter === 'DIGESTIVE') {
    menu = menu.filter((producto) => producto.veggie === "digestivo");
  };

  return (
    <div> 
       {menu.map((producto) => (
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

export default EnglishMenu
