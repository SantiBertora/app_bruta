import React from "react";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

const Postres = ({ postres, cafes, digestivos, mostrarProducto }) => {
  return (
    <div>
      <div className="rowLeyenda">
        Sin Gluten ={" "}
        <img
          className="imgCaracteristica"
          src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
          alt="Sin Gluten"
        />
      </div>
      <h2 id="postres" className="titulo">
        POSTRES
      </h2>
      {postres.map((producto) => (
        <Card
          key={producto.nombre}
          className="cardMenu"
          onClick={() => mostrarProducto(producto)}
        >
          <CardBody className="productContainer">
            <div className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
              <Text className="precio">${producto.precio}</Text>
            </div>
            <Text>{producto.descripcion}</Text>
            <div className="caracteristicas">
              {producto.sinGluten === true && (
                <img
                  className="imgCaracteristica"
                  src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
                  alt="sinGluten"
                />
              )}
              {producto.opcionSinGluten === true && (
                <>
                  Con opción{" "}
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
                    alt="sinGluten"
                  />
                </>
              )}
            </div>
          </CardBody>
        </Card>
      ))}
      <h2 id="cafes" className="titulo">
        CAFETERÍA
      </h2>
      {cafes.map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
          <CardBody className="productContainer">
            <div className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
              <Text className="precio">${producto.precio}</Text>
            </div>
          </CardBody>
        </Card>
      ))}
      <h2 id="digestivos" className="titulo">
        DIGESTIVOS
      </h2>
      {digestivos.map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
          <CardBody className="productContainer">
            <div className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
              <Text className="precio">${producto.precio}</Text>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Postres;
