import React from 'react'
import { useState, useEffect } from 'react';
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
  } else if (mainFilter === 'postres y digestivos') {
    menu.push(...postres);
  } else if (mainFilter === 'vinos') {
    menu.push(...vinos);
  }
 
       if (mainFilter === 'bebidas') {
        return (
          <div> 
            <Bebidas menu={menu} subFilter={subFilter} />
          </div>
        ) 
      } else if (mainFilter === 'vinos') {
        return (
          <div> 
            <Vinos menu={menu} subFilter={subFilter} />
          </div>
        ) 
      } else if (mainFilter === 'menú') {
        return (
          <div> 
            <Platos menu={menu} subFilter={subFilter} />
          </div>
        ) 
      } else if (mainFilter === 'postres y digestivos') {
        return (
          <div> 
            <Postres menu={menu} subFilter={subFilter} />
          </div>
        ) 
      }
    }


export default Menu