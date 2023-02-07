import React, { createContext, useState } from 'react'

export let Context = createContext({})

export const ContextProvider = ({children}) => {
    const [quantity, setQuantity] = useState(1)
    const [cartNum, setCartNum] = useState(0)


  return (
    <Context.Provider value={{quantity, setQuantity, cartNum, setCartNum}}>
        {children}
    </Context.Provider>
  )
}

