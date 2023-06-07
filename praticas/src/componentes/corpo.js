import React from 'react'
import "../App.css"

export default function Corpo(props) {
    const txtAzul={
        color: "Blue",
        backgroundColor: "Red"
    }
    return (
        <body>
            <section>
                <p>Paragrafo 1</p>
                <p>{"Meu nome é: " + props.nome}</p>
                <p style={{color: "red"}}>Este texto está em vermelho</p>
            </section>
            <section>
                <p>Paragrafo 2</p>
                <p>{"Meu sobrenome é: " + props.sobrenome}</p>
                <p style={txtAzul}>Este texto está em azul</p>
            </section>
            <section>
                <p>Paragrafo 3</p>
                <p>{"Minha idade é: " + props.idade}</p>
                <p className='txtDestaque'>Este texto está em destaque</p>
            </section>
        </body>
    )
}