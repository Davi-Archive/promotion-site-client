import React from "react"
import '../styles/Botao.scss'

interface BotaoProps{
    texto:string,
    onClick?: any,
    type?:any,
    cor:any,
}

export default function Botao({texto, onClick, type, cor}:BotaoProps){
    const colorNumber = (cor === (600)) ? 600 : 500
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
        <button onClick={onClick} type={type}>{texto}</button>
        </div>
    )
}
