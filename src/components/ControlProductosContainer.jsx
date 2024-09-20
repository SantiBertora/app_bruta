import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import ControlProductos from "./ControlProductos";

const ControlProductosContainer = () => {
  const [collectionRenderizada, setCollectionRenderizada] = useState("bebidas");
  const filtros = ["bebidas", "vinos", "platos", "postres"];
  const [productos, setProductos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEdit, setProductoEdit] = useState(null);
  const [mostrarFormularioEdicion, setMostrarFormularioEdicion] = useState(false);

  useEffect(() => {
    const obtenerProductos = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, collectionRenderizada);
      const snapshot = await getDocs(collectionRef);
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(docs);
    };

    obtenerProductos();
  }, [collectionRenderizada]);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleCrearProducto = async (nuevoProducto) => {
    try {
      const db = getFirestore();
      const nuevaColleccionRef = collection(db, collectionRenderizada);
      const productId = nuevoProducto.id;
      const productRef = doc(nuevaColleccionRef, productId);
      await setDoc(productRef, nuevoProducto);

      // Actualizar el estado local con el nuevo producto
      setProductos([...productos, { id: productId, ...nuevoProducto }]);
      alert("Producto creado exitosamente.");
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
    }
  };

  const handleEditarProducto = (producto) => {
    setProductoEdit(producto);
    setMostrarFormularioEdicion(true);
  };

  const handleCerrarFormularioEdicion = () => {
    setMostrarFormularioEdicion(false);
    setProductoEdit(null);
  };

  const handleActualizarProducto = async (productoActualizado) => {
    try {
      const db = getFirestore();
      const productRef = doc(db, collectionRenderizada, productoActualizado.id);
      await updateDoc(productRef, productoActualizado);

      // Actualizar el estado local con el producto editado
      setProductos(
        productos.map((producto) =>
          producto.id === productoActualizado.id ? productoActualizado : producto
        )
      );
      alert("Producto actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el producto:", error.message);
    }
  };

  const handleChangeActivo = async (producto) => {
    const db = getFirestore();
    const productRef = doc(db, collectionRenderizada, producto.id);

    try {
      await updateDoc(productRef, {
        activo: !producto.activo,
      });

      // Actualizar el estado local del producto
      setProductos(
        productos.map((p) =>
          p.id === producto.id ? { ...p, activo: !producto.activo } : p
        )
      );

      alert(`El estado de '${producto.nombre}' ha sido actualizado.`);
    } catch (error) {
      console.error("Error al actualizar el estado:", error.message);
    }
  };

  const handleEliminarProducto = async (id) => {
    try {
      const db = getFirestore();
      const productRef = doc(db, collectionRenderizada, id);
      await deleteDoc(productRef);
      setProductos(productos.filter((producto) => producto.id !== id));
      alert("Producto eliminado.");
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
    }
  };

  return (
    <ControlProductos
      filtros={filtros}
      productos={productos}
      collectionRenderizada={collectionRenderizada}
      setCollectionRenderizada={setCollectionRenderizada}
      mostrarFormulario={mostrarFormulario}
      handleMostrarFormulario={handleMostrarFormulario}
      handleCerrarFormulario={handleCerrarFormulario}
      handleCrearProducto={handleCrearProducto}
      productoEdit={productoEdit}
      mostrarFormularioEdicion={mostrarFormularioEdicion}
      handleEditarProducto={handleEditarProducto}
      handleCerrarFormularioEdicion={handleCerrarFormularioEdicion}
      handleActualizarProducto={handleActualizarProducto}
      handleChangeActivo={handleChangeActivo}
      handleEliminarProducto={handleEliminarProducto}
    />
  );
};

export default ControlProductosContainer;
