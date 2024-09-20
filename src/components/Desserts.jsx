import React from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

const Desserts = ({ postres, cafes, digestivos, mostrarProducto }) => {
  return (
    <div>
      <div className="rowLeyenda">
        Gluten Free ={" "}
        <img
          className="imgCaracteristica"
          src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
          alt="Sin Gluten"
        />
      </div>
      <h2 id="postres" className="titulo">
        DESSERTS
        </h2>
      {postres.map((producto) => (
          <Card
            key={producto.nombre} 
            className="cardMenu" 
            onClick={() => mostrarProducto(producto)}
            >
            <CardBody className="productContainer">
              <Stack className="datosMenu">
                <Heading size="md">{producto.name}</Heading>
              </Stack>
              <Text className="precio">${producto.precio}</Text>
              <Text>{producto.description}</Text>
              <div className="caracteristicas">
                {producto.sinGluten === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
                    alt="sinGluten"
                  />
                )}
                {producto.sinLactosa === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20lactosa.png?alt=media&token=b25c427c-10bc-4d11-b395-e464a4ca9c53"
                    alt="sinLactosa"
                  />
                )}
                {producto.opcionSinGluten === true && (
                  <>
                    Con opcion{" "}
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
      <h2 id="cafes" className="titulo">COFFEE</h2>
      {cafes
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
              <Stack className="datosMenu">
                <Heading size="md">{producto.name}</Heading>
              </Stack>
              <Text className="precio">${producto.precio}</Text>
            </CardBody>
          </Card>
        ))}
      <h2 id="digestivos" className="titulo">DIGESTIVES</h2>
      {digestivos
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
              <Stack className="datosMenu">
                <Heading size="md">{producto.name}</Heading>
              </Stack>
              <Text className="precio">${producto.precio}</Text>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default Desserts;
