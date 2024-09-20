import React, { useEffect, useState} from 'react'
import Wines from './Wines'

const WinesContainer = ({ menu, subFilter }) => {
    const [alturaFiltros, setAlturaFiltros] = useState(null)

    // Obtener la altura del componente "filtros"
    useEffect(() => {
        const filtrosElement = document.getElementById('filtros')
        if (filtrosElement) {
            const altura = filtrosElement.offsetHeight
            setAlturaFiltros(altura)
        }
    }, [])

    // Manejo del scroll según el filtro seleccionado
    useEffect(() => {
        const calcularPosicionScroll = () => {
            let posicionScroll = 0

            switch (subFilter) {
                case 'TINTOS':
                    posicionScroll = document.getElementById('tintos').offsetTop - alturaFiltros
                    break
                case 'ROSADOS':
                    posicionScroll = document.getElementById('rosados').offsetTop - alturaFiltros
                    break
                case 'BLANCOS':
                    posicionScroll = document.getElementById('blancos').offsetTop - alturaFiltros
                    break
                case 'ESPUMANTES':
                    posicionScroll = document.getElementById('espumantes').offsetTop - alturaFiltros
                    break
                case 'VINOS POR COPA':
                    posicionScroll = document.getElementById('copa').offsetTop - alturaFiltros
                    break
                default:
                    break
            }

            window.scrollTo({
                top: posicionScroll,
                behavior: 'smooth'
            })
        }

        calcularPosicionScroll()
    }, [subFilter, alturaFiltros])

    // Filtrar y clasificar los productos del menú
    const filtrarPorClasificacion = (clasificacion, cepa = null) => {
        return menu.filter(
            (producto) =>
                producto.clasificacion === clasificacion &&
                (!cepa || producto.cepa === cepa) &&
                producto.activo
        )
    };

    const vinosEspumante = filtrarPorClasificacion('espumante')
    const vinosCopa = filtrarPorClasificacion('copa')

    // Agrupar los vinos por cepa
    const cepasTintos = {
      cabSauv: filtrarPorClasificacion("tinto", "cabernet sauvignon"),
      tannat: filtrarPorClasificacion("tinto", "tannat"),
      pinotNoir: filtrarPorClasificacion("tinto", "pinot noir"),
      cabFranc: filtrarPorClasificacion("tinto", "cabernet franc"),
      malbec: filtrarPorClasificacion("tinto", "malbec"),
      ensamblajes: filtrarPorClasificacion("tinto", "ensamblaje"),
      otrasCepas: filtrarPorClasificacion("tinto", "otra"),
    };

    const cepasByR = {
      rosados: filtrarPorClasificacion("rose", "rose"),
      torrontes: filtrarPorClasificacion("blanco", "torrontes"),
      albarino: filtrarPorClasificacion("blanco", "albariño"),
      sauvignonBlanc: filtrarPorClasificacion("blanco", "sauvignon blanc"),
      chardonnay: filtrarPorClasificacion("blanco", "chardonnay"),
      otrosBlancos: filtrarPorClasificacion("blanco", "otra"),
    };

    return (
        <Wines
            vinosEspumante={vinosEspumante}
            vinosCopa={vinosCopa}
            cepasTintos={cepasTintos}
            cepasByR={cepasByR}
        />
    );
};

export default WinesContainer;