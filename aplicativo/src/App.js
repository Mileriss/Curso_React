import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'


export default function App() {
  var nome = "Rafael"
  var sobrenome = "Mileris"
  return (
    <>
    <Header/>
    <Corpo/>
    <Dados nome={nome} sobrenome={sobrenome} nome_completo={nome + " " + sobrenome}/>
    </>
  )
}