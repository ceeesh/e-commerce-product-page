import React, { createContext, useState } from 'react'

export let Context = createContext({})

export const ContextProvider = ({children}) => {
    const [quantity, setQuantity] = useState(1)
    const [cartNum, setCartNum] = useState(0)
    const [amount, setAmount] = useState(125.00)


  return (
    <Context.Provider value={{quantity, setQuantity, cartNum, setCartNum, amount, setAmount}}>
        {children}
    </Context.Provider>
  )
}

