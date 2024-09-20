import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Platos = ({ menu, mostrarProducto, cubierto }) => {
  return (
    <div>
      <div className="leyenda">
        <div className="rowLeyenda">
          Veggie ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/veggie.png?alt=media&token=2fd50ada-b299-4ba4-a489-10f940f89821"
            alt="Veggie"
          />
        </div>
        <div className="rowLeyenda">
          Sin Gluten ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
            alt="Sin Gluten"
          />
        </div>
        <div className="rowLeyenda">
          Picante ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
            alt="Picante"
          />
        </div>
        <div className="rowLeyenda">
          Cubierto = ${cubierto?.precio || "N/A"}
        </div>
      </div>
      {menu
        .filter((producto) => producto.activo === true)
        .map((producto) => (
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
                {producto.veggie === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/veggie.png?alt=media&token=2fd50ada-b299-4ba4-a489-10f940f89821"
                    alt="veggie"
                  />
                )}
                {producto.sinGluten === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
                    alt="sinGluten"
                  />
                )}
                {producto.picante === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                    alt="picante"
                  />
                )}
                {producto.opcionVeggie === true && (
                  <>
                    Con opcion{" "}
                    <img
                      className="imgCaracteristica"
                      src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/veggie.png?alt=media&token=2fd50ada-b299-4ba4-a489-10f940f89821"
                      alt="veggie"
                    />
                  </>
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
                {producto.opcionPicante === true && (
                  <>
                    Con opcion{" "}
                    <img
                      className="imgCaracteristica"
                      src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                      alt="picante"
                    />
                  </>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default Platos;
