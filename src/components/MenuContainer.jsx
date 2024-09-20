import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Menu from './Menu';

const MenuContainer = ({ mainFilter, subFilter }) => {
  const [platos, setPlatos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [postres, setPostres] = useState([]);
  const [vinos, setVinos] = useState([]);
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const platosCollection = collection(db, 'platos');
    getDocs(platosCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setPlatos(docs);
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

  useEffect(() => {
    const db = getFirestore();
    const variablesCollection = collection(db, 'variables');
    getDocs(variablesCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setVariables(docs);
    });
  }, []);

  let menu = [];

  if (mainFilter === 'menú') {
    menu.push(...platos);
  } else if (mainFilter === 'bebidas') {
    menu.push(...bebidas);
  } else if (mainFilter === 'postres y digestivos') {
    menu.push(...postres);
  } else if (mainFilter === 'vinos') {
    menu.push(...vinos);
  }


  return <Menu mainFilter={mainFilter} subFilter={subFilter} menu={menu} variables={variables} />;
};

export default MenuContainer;
