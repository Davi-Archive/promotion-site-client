import React from "react"
import '../styles/Botao.css'

export default function Botao(props){
    return (
        <div className={`
        botao-campanha
        inline-flex
        border-amber-600
        bg-amber-600
        border-1
        rounded-md
        mr-5
        text-white
        font-bold
        justify-center
        `}>
        <button onClick={props.onClick} type={props.type}>{props.texto}</button>
        </div>
    )
}
