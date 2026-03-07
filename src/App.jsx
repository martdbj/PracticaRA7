import { useState } from 'react'
import Informacion from './components/InformacionComponent'
import InicioSesion from './components/InicioSesion'

function App() {

  return (
    <>
      <h1>Conversación con R2-D2</h1>
      <InicioSesion></InicioSesion>
      <Informacion></Informacion>
    </>
  )
}

export default App
