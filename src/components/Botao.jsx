import React from "react"
import '../styles/Botao.css'

export default function Botao(props){
    return (
        <div className='inline-flex
        border-amber-500
        border-1
        rounded-md
        bg-amber-500
        botao-campanha
        mr-5
        items-center
        text-center
        text-white
        font-bold
        justify-center
        '>
        <button>{props.texto}</button>
        </div>
    )
}