import React from "react";

const ClasificacionPlatos = ({
  clasificacion,
  setClasificacion,
  descripcion,
  setDescripcion,
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
}) => {
  return (
    <>
      <label>
        Clasificación:
        <select value={clasificacion} onChange={setClasificacion}>
          <option value="entrada">Entrada</option>
          <option value="principal">Principal</option>
          <option value="guarnicion">Guarnición</option>
          <option value="ensalada">Ensalada</option>
          <option value="sopa">Sopa</option>
          <option value="pasta">Pasta</option>
        </select>
      </label>
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={setDescripcion}
      />
      <label>
        Veggie:
        <input type="checkbox" checked={veggie} onChange={setVeggie} />
      </label>
      <label>
        Vegano:
        <input type="checkbox" checked={vegano} onChange={setVegano} />
      </label>
      <label>
        Sin Gluten:
        <input
          type="checkbox"
          checked={sinGluten}
          onChange={setSinGluten}
        />
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
      <label>
        Opción Picante:
        <input
          type="checkbox"
          checked={opcionPicante}
          onChange={setOpcionPicante}
        />
      </label>
    </>
  );
};

export default ClasificacionPlatos;
