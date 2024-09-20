import React from "react";
import CrearProducto from "./CrearProducto";
import EditarProductoContainer from "./EditarProductosContainer";

const ControlProductos = ({
  filtros,
  productos,
  collectionRenderizada,
  setCollectionRenderizada,
  mostrarFormulario,
  handleMostrarFormulario,
  handleCerrarFormulario,
  handleCrearProducto,
  productoEdit,
  mostrarFormularioEdicion,
  handleEditarProducto,
  handleCerrarFormularioEdicion,
  handleActualizarProducto,
  handleChangeActivo,
  handleEliminarProducto,
}) => {
  productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <div>
      <div id="filtros">
        {filtros.map((filtro) => (
          <button key={filtro} onClick={() => setCollectionRenderizada(filtro)}>
            {filtro}
          </button>
        ))}
      </div>
      <button onClick={handleMostrarFormulario}>Crear Producto</button>
      <CrearProducto
        isOpen={mostrarFormulario}
        onClose={handleCerrarFormulario}
        onCreate={handleCrearProducto}
      />
      <EditarProductoContainer
        isOpen={mostrarFormularioEdicion}
        onClose={handleCerrarFormularioEdicion}
        onEdit={handleActualizarProducto}
        productoEdit={productoEdit}
      />
      {productos
        .filter((producto) => producto.activo)
        .map((producto) => (
          <div key={producto.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <input
                type="checkbox"
                checked={producto.activo}
                onChange={() => handleChangeActivo(producto)}
              />
              <button onClick={() => handleEditarProducto(producto)}>Editar</button>
              <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      {productos
        .filter((producto) => !producto.activo)
        .map((producto) => (
          <div key={producto.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <input
                type="checkbox"
                checked={producto.activo}
                onChange={() => handleChangeActivo(producto)}
              />
              <button onClick={() => handleEditarProducto(producto)}>Editar</button>
              <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ControlProductos;
