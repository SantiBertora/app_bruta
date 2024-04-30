import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";

const ControlProductos = () => {
  const [collectionRenderizada, setColectionRenderizada] = useState("bebidas");
  const filtros = ["bebidas", "vinos", "platos", "postres"];
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

  const handleChangeActivo = async (producto) => {

    const db = getFirestore();
    const productRef = doc(db, collectionRenderizada, producto.id);

    try {
      // Cambiar el estado de 'activo' del producto en la base de datos
      await updateDoc(productRef, {
        activo: !producto.activo // Invertir el valor de 'activo'
      });

      // Actualizar el estado local del producto
      if (collectionRenderizada === "platos") {
        setPlatos(platos.map((p) => (p.id === producto.id ? { ...p, activo: !producto.activo } : p)));
      } else if (collectionRenderizada === "bebidas") {
        setBebidas(bebidas.map((b) => (b.id === producto.id ? { ...b, activo: !producto.activo } : b)));
      } else if (collectionRenderizada === "postres") {
        setPostres(postres.map((p) => (p.id === producto.id ? { ...p, activo: !producto.activo } : p)));
      } else if (collectionRenderizada === "vinos") {
        setVinos(vinos.map((v) => (v.id === producto.id ? { ...v, activo: !producto.activo } : v)));
      }

      // Mostrar alerta de confirmación
      alert(`El estado de '${producto.nombre}' ha sido actualizado.`);
    } catch (error) {
      console.error("Error al actualizar el estado:", error.message);
    }
  };

  let menu = [];

  if (collectionRenderizada === 'platos') {
    menu.push(...platos);
  } else if (collectionRenderizada === 'bebidas') {
    menu.push(...bebidas);
  } else if (collectionRenderizada === 'postres') {
    menu.push(...postres);
  } else if (collectionRenderizada === 'vinos') {
    menu.push(...vinos);
  }

  return (
    <div>
      <div id="filtros">
        {filtros.map((filtro) => (
          <button
            key={filtro}
            onClick={() => setColectionRenderizada(filtro)}
          >
            {filtro}
          </button>
        ))}
        </div>
      {menu
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <div
            key={producto.nombre}
            className="card"
          >
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <input
              type="checkbox"
              checked={producto.activo}
              onChange={() => handleChangeActivo(producto)}
            />
            </div>
          </div>
        ))}
        {menu
        .filter((producto) => producto.activo === false)
        .map((producto) => (
          <div
            key={producto.nombre}
            className="card"
          >
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <input
              type="checkbox"
              checked={producto.activo}
              onChange={() => handleChangeActivo(producto)}
            />
            </div>
          </div>
        ))}
    </div>
  )
}

export default ControlProductos