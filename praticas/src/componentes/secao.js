import React from 'react'

export default function Secao(props){
    return(
        <div>
            <h3>Seção para exibir minhas infos:</h3>
            <p>Meu nome é: {props.nome}</p>
            <p>Meu sobrenome é: {props.sobrenome}</p>
        </div>
    )
}