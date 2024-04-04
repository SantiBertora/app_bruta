import React from 'react'
import { Link } from 'react-router-dom'
import Idioma from './Idioma'


const Navbar = () => {
  return (
    <>
    <Link to={`/`}><img id='logoBruta' src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Flogo_bruta.png?alt=media&token=d87a6018-9894-4e0c-b47c-caea262e0fd5" alt="logo" /></Link>
    <ul id='Nav'>
      <li className='btnNav'><Link className='btnNav' to={`/menu`}>MENÚ</Link></li>
      <li className='btnNav'>
        <Idioma />
      </li>
    </ul>
    </>
  )
}

export default Navbar