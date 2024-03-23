import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

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

  const menu = [];

  if (mainFilter === 'platos') {
    menu.push(...platos);
  } else if (mainFilter === 'bebidas') {
    menu.push(...bebidas);
  } else if (mainFilter === 'postres') {
    menu.push(...postres);
  } else if (mainFilter === 'vinos') {
    menu.push(...vinos);
  }

  console.log(menu);

  return (
    <div> 
      
    </div> 
  )
}

export default Menu