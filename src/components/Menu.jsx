import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Bebidas from './Bebidas';
import Vinos from './Vinos';
import Platos from './Platos';
import Postres from './Postres';

const Menu = ({ mainFilter, subFilter}) => {

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

  if (mainFilter === 'menú') {
    menu.push(...platos);
  } else if (mainFilter === 'bebidas') {
    menu.push(...bebidas);
  } else if (mainFilter === 'postres') {
    menu.push(...postres);
  } else if (mainFilter === 'vinos') {
    menu.push(...vinos);
  }

  console.log(menu);
  console.log(subFilter);

  if (subFilter === 'APERITIVOS') {
    menu = menu.filter((producto) => producto.clasificacion === "aperitivo");
  } else if (subFilter === 'GINTONICS') {
    menu = menu.filter((producto) => producto.clasificacion === "gintonic");
  } else if (subFilter === 'OTROS CÓCTELES CLÁSICOS') {
    menu = menu.filter((producto) => producto.clasificacion === "clasico");
  } else if (subFilter === 'OTROS CÓCTELES DE AUTOR') {
    menu = menu.filter((producto) => producto.clasificacion === "autor");
  } else if (subFilter === 'SIN ALCOHOL') {
    menu = menu.filter((producto) => producto.clasificacion === "sin alcohol");
  } else if (subFilter === 'VERMUTS') {
    menu = menu.filter((producto) => producto.clasificacion === "vermouth");
  } else if (subFilter === 'CERVEZAS') {
    menu = menu.filter((producto) => producto.clasificacion === "cerveza");
  } else if (subFilter === 'LICORES Y DESTILADOS') {
    menu = menu.filter((producto) => producto.clasificacion === "destilado");
  } else if (subFilter === 'TINTOS') {
    menu = menu.filter((producto) => producto.clasificacion === "tinto");
  } else if (subFilter === 'BLANCOS') {
    menu = menu.filter((producto) => producto.clasificacion === "blanco");
  } else if (subFilter === 'ROSADOS') {
    menu = menu.filter((producto) => producto.clasificacion === "rosado");
  } else if (subFilter === 'ESPUMANTES') {
    menu = menu.filter((producto) => producto.clasificacion === "espumante");
  } else if (subFilter === 'VEGGIE') {
    menu = menu.filter((producto) => producto.veggie === true);
  } else if (subFilter === 'SIN GLUTEN') {
    menu = menu.filter((producto) => producto.sinGluten === true);
  } else if (subFilter === 'SIN LACTOSA') {
    menu = menu.filter((producto) => producto.sinLactosa === true);
  } else if (subFilter === 'POSTRES') {
    menu = menu.filter((producto) => producto.clasificacion === "postre");
  } else if (subFilter === 'CAFETERÍA') {
    menu = menu.filter((producto) => producto.clasificacion === "cafe");
  } else if (subFilter === 'DIGESTIVOS') {
    menu = menu.filter((producto) => producto.veggie === "digestivo");
  };

  

 
       if (mainFilter === 'bebidas') {
        return (
          <div> 
            <Bebidas menu={menu} subFilter={subFilter} />
          </div>
        ) 
      } else if (mainFilter === 'vinos') {
        return (
          <div> 
            <Vinos menu={menu} />
          </div>
        ) 
      } else if (mainFilter === 'menú') {
        return (
          <div> 
            <Platos menu={menu} />
          </div>
        ) 
      } else if (mainFilter === 'postres') {
        return (
          <div> 
            <Postres menu={menu} />
          </div>
        ) 
      }
    }


export default Menu