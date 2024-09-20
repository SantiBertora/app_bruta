import React, { useState } from "react";
import CrearProducto from "./CrearProducto";

const CrearProductoContainer = ({ isOpen, onClose, onCreate }) => {
  const [coleccion, setColeccion] = useState("bebidas");
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [foto, setFoto] = useState("");
  const [activo, setActivo] = useState(true);
  const [clasificacion, setClasificacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [dulce, setDulce] = useState(0);
  const [amargo, setAmargo] = useState(0);
  const [acido, setAcido] = useState(0);
  const [picante, setPicante] = useState(false);
  const [alcoholico, setAlcoholico] = useState(0);
  const [tipo, setTipo] = useState("");
  const [veggie, setVeggie] = useState(false);
  const [opcionPicante, setOpcionPicante] = useState(false);
  const [sinGluten, setSinGluten] = useState(false);
  const [opcionVeggie, setOpcionVeggie] = useState(false);
  const [opcionVegano, setOpcionVegano] = useState(false);
  const [opcionSinGluten, setOpcionSinGluten] = useState(false);
  const [vegano, setVegano] = useState(false);
  const [error, setError] = useState("");
  const [origen, setOrigen] = useState("");
  const [cepa, setCepa] = useState("");

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleCheckboxChange = (setter) => (e) => setter(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !nombre || !precio || !clasificacion) {
      setError("ID, nombre y precio son campos requeridos.");
      return;
    }
    setError("");
    const nuevoProducto = {
      id,
      nombre,
      precio,
      foto,
      activo,
      clasificacion,
      dulce,
      descripcion,
      acido,
      amargo,
      alcoholico,
      picante,
      tipo,
      veggie,
      vegano,
      sinGluten,
      opcionVeggie,
      opcionVegano,
      opcionSinGluten,
      opcionPicante,
    };
    onCreate(nuevoProducto, coleccion);
    // Resetear los valores del formulario
    setId("");
    setNombre("");
    setPrecio("");
    setFoto("");
    setActivo(true);
    setClasificacion("");
    setDescripcion("");
    setDulce(0);
    setAmargo(0);
    setAcido(0);
    setPicante(false);
    setAlcoholico(0);
    setTipo("");
    setVeggie(false);
    setVegano(false);
    setSinGluten(false);
    setOpcionVeggie(false);
    setOpcionVegano(false);
    setOpcionSinGluten(false);
    setOpcionPicante(false);
    setOrigen("");
    setCepa("");
    onClose();
  };

  return (
    <CrearProducto
      isOpen={isOpen}
      onClose={onClose}
      coleccion={coleccion}
      setColeccion={handleChange(setColeccion)}
      id={id}
      setId={handleChange(setId)}
      nombre={nombre}
      setNombre={handleChange(setNombre)}
      precio={precio}
      setPrecio={handleChange(setPrecio)}
      foto={foto}
      setFoto={handleChange(setFoto)}
      activo={activo}
      setActivo={handleCheckboxChange(setActivo)}
      clasificacion={clasificacion}
      setClasificacion={handleChange(setClasificacion)}
      descripcion={descripcion}
      setDescripcion={handleChange(setDescripcion)}
      dulce={dulce}
      setDulce={handleChange(setDulce)}
      amargo={amargo}
      setAmargo={handleChange(setAmargo)}
      acido={acido}
      setAcido={handleChange(setAcido)}
      picante={picante}
      setPicante={handleCheckboxChange(setPicante)}
      alcoholico={alcoholico}
      setAlcoholico={handleChange(setAlcoholico)}
      tipo={tipo}
      setTipo={handleChange(setTipo)}
      veggie={veggie}
      setVeggie={handleCheckboxChange(setVeggie)}
      opcionPicante={opcionPicante}
      setOpcionPicante={handleCheckboxChange(setOpcionPicante)}
      sinGluten={sinGluten}
      setSinGluten={handleCheckboxChange(setSinGluten)}
      opcionVeggie={opcionVeggie}
      setOpcionVeggie={handleCheckboxChange(setOpcionVeggie)}
      opcionVegano={opcionVegano}
      setOpcionVegano={handleCheckboxChange(setOpcionVegano)}
      opcionSinGluten={opcionSinGluten}
      setOpcionSinGluten={handleCheckboxChange(setOpcionSinGluten)}
      vegano={vegano}
      setVegano={handleCheckboxChange(setVegano)}
      origen={origen}
      setOrigen={handleChange(setOrigen)}
      cepa={cepa}
      setCepa={handleChange(setCepa)}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default CrearProductoContainer;
