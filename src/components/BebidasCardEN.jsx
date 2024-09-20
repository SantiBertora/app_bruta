import React from 'react'
import { Card, CardBody, Heading, Text } from '@chakra-ui/react';

const BebidasCardEN = ({ producto, mostrarProducto }) => {
    return (
        <Card className="cardMenu" onClick={() => mostrarProducto(producto)}>
            <CardBody className="productContainer">
                <div className="datosMenu">
                    <Heading size="md">{producto.name}</Heading>
                    <Text className="precio">${producto.precio}</Text>
                </div>
                <Text>{producto.description}</Text>
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
    );
}

export default BebidasCardEN;