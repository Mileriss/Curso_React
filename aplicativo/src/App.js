import React from 'react'
import Var from '../src/componentes/ex_import.png'


export default function App() {
  var nome = "Rafael"
  var sobrenome = "Mileris"
  const nome_completo = nome + sobrenome
  return (
    <section>
      <p>Meu nome é: {nome}</p>
      <p>Meu sobrenome é: {sobrenome}</p>
      <p>{"Meu nome completo é: " + nome + " " + sobrenome}</p>
      <p>Meu nome completo é: {nome_completo}</p>
      <img src={Var} />
    </section>
  )
}