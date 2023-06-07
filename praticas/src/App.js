import React from 'react'
import Cabecalho from './componentes/cabecalho'
import Corpo from './componentes/corpo'


export default function App() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Corpo nome="Rafael" sobrenome="Mileris" idade="25"></Corpo>
    </div>
  )
}