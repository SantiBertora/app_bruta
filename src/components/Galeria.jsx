import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Galeria = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto1.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto2.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto3.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto4.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto5.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto6.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imagenGaleria' src="src/assets/foto7.jpg" alt="Galería de Fotos" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Galeria