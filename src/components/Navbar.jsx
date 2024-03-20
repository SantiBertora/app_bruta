import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to={`/`}><img id='logoBruta' src="/src/assets/logo_bruta.png" alt="logo" /></Link>
    <ul id='Nav'>
      <li className='btnNav'><Link className='btnNav' to={`/menu`}>MENÚ</Link></li>
      <li className='btnNav'><a id='logoWpp' href="https://api.whatsapp.com/message/CYJ7I6ZHZOMIN1?autoload=1&app_absent=0"><img src="src/assets/wpp.png" alt="" /></a></li>
      <li className='btnNav'><Link className='btnNav' to={`/eventos`}>EVENTOS</Link></li>
    </ul>
    </>
  )
}

export default Navbar