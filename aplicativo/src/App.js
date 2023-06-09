import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import Relogio from './componentes/Relogio'


export default function App() {
  var nome = "Rafael"
  var sobrenome = "Mileris"
  const somar=(num1, num2)=>{
    return num1+num2
  }
  return (
    <>
    <Relogio/>
    <Header/>
    <Corpo/>
    <Dados 
    nome={nome} 
    sobrenome={sobrenome} 
    nome_completo={nome + " " + sobrenome}
    somar={somar}
    />
    </>
  )
}