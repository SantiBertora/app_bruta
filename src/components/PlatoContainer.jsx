import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Plato from './Plato'

const ProductoContainer = () => {

  const {id} = useParams()
  const [producto, setProducto] = useState({})

  useEffect(() => {
    const db = getFirestore();

    const unProducto = doc(db, "platos", `${id}`);

    getDoc(unProducto).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data()
        setProducto(docs);
      }
    });
  }, []);

  console.log(producto)

  return (
    <div>
      <Plato producto={producto}/>
    </div>
  )
  }


export default ProductoContainer