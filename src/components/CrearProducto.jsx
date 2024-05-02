import React from 'react'
import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Checkbox } from "@chakra-ui/react";


const CrearProducto = ({ isOpen, onClose, onCreate }) => {
    const [coleccion, setColeccion] = useState('bebidas');
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [foto, setFoto] = useState('');
    const [activo, setActivo] = useState(true);
    const [clasificacion, setClasificacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [dulce, setDulce] = useState(0);
    const [amargo, setAmargo] = useState(0);
    const [acido, setAcido] = useState(0);
    const [picante, setPicante] = useState(false);
    const [alcoholico, setAlcoholico] = useState(0);
    const [tipo, setTipo] = useState('');
    const [veggie, setVeggie] = useState(false);
    const [opcionPicante, setOpcionPicante] = useState(false);
    const [sinGluten, setSinGluten] = useState(false);
    const [opcionVeggie, setOpcionVeggie] = useState(false);
    const [opcionVegano, setOpcionVegano] = useState(false);
    const [opcionSinGluten, setOpcionSinGluten] = useState(false);
    const [vegano, setVegano] = useState(false);
    const [error, setError] = useState('');
    const [origen, setOrigen] = useState('');
    const [cepa, setCepa] = useState('');

  
  const handleColeccionChange = (e) => {
    setColeccion(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePrecioChange = (e) => {
    setPrecio(e.target.value);
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.value);
  };

  const handleActivoChange = (e) => {
    setActivo(e.target.checked);
  };

  const handleClasificacionChange = (e) => {
    setClasificacion(e.target.value);
  };

  const handleVeggieChange = (e) => {
    setVeggie(e.target.checked);
  };

  const handleVeganoChange = (e) => {
    setVegano(e.target.checked);
  };

  const handleSinGlutenChange = (e) => {
    setSinGluten(e.target.checked);
  };

  const handleOpcionVeggieChange = (e) => {
    setOpcionVeggie(e.target.checked);
  };

  const handleOpcionVeganoChange = (e) => {
    setOpcionVegano(e.target.checked);
  };

  const handleOpcionSinGlutenChange = (e) => {
    setOpcionSinGluten(e.target.checked);
  };

  const handlePicanteChange = (e) => {
    setPicante(e.target.checked);
  };

  const handleOpcionPicanteChange = (e) => {
    setOpcionPicante(e.target.checked);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !nombre || !precio || !clasificacion || !activo || !tipo) {
        setError('ID, nombre y precio son campos requeridos.');
        return;
      }
      setError('');
    const nuevoProducto = {
        id: id,
        nombre: nombre,
        precio: precio,
        foto: foto,
        activo: activo,
        clasificacion: clasificacion,
        dulce: dulce,
        descripcion: descripcion,
        acido: acido,
        amargo: amargo,
        alcoholico: alcoholico,
        picante: picante,
        tipo: tipo,
        veggie: veggie,
        vegano: vegano,
        sinGluten: sinGluten,
        opcionVeggie: opcionVeggie,
        opcionVegano: opcionVegano,
        opcionSinGluten: opcionSinGluten,
        opcionPicante: opcionPicante
      };
      onCreate(nuevoProducto, coleccion);
      onClose();
    };

    

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Crear Nuevo Producto</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
    <form onSubmit={handleSubmit}>
      <label>
        Selecciona la colección:
        <select value={coleccion} onChange={handleColeccionChange}>
          <option value="bebidas">Bebidas</option>
          <option value="platos">Platos</option>
          <option value="vinos">Vinos</option>
          <option value="postres">Postres</option>
        </select>
      </label>
      <input placeholder="ID" value={id} onChange={handleIdChange} />
      <input placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
            <input placeholder="Precio" value={precio} onChange={handlePrecioChange} />
            <input placeholder="Foto" value={foto} onChange={handleFotoChange} />
            <label>
              Activo:
              <input type="checkbox" checked={activo} onChange={handleActivoChange} />
            </label>
            {coleccion === 'bebidas' && (
                <>
            <label>
              Selecciona la clasificación:
              <select value={clasificacion} onChange={handleClasificacionChange}>
                <option value="aperitivo">Aperitivo</option>
                <option value="gintonic">Gintonic</option>
                <option value="autor">Autor</option>
                <option value="clasico">Clásico</option>
                <option value="sin alcohol">Sin Alcohol</option>
                <option value="destilado">Destilado</option>
              </select>
            </label>
            {clasificacion === 'aperitivo' || clasificacion === 'gintonic' || clasificacion === 'autor' || clasificacion === 'clasico' || clasificacion === 'sin alcohol' ?
              <>
                <input placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <label>
                  Dulce:
                  <select value={dulce} onChange={(e) => setDulce(e.target.value)}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </label>
                <label>
                  Amargo:
                  <select value={amargo} onChange={(e) => setAmargo(e.target.value)}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </label>
                <label>
                  Ácido:
                  <select value={acido} onChange={(e) => setAcido(e.target.value)}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </label>
                <label>
                  Picante:
                  <Checkbox checked={picante} onChange={(e) => setPicante(e.target.checked)} />
                </label>
                {clasificacion !== 'sin alcohol' &&
                  <label>
                    Alcoholico:
                    <select value={alcoholico} onChange={(e) => setAlcoholico(e.target.value)}>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </label>
                }
              </>
              : null}
            {clasificacion === 'destilado' &&
              <label>
                Tipo:
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                  <option value="whisky">Whisky</option>
                  <option value="tequila">Tequila</option>
                  <option value="ron">Ron</option>
                  <option value="otro">Otro</option>
                </select>
              </label>
            }
            </>
            )}
            {coleccion === 'platos' && (
              <>
                <label>
                  Veggie:
                  <input
                    type="checkbox"
                    checked={veggie}
                    onChange={handleVeggieChange}
                  />
                </label>
                <label>
                  Vegano:
                  <input
                    type="checkbox"
                    checked={vegano}
                    onChange={handleVeganoChange}
                  />
                </label>
                <label>
                  Sin Gluten:
                  <input
                    type="checkbox"
                    checked={sinGluten}
                    onChange={handleSinGlutenChange}
                  />
                </label>
                <label>
                  Opción Veggie:
                  <input
                    type="checkbox"
                    checked={opcionVeggie}
                    onChange={handleOpcionVeggieChange}
                  />
                </label>
                <label>
                  Opción Vegano:
                  <input
                    type="checkbox"
                    checked={opcionVegano}
                    onChange={handleOpcionVeganoChange}
                  />
                </label>
                <label>
                  Opción Sin Gluten:
                  <input
                    type="checkbox"
                    checked={opcionSinGluten}
                    onChange={handleOpcionSinGlutenChange}
                  />
                </label>
                <label>
                  Picante:
                  <input
                    type="checkbox"
                    checked={picante}
                    onChange={handlePicanteChange}
                  />
                </label>
                <label>
                  Opción Picante:
                  <input
                    type="checkbox"
                    checked={opcionPicante}
                    onChange={handleOpcionPicanteChange}
                  />
                </label>
              </>
            )}
            {coleccion === 'vinos' && (
                <>
                <label>
                    clasificación:
                    <select value={clasificacion} onChange={handleClasificacionChange}>
                        <option value="tinto">Tinto</option>
                        <option value="blanco">Blanco</option>
                        <option value="rose">Rosé</option>
                        <option value="espumante">Espumante</option>
                    </select>
                </label>
                {clasificacion === 'tinto' &&(
                <label>
                    cepa:
                    <select value={cepa} onChange={(e) => setCepa(e.target.value)}>
                        <option value="cabernet sauvignon">Cabernet Sauvignon</option>
                        <option value="tannat">Tannat</option>
                        <option value="pinot noir">Pinot Noir</option>
                        <option value="cabernet franc">Cabernet Franc</option>
                        <option value="malbec">Malbec</option>
                        <option value="ensamblaje">Ensamblaje</option>
                        <option value="otra">Otra</option>
                    </select>
                    <input placeholder="Origen" value={origen} onChange={(e) => setOrigen(e.target.value)}/>
                </label>
                )}
                {clasificacion === 'blanco' &&(
                <label>
                    cepa:
                    <select value={cepa} onChange={(e) => setCepa(e.target.value)}>
                        <option value="torrontes">Torrontes</option>
                        <option value="albariño">Albariño</option>
                        <option value="sauvignon blanc">Sauvignon Blanc</option>
                        <option value="chardonnay">Chardonnay</option>
                        <option value="otra">Otra</option>
                    </select>
                    <input placeholder="Origen" value={origen} onChange={(e) => setOrigen(e.target.value())}/>
                </label>
                )}
                {clasificacion === 'rose' &&(
                                    <input placeholder="Origen" value={origen} onChange={(e) => setOrigen(e.target.value)}/>
                )}
                {clasificacion === 'espumante' &&(
                                    <input placeholder="Origen" value={origen} onChange={(e) => setOrigen(e.target.value)}/>
                )}
                </>)}
                {coleccion === 'postres' && (
                    <>
                    <label>
                        clasificacion
                        <select value={clasificacion} onChange={handleClasificacionChange}>
                            <option value="postre">Postre</option>
                            <option value="cafe">Café</option>
                            <option value="digestivo">Digestivo</option>
                        </select>
                    </label>
                    {clasificacion === 'postre' && (
                        <label>
                        <input placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                            sin Gluten:
                            <input type="checkbox" checked={sinGluten} onChange={handleSinGlutenChange}/>
                        </label>
                    )}
                    </>
                )
                }
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Crear Producto</button>
          </form>
        </ModalBody>
        <ModalFooter>
          {/* Botones para manejar el cierre del modal */}
          <button onClick={onClose}>Cancelar</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CrearProducto;