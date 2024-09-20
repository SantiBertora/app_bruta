import React from 'react'
import BebidasCardEN from './BebidasCardEN'

const DrinksSeccion = ({ id, titulo, productos, mostrarProducto }) => {
    return (
        <div>
        <h2 id={id} className="titulo">
            {titulo}
        </h2>
        {productos
            .filter((producto) => producto.activo === true)
            .map((producto) => (
            <BebidasCardEN
                key={producto.nombre}
                producto={producto}
                mostrarProducto={mostrarProducto}
            />
            ))}
        </div>
    );
    }

export default DrinksSeccion;