import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Drinks from './Drinks';
import Wines from './Wines';
import Courses from './Courses';
import Desserts from './Desserts';

const EnglishMenu = ({ mainFilter, subFilter}) => {

    const [courses, setCourses] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [wines, setWines] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
  
      const coursesCollection = collection(db, 'platos');
    getDocs(coursesCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setCourses(docs);
    });
  }, []);
  
  useEffect(() => {
    const db = getFirestore();

    const drinksCollection = collection(db, 'bebidas');
    console.log(drinksCollection)
    getDocs(drinksCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setDrinks(docs);
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();

    const dessertsCollection = collection(db, 'postres');
    getDocs(dessertsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setDesserts(docs);
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const winesCollection = collection(db, 'vinos');
    getDocs(winesCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setWines(docs);
    });
  }, []);

  let menu = [];

  if (mainFilter === 'courses') {
    menu.push(...courses);
  } else if (mainFilter === 'drinks') {
    menu.push(...drinks);
  } else if (mainFilter === 'desserts') {
    menu.push(...desserts);
  } else if (mainFilter === 'wines') {
    menu.push(...wines);
  };

  if (mainFilter === 'drinks') {
    return (
      <div> 
        <Drinks menu={menu} subFilter={subFilter} />
      </div>
    ) 
  } else if (mainFilter === 'wines') {
    return (
      <div> 
        <Wines menu={menu} subFilter={subFilter} />
      </div>
    ) 
  } else if (mainFilter === 'courses') {
    return (
      <div> 
        <Courses menu={menu} subFilter={subFilter} />
      </div>
    ) 
  } else if (mainFilter === 'desserts') {
    return (
      <div> 
        <Desserts menu={menu} subFilter={subFilter} />
      </div>
    ) 
  }
}

export default EnglishMenu
