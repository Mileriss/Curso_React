import React from 'react'

export default function Dados(props){
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Sobrenome: {props.sobrenome}</p>
            <p>Nome Completo: {props.nome_completo}</p>
        </section>
    )
}