import React from "react";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

const Vinos = ({ cepasTintos, cepasByR, vinosEspumante, vinosCopa }) => {
  const renderVinos = (vinos, titulo) => (
    <>
      <h3 className="subTitulo">{titulo}</h3>
      {vinos.map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
          <CardBody className="productContainer">
            <div className="datosMenu">
              <Heading size="md">{producto.nombre}</Heading>
              <Text className="precio">${producto.precio}</Text>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );

  return (
    <div>
      <h2 id="tintos" className="titulo">TINTOS</h2>
      {renderVinos(cepasTintos.cabSauv, "Cabernet Sauvignon")}
      {renderVinos(cepasTintos.tannat, "Tannat")}
      {renderVinos(cepasTintos.pinotNoir, "Pinot Noir")}
      {renderVinos(cepasTintos.cabFranc, "Cabernet Franc")}
      {renderVinos(cepasTintos.malbec, "Malbec")}
      {renderVinos(cepasTintos.ensamblajes, "Ensamblajes")}
      {renderVinos(cepasTintos.otrasCepas, "Otras Cepas")}

      <h2 id="rosados" className="titulo">ROSADOS</h2>
      {renderVinos(cepasByR.rosados, "Rosados")}

      <h2 id="blancos" className="titulo">BLANCOS</h2>
      {renderVinos(cepasByR.torrontes, "Torrontés")}
      {renderVinos(cepasByR.albarino, "Albariño")}
      {renderVinos(cepasByR.sauvignonBlanc, "Sauvignon Blanc")}
      {renderVinos(cepasByR.chardonnay, "Chardonnay")}
      {renderVinos(cepasByR.otrosBlancos, "Otros Blancos")}

      <h2 id="espumantes" className="titulo">ESPUMANTES</h2>
      {renderVinos(vinosEspumante, "Espumantes")}

      <h2 id="copa" className="titulo">VINOS POR COPA</h2>
      {renderVinos(vinosCopa, "Vinos por Copa")}
    </div>
  );
};

export default Vinos;
