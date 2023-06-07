import React from 'react'

export default function Relogio() {
    return (
        <div>
            <p>{"Hoje é dia: " + new Date().toLocaleDateString()}</p>
            <p>{"Horário atual: " + new Date().toLocaleTimeString()}</p>
        </div>
    )
}