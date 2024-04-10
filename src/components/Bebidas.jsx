import React from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Bebidas = ({ menu, subFilter }) => {
    
  const productosAperitivo = menu.filter(
    (producto) => producto.clasificacion === "aperitivo"
  );
  const productosGintonic = menu.filter(
    (producto) => producto.clasificacion === "gintonic"
  );
  const productosAutor = menu.filter(
    (producto) => producto.clasificacion === "autor"
  );
  const productosClasico = menu.filter(
    (producto) => producto.clasificacion === "clasico"
  );
  const productosCerveza = menu.filter(
    (producto) => producto.clasificacion === "cerveza"
  );
  const productosVermouth = menu.filter(
    (producto) => producto.clasificacion === "vermouth"
  );
  const productosSinAlcohol = menu.filter(
    (producto) => producto.clasificacion === "sin alcohol"
  );
  const productosDestilado = menu.filter(
    (producto) => producto.clasificacion === "destilado"
  );

// Obtener la altura del componente "filtros"

const [alturaFiltros, setAlturaFiltros] = useState(null);

useEffect(() => {
  const filtrosElement = document.getElementById("filtros");
  if (filtrosElement) {
    const altura = filtrosElement.offsetHeight;
    setAlturaFiltros(altura);
  }
}, []);



   // Función para manejar cambios en subFilter
   useEffect(() => {
    // Función para calcular la posición de scroll basada en la opción seleccionada
    const calcularPosicionScroll = () => {
      let posicionScroll = 0;

      // Calcula la posición de scroll basada en el valor de subFilter
      switch (subFilter) {
        case 'APERITIVOS':
          // Calcula la posición para la opción 1
          posicionScroll = document.getElementById('aperitivos').offsetTop - alturaFiltros;
          break;
        case 'GINTONICS':
          // Calcula la posición para la opción 2
          posicionScroll = document.getElementById('gintonics').offsetTop - alturaFiltros;
          break;
        case 'OTROS CÓCTELES DE AUTOR':
          // Calcula la posición para la opción 3
          posicionScroll = document.getElementById('autor').offsetTop - alturaFiltros;
          break;
        case 'OTROS CÓCTELES CLÁSICOS':
          // Calcula la posición para la opción 4
          posicionScroll = document.getElementById('clasicos').offsetTop - alturaFiltros;
          break;
        case 'SIN ALCOHOL':
          // Calcula la posición para la opción 5
          posicionScroll = document.getElementById('sinAlcohol').offsetTop - alturaFiltros;
          break;
        case 'VERMUTS':
          // Calcula la posición para la opción 6
          posicionScroll = document.getElementById('vermuts').offsetTop - alturaFiltros;
          break;
        case 'CERVEZAS':
          // Calcula la posición para la opción 7
          posicionScroll = document.getElementById('cervezas').offsetTop - alturaFiltros;
          break;
        case 'LICORES Y DESTILADOS':
          // Calcula la posición para la opción 8
          posicionScroll = document.getElementById('destilados').offsetTop - alturaFiltros;
          break;
        // Agrega más casos según tus necesidades
        default:
          // Por defecto, no se hace scroll
          posicionScroll = 0;
          break;
      }

      // Realiza el scroll
      window.scrollTo({
        top: posicionScroll,
        behavior: 'smooth', // Esto hace el scroll suave, puedes cambiarlo si lo deseas
      });
    };

    // Llama a la función para calcular la posición de scroll cuando subFilter cambie
    calcularPosicionScroll();
  }, [subFilter]);

  return (
    <div>
      <h2 id="aperitivos" className="titulo">NUESTROS APERITIVOS</h2>
      {productosAperitivo.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
            <div className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>
                 <Text fontSize="2xl">${producto.precio}</Text>

            </div>
            <Text>{producto.descripcion}</Text>
            <div className="caracteristicas">
            {producto.picante === true && (
              <img
                className="imgCaracteristica"
                src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                alt="picante"
              />
            )}
            </div>
            </CardBody>
        </Card>
        ))}
      <h2 id="gintonics" className="titulo">NUESTROS GINTONICS</h2>
      {productosGintonic.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
            <div className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>
                 <Text fontSize="2xl">${producto.precio}</Text>

            </div>
            <Text>{producto.descripcion}</Text>
            <div className="caracteristicas">
            {producto.picante === true && (
              <img
                className="imgCaracteristica"
                src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                alt="picante"
              />
            )}
            </div>
            </CardBody>
        </Card>
        ))}
        <h2 id="autor" className="titulo">NUESTROS CÓCTELES DE AUTOR</h2>
        {productosAutor.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <div className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                     <Text fontSize="2xl">${producto.precio}</Text>

                </div>
                <Text>{producto.descripcion}</Text>
                <div className="caracteristicas">
                {producto.picante === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                    alt="picante"
                  />
                )}
                </div>
                </CardBody>
            </Card>
            ))}
        <h2 id="clasicos" className="titulo">NUESTROS CÓCTELES CLÁSICOS</h2>
        {productosClasico.filter((producto) => producto.activo === true)
      .map((producto) => (
        <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
            <div className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>
                 <Text fontSize="2xl">${producto.precio}</Text>

            </div>
            <Text>{producto.descripcion}</Text>
            <div className="caracteristicas">
            {producto.picante === true && (
              <img
                className="imgCaracteristica"
                src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                alt="picante"
              />
            )}
            </div>
            </CardBody>
        </Card>
        ))}
        <h2 id="sinAlcohol" className="titulo">SIN ALCOHOL</h2>
        {productosSinAlcohol.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <div className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                     <Text fontSize="2xl">${producto.precio}</Text>

                </div>
                <Text>{producto.descripcion}</Text>
                <div className="caracteristicas">
                {producto.picante === true && (
                  <img
                    className="imgCaracteristica"
                    src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/picante.png?alt=media&token=63af4278-206b-4e6f-904c-ba72f2285a4b"
                    alt="picante"
                  />
                )}
                </div>
                </CardBody>
            </Card>
            ))}
        <h2 id="vermuts" className="titulo">VERMUTS</h2>
        {productosVermouth.filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu">
              <CardBody className="productContainer">
              <div className="datosMenu">
                  <Heading size="md">{producto.nombre}</Heading>
                   <Text fontSize="2xl">${producto.precio}</Text>

              </div>
              <Text>{producto.descripcion}</Text> 
              </CardBody>
          </Card>
          ))}
        <h2 id="cervezas" className="titulo">CERVEZAS</h2>
        {productosCerveza.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
        <h2 id="destilados" className="titulo">LICORES Y DESTILADOS</h2>
        {productosDestilado.filter((producto) => producto.activo === true)
      .map((producto) => (
            <Card key={producto.nombre} className="cardMenu">
                <CardBody className="productContainer">
                <Stack className="datosMenu">
                    <Heading size="md">{producto.nombre}</Heading>
                </Stack>
                <Text fontSize="2xl">${producto.precio}</Text>
                </CardBody>
            </Card>
            ))}
    </div>
  );
};

export default Bebidas;
