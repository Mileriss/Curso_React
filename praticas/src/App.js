import React from 'react'
import Cabecalho from './componentes/cabecalho'
import Corpo from './componentes/corpo'
import Secao from './componentes/secao'

export default function App() {
  return (
    <body>
      <Cabecalho></Cabecalho>
      <Corpo></Corpo>
      <Secao nome="Rafael" sobrenome="Mileris"></Secao>
    </body >
  )
}