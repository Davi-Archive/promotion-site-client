import React from "react"
import '../styles/Botao.css'

export default function Botao(props){
    return (
        <div className='
        inline-flex
        border-amber-600
        border-1
        rounded-md
        bg-amber-600
        botao-campanha
        mr-5
        text-white
        font-bold
        justify-center
        '>
        <button>{props.texto}</button>
        </div>
    )
}