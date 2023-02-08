import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ContextProvider } from './components/context/context'

function App() {

  return (
    <>
    <ContextProvider>
    <Header />
    <Main />
    </ContextProvider>
    </>
  )
}

export default App
