import React from "react";

const ClasificacionPostres = ({
  clasificacion,
  setClasificacion,
  descripcion,
  setDescripcion,
  dulce,
  setDulce,
  acido,
  setAcido,
  amargo,
  setAmargo,
  opcionVeggie,
  setOpcionVeggie,
  opcionVegano,
  setOpcionVegano,
  opcionSinGluten,
  setOpcionSinGluten,
}) => {
  return (
    <>
      <label>
        Clasificación:
        <select value={clasificacion} onChange={setClasificacion}>
          <option value="tarta">Tarta</option>
          <option value="helado">Helado</option>
          <option value="flan">Flan</option>
          <option value="fruta">Fruta</option>
          <option value="chocolate">Chocolate</option>
          <option value="galletas">Galletas</option>
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
        Ácido:
        <input type="number" value={acido} onChange={setAcido} />
      </label>
      <label>
        Amargo:
        <input type="number" value={amargo} onChange={setAmargo} />
      </label>
      <label>
        Opción Veggie:
        <input
          type="checkbox"
          checked={opcionVeggie}
          onChange={setOpcionVeggie}
        />
      </label>
      <label>
        Opción Vegano:
        <input
          type="checkbox"
          checked={opcionVegano}
          onChange={setOpcionVegano}
        />
      </label>
      <label>
        Opción Sin Gluten:
        <input
          type="checkbox"
          checked={opcionSinGluten}
          onChange={setOpcionSinGluten}
        />
      </label>
    </>
  );
};

export default ClasificacionPostres;
