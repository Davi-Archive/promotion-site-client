import React from "react"
import '../styles/Botao.css'


export default function Botao(props){
    const colorNumber = (props.cor === (600)) ? 600 : 500
    return (
        <div className={`
        botao-campanha
        inline-flex
        border-amber-${colorNumber}
        bg-amber-${colorNumber}
        border-1
        rounded-md
        mr-5
        text-white
        font-bold
        justify-center
        text-center
        `}>
        <button onClick={props.onClick} type={props.type}>{props.texto}</button>
        </div>
    )
}
