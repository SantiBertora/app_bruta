import React from "react";

const ClasificacionVinos = ({
  clasificacion,
  setClasificacion,
  descripcion,
  setDescripcion,
  origen,
  setOrigen,
  cepa,
  setCepa,
  alcoholico,
  setAlcoholico,
  dulce,
  setDulce,
  acido,
  setAcido,
  amargo,
  setAmargo,
}) => {
  return (
    <>
      <label>
        Clasificación:
        <select value={clasificacion} onChange={setClasificacion}>
          <option value="tinto">Tinto</option>
          <option value="blanco">Blanco</option>
          <option value="rosado">Rosado</option>
          <option value="espumante">Espumante</option>
          <option value="licor">Licor</option>
        </select>
      </label>
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={setDescripcion}
      />
      <label>
        Origen:
        <input
          placeholder="País/Región"
          value={origen}
          onChange={setOrigen}
        />
      </label>
      <label>
        Cepa:
        <input placeholder="Tipo de uva" value={cepa} onChange={setCepa} />
      </label>
      <label>
        Alcoholico:
        <input
          type="number"
          value={alcoholico}
          onChange={setAlcoholico}
        />
      </label>
      <label>
        Dulce:
        <input type="number" value={dulce} onChange={setDulce} />
      </label>
      <label>
        Ácido:
        <input type="number" value={acido} onChange={setAcido} />
      </label>
      <label>
        Amargo:
        <input type="number" value={amargo} onChange={setAmargo} />
      </label>
    </>
  );
};

export default ClasificacionVinos;
