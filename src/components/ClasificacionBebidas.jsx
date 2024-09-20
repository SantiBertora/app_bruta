import React from "react";

const ClasificacionBebidas = ({
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
}) => {
  return (
    <>
      <label>
        Clasificación:
        <select value={clasificacion} onChange={setClasificacion}>
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
      <label>
        Dulce:
        <input type="number" value={dulce} onChange={setDulce} />
      </label>
      <label>
        Amargo:
        <input type="number" value={amargo} onChange={setAmargo} />
      </label>
      <label>
        Ácido:
        <input type="number" value={acido} onChange={setAcido} />
      </label>
      <label>
        Picante:
        <input
          type="checkbox"
          checked={picante}
          onChange={setPicante}
        />
      </label>
      <label>
        Alcoholico:
        <input
          type="number"
          value={alcoholico}
          onChange={setAlcoholico}
        />
      </label>
    </>
  );
};

export default ClasificacionBebidas;
