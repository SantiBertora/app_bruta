import React from 'react'
import { createContext } from 'react'

export const MenuContext = createContext()

const MenuContext = ({children}) => {

  return (
    <MenuContext.Provider>{children}</MenuContext.Provider>
  )
}

export default MenuContext