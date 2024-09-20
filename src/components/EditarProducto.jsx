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

const EditarProducto = ({
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
  vegano,
  setVegano,
  sinGluten,
  setSinGluten,
  opcionVeggie,
  setOpcionVeggie,
  opcionVegano,
  setOpcionVegano,
  opcionSinGluten,
  setOpcionSinGluten,
  opcionPicante,
  setOpcionPicante,
  descripcion,
  setDescripcion,
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
        <ModalHeader>Editar Producto</ModalHeader>
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
              <input
                type="checkbox"
                checked={activo}
                onChange={setActivo}
              />
            </label>
            {/* Sección condicional para mostrar el componente adecuado según la colección */}
            {coleccion === "bebidas" && (
              <div>
                <label>
                  Selecciona la clasificación:
                  <select
                    value={clasificacion}
                    onChange={setClasificacion}
                  >
                    <option value="aperitivo">Aperitivo</option>
                    <option value="gintonic">Gintonic</option>
                    <option value="autor">Autor</option>
                    <option value="clasico">Clásico</option>
                    <option value="sin alcohol">Sin Alcohol</option>
                    <option value="destilado">Destilado</option>
                  </select>
                </label>
                <input
                  placeholder="Descripción"
                  value={descripcion}
                  onChange={setDescripcion}
                />
                {/* Agregar inputs adicionales */}
              </div>
            )}
            {/* Sección similar para platos, vinos y postres */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="btnProducto" type="submit">
              Guardar Cambios
            </button>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btnProducto" onClick={onClose}>
            Cancelar
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditarProducto;
