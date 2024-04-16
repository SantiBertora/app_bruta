import React from "react";
import { useEffect, useState } from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

const Postres = ({ menu, subFilter }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);


  const mostrarProducto = (producto) => {
    setProductoSeleccionado(producto);
    Swal.fire({
      title: producto.nombre,
      text: producto.descripcion,
      imageUrl: producto.foto,
      imageAlt: "Custom image",
      confirmButtonText: "Cerrar",
    });
  };

  const postres = menu.filter(
    (producto) => producto.clasificacion === "postre"
  );
  const cafes = menu.filter((producto) => producto.clasificacion === "cafe");
  const digestivos = menu.filter(
    (producto) => producto.clasificacion === "digestivo"
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
        case "POSTRES":
          // Calcula la posición para la opción 1
          posicionScroll = document.getElementById("postres").offsetTop - alturaFiltros;
          break;
        case "CAFETERÍA":
          // Calcula la posición para la opción 2
          posicionScroll = document.getElementById("cafes").offsetTop - alturaFiltros;
          break;
        case "DIGESTIVOS":
          // Calcula la posición para la opción 3
          posicionScroll = document.getElementById("digestivos").offsetTop - alturaFiltros;
          break;
      }

      // Realiza el scroll
      window.scrollTo({
        top: posicionScroll,
        behavior: "smooth", // Esto hace el scroll suave, puedes cambiarlo si lo deseas
      });
    };

    // Llama a la función para calcular la posición de scroll cuando subFilter cambie
    calcularPosicionScroll();
  }, [subFilter]);

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
      <h2 id="postres" className="titulo">POSTRES</h2>
      {postres
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu" onClick={() => mostrarProducto(producto)}>
            <CardBody className="productContainer">
              <Stack className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>
              </Stack>
              <Text className="precio">${producto.precio}</Text>
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
      <h2 id="cafes" className="titulo">CAFETERÍA</h2>
      {cafes
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
              <Stack className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>
              </Stack>
              <Text className="precio">${producto.precio}</Text>
            </CardBody>
          </Card>
        ))}
      <h2 id="digestivos" className="titulo">DIGESTIVOS</h2>
      {digestivos
        .filter((producto) => producto.activo === true)
        .map((producto) => (
          <Card key={producto.nombre} className="cardMenu">
            <CardBody className="productContainer">
              <Stack className="datosMenu">
                <Heading size="md">{producto.nombre}</Heading>
              </Stack>
              <Text className="precio">${producto.precio}</Text>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default Postres;
