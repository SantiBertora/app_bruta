import React, { useState, useEffect } from "react";
import EditarProducto from "./EditarProducto"; // Importamos el componente de presentación

const EditarProductoContainer = ({ isOpen, onClose, onEdit, productoEdit }) => {
  // Manejo de estados
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

  // Efecto para cargar los datos del producto a editar
  useEffect(() => {
    if (productoEdit) {
      setColeccion(productoEdit.coleccion);
      setId(productoEdit.id);
      setNombre(productoEdit.nombre);
      setPrecio(productoEdit.precio);
      setFoto(productoEdit.foto);
      setActivo(productoEdit.activo);
      setClasificacion(productoEdit.clasificacion);
      setDescripcion(productoEdit.descripcion);
      setDulce(productoEdit.dulce);
      setAmargo(productoEdit.amargo);
      setAcido(productoEdit.acido);
      setPicante(productoEdit.picante);
      setAlcoholico(productoEdit.alcoholico);
      setTipo(productoEdit.tipo);
      setVeggie(productoEdit.veggie);
      setVegano(productoEdit.vegano);
      setSinGluten(productoEdit.sinGluten);
      setOpcionVeggie(productoEdit.opcionVeggie);
      setOpcionVegano(productoEdit.opcionVegano);
      setOpcionSinGluten(productoEdit.opcionSinGluten);
      setOpcionPicante(productoEdit.opcionPicante);
      setOrigen(productoEdit.origen);
      setCepa(productoEdit.cepa);
    }
  }, [productoEdit]);

  // Manejo de cambios en los inputs
  const handleInputChange = (setter) => (e) => setter(e.target.value);
  const handleCheckboxChange = (setter) => (e) => setter(e.target.checked);

  // Función para guardar cambios
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !nombre || !precio || !clasificacion) {
      setError("ID, nombre y precio son campos requeridos.");
      return;
    }
    setError("");
    const productoActualizado = {
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
      origen,
      cepa,
    };
    onEdit(productoActualizado, coleccion);
    onClose();
  };

  return (
    <EditarProducto
      isOpen={isOpen}
      onClose={onClose}
      coleccion={coleccion}
      setColeccion={handleInputChange(setColeccion)}
      id={id}
      setId={handleInputChange(setId)}
      nombre={nombre}
      setNombre={handleInputChange(setNombre)}
      precio={precio}
      setPrecio={handleInputChange(setPrecio)}
      foto={foto}
      setFoto={handleInputChange(setFoto)}
      activo={activo}
      setActivo={handleCheckboxChange(setActivo)}
      clasificacion={clasificacion}
      setClasificacion={handleInputChange(setClasificacion)}
      dulce={dulce}
      setDulce={handleInputChange(setDulce)}
      amargo={amargo}
      setAmargo={handleInputChange(setAmargo)}
      acido={acido}
      setAcido={handleInputChange(setAcido)}
      picante={picante}
      setPicante={handleCheckboxChange(setPicante)}
      alcoholico={alcoholico}
      setAlcoholico={handleInputChange(setAlcoholico)}
      tipo={tipo}
      setTipo={handleInputChange(setTipo)}
      veggie={veggie}
      setVeggie={handleCheckboxChange(setVeggie)}
      vegano={vegano}
      setVegano={handleCheckboxChange(setVegano)}
      sinGluten={sinGluten}
      setSinGluten={handleCheckboxChange(setSinGluten)}
      opcionVeggie={opcionVeggie}
      setOpcionVeggie={handleCheckboxChange(setOpcionVeggie)}
      opcionVegano={opcionVegano}
      setOpcionVegano={handleCheckboxChange(setOpcionVegano)}
      opcionSinGluten={opcionSinGluten}
      setOpcionSinGluten={handleCheckboxChange(setOpcionSinGluten)}
      opcionPicante={opcionPicante}
      setOpcionPicante={handleCheckboxChange(setOpcionPicante)}
      descripcion={descripcion}
      setDescripcion={handleInputChange(setDescripcion)}
      origen={origen}
      setOrigen={handleInputChange(setOrigen)}
      cepa={cepa}
      setCepa={handleInputChange(setCepa)}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditarProductoContainer;
