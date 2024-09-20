import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
} from "@chakra-ui/react";

const CrearProductoForm = ({
  isOpen,
  onClose,
  coleccion,
  setColeccion,
  id,
  setId,
  nombre,
  setNombre,
  precio,
  setPrecio,
  foto,
  setFoto,
  activo,
  setActivo,
  clasificacion,
  setClasificacion,
  descripcion,
  setDescripcion,
  dulce,
  setDulce,
  amargo,
  setAmargo,
  acido,
  setAcido,
  picante,
  setPicante,
  alcoholico,
  setAlcoholico,
  tipo,
  setTipo,
  veggie,
  setVeggie,
  opcionPicante,
  setOpcionPicante,
  sinGluten,
  setSinGluten,
  opcionVeggie,
  setOpcionVeggie,
  opcionVegano,
  setOpcionVegano,
  opcionSinGluten,
  setOpcionSinGluten,
  vegano,
  setVegano,
  origen,
  setOrigen,
  cepa,
  setCepa,
  error,
  handleSubmit,
}) => {
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
              <select value={coleccion} onChange={setColeccion}>
                <option value="bebidas">Bebidas</option>
                <option value="platos">Platos</option>
                <option value="vinos">Vinos</option>
                <option value="postres">Postres</option>
              </select>
            </label>
            <input placeholder="ID" value={id} onChange={setId} />
            <input placeholder="Nombre" value={nombre} onChange={setNombre} />
            <input placeholder="Precio" value={precio} onChange={setPrecio} />
            <input placeholder="Foto" value={foto} onChange={setFoto} />
            <label>
              Activo:
              <Checkbox isChecked={activo} onChange={setActivo} />
            </label>
            {/* Aquí agregamos las diferentes secciones del formulario para cada colección */}
            {/* Bebidas */}
            {coleccion === "bebidas" && (
              <>
                <label>
                  Selecciona la clasificación:
                  <select value={clasificacion} onChange={setClasificacion}>
                    <option value="aperitivo">Aperitivo</option>
                    <option value="gintonic">Gintonic</option>
                    <option value="autor">Autor</option>
                    <option value="clasico">Clásico</option>
                    <option value="sin alcohol">Sin Alcohol</option>
                    <option value="destilado">Destilado</option>
                  </select>
                </label>
                {["aperitivo", "gintonic", "autor", "clasico", "sin alcohol"].includes(clasificacion) && (
                  <>
                    <input
                      placeholder="Descripción"
                      value={descripcion}
                      onChange={setDescripcion}
                    />
                    <label>
                      Dulce:
                      <input
                        type="range"
                        min={0}
                        max={5}
                        value={dulce}
                        onChange={setDulce}
                      />
                    </label>
                    <label>
                      Amargo:
                      <input
                        type="range"
                        min={0}
                        max={5}
                        value={amargo}
                        onChange={setAmargo}
                      />
                    </label>
                    <label>
                      Ácido:
                      <input
                        type="range"
                        min={0}
                        max={5}
                        value={acido}
                        onChange={setAcido}
                      />
                    </label>
                    <label>
                      ¿Es picante?
                      <Checkbox isChecked={picante} onChange={setPicante} />
                    </label>
                    <label>
                      Graduación alcohólica (%):
                      <input
                        placeholder="Alcohol"
                        value={alcoholico}
                        onChange={setAlcoholico}
                      />
                    </label>
                  </>
                )}
              </>
            )}
            {/* Vinos */}
            {coleccion === "vinos" && (
              <>
                <input placeholder="Cepa" value={cepa} onChange={setCepa} />
                <input
                  placeholder="Origen"
                  value={origen}
                  onChange={setOrigen}
                />
                <label>
                  Tipo:
                  <select value={tipo} onChange={setTipo}>
                    <option value="espumante">Espumante</option>
                    <option value="rosado">Rosado</option>
                    <option value="blanco">Blanco</option>
                    <option value="tinto">Tinto</option>
                    <option value="dulce">Dulce</option>
                  </select>
                </label>
                <label>
                  ¿Es veggie?
                  <Checkbox isChecked={veggie} onChange={setVeggie} />
                </label>
              </>
            )}
            {/* Platos */}
            {coleccion === "platos" && (
              <>
                <label>
                  Clasificación:
                  <select value={clasificacion} onChange={setClasificacion}>
                    <option value="entradas">Entradas</option>
                    <option value="principales">Principales</option>
                    <option value="guarniciones">Guarniciones</option>
                    <option value="ensaladas">Ensaladas</option>
                  </select>
                </label>
                <label>
                  ¿Es vegano?
                  <Checkbox isChecked={vegano} onChange={setVegano} />
                </label>
                <label>
                  ¿Es veggie?
                  <Checkbox isChecked={veggie} onChange={setVeggie} />
                </label>
                <label>
                  ¿Es sin gluten?
                  <Checkbox isChecked={sinGluten} onChange={setSinGluten} />
                </label>
                <label>
                  ¿Tiene opción vegana?
                  <Checkbox isChecked={opcionVegano} onChange={setOpcionVegano} />
                </label>
                <label>
                  ¿Tiene opción veggie?
                  <Checkbox isChecked={opcionVeggie} onChange={setOpcionVeggie} />
                </label>
                <label>
                  ¿Tiene opción sin gluten?
                  <Checkbox
                    isChecked={opcionSinGluten}
                    onChange={setOpcionSinGluten}
                  />
                </label>
              </>
            )}
            {/* Postres */}
            {coleccion === "postres" && (
              <>
                <label>
                  ¿Es vegano?
                  <Checkbox isChecked={vegano} onChange={setVegano} />
                </label>
                <label>
                  ¿Es veggie?
                  <Checkbox isChecked={veggie} onChange={setVeggie} />
                </label>
                <label>
                  ¿Es sin gluten?
                  <Checkbox isChecked={sinGluten} onChange={setSinGluten} />
                </label>
                <label>
                  ¿Tiene opción vegana?
                  <Checkbox isChecked={opcionVegano} onChange={setOpcionVegano} />
                </label>
                <label>
                  ¿Tiene opción veggie?
                  <Checkbox isChecked={opcionVeggie} onChange={setOpcionVeggie} />
                </label>
                <label>
                  ¿Tiene opción sin gluten?
                  <Checkbox
                    isChecked={opcionSinGluten}
                    onChange={setOpcionSinGluten}
                  />
                </label>
              </>
            )}
            {error && <p>{error}</p>}
            <button type="submit">Crear Producto</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Cerrar</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CrearProductoForm;
