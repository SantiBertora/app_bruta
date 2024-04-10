import React from "react";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

const Courses = ({ menu, subFilter }) => {
  if (subFilter === "VEGETARIANS") {
    menu = menu.filter(
      (producto) => producto.veggie === true || producto.opcionVeggie === true
    );
  } else if (subFilter === "NO GLUTEN") {
    menu = menu.filter(
      (producto) =>
        producto.sinGluten === true || producto.opcionSinGluten === true
    );
  } else if (subFilter === "NO LACTOSE") {
    menu = menu.filter(
      (producto) =>
        producto.sinLactosa === true || producto.opcionSinLactosa === true
    );
  }

  return (
    <div>
      <div className="leyenda">
        <div className="rowLeyenda">
          Vegan ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/vegano.png?alt=media&token=ffeddda4-ea77-4898-8d37-3c16aa6dc55a"
            alt="Vegano"
          />
        </div>
        <div className="rowLeyenda">
          Vegetarian ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/veggie.png?alt=media&token=2fd50ada-b299-4ba4-a489-10f940f89821"
            alt="Veggie"
          />
        </div>
        <div className="rowLeyenda">
          Gluten Free ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
            alt="Sin Gluten"
          />
        </div>
        <div className="rowLeyenda">
          Lactose Free ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20lactosa.png?alt=media&token=b25c427c-10bc-4d11-b395-e464a4ca9c53"
            alt="Sin Lactosa"
          />
        </div>
        <div className="rowLeyenda">
          Spicy ={" "}
          <img
            className="imgCaracteristica"
            src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
            alt="Picante"
          />
        </div>
      </div>
      {menu
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
              <div className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>

                <Text fontSize="2xl">${producto.precio}</Text>
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
                {producto.vegano === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/vegano.png?alt=media&token=ffeddda4-ea77-4898-8d37-3c16aa6dc55a"
                    alt="vegano"
                  />
                )}
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
                {producto.picante === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                    alt="picante"
                  />
                )}
                {producto.opcionVeggie === true && (
                  <>
                    Option{" "}
                    <img
                      className="imgCaracteristica"
                      src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/veggie.png?alt=media&token=2fd50ada-b299-4ba4-a489-10f940f89821"
                      alt="veggie"
                    />
                  </>
                )}
                {producto.opcionVegano === true && (
                  <>
                    Option{" "}
                    <img
                      className="imgCaracteristica"
                      src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/vegano.png?alt=media&token=ffeddda4-ea77-4898-8d37-3c16aa6dc55a"
                      alt="vegano"
                    />
                  </>
                )}
                {producto.opcionSinGluten === true && (
                  <>
                    Option{" "}
                    <img
                      className="imgCaracteristica"
                      src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20gluten.png?alt=media&token=4e91dbff-cfc6-4db4-a34f-ca72f2218a86"
                      alt="sinGluten"
                    />
                  </>
                )}
                {producto.opcionSinLactosa === true && (
                  <>
                    Option{" "}
                    <img
                      className="imgCaracteristica"
                      src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/sin%20lactosa.png?alt=media&token=b25c427c-10bc-4d11-b395-e464a4ca9c53"
                      alt="sinLactosa"
                    />
                  </>
                )}
                {producto.opcionPicante === true && (
                  <>
                    Option{" "}
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

export default Courses;
