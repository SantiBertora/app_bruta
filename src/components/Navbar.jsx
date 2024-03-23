import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to={`/`}><img id='logoBruta' src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Flogo_bruta.png?alt=media&token=d87a6018-9894-4e0c-b47c-caea262e0fd5" alt="logo" /></Link>
    <ul id='Nav'>
      <li className='btnNav'><Link className='btnNav' to={`/menu`}>MENÚ</Link></li>
      <li className='btnNav'><a id='logoWpp' href="https://api.whatsapp.com/message/CYJ7I6ZHZOMIN1?autoload=1&app_absent=0"><img src="https://firebasestorage.googleapis.com/v0/b/carta-bruta.appspot.com/o/imagenes%20web%2Fwpp.png?alt=media&token=3073662e-7321-473d-8402-d17def6331b5" alt="" /></a></li>
      <li className='btnNav'><Link className='btnNav' to={`/eventos`}>EVENTOS</Link></li>
    </ul>
    </>
  )
}

export default Navbar