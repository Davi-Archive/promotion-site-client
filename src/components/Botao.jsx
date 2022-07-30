import React from "react"
import '../styles/Botao.css'

export default function Botao(props){

    /* <button
                                className={`
                            botao-enviar
                            botao-campanha
                            border-amber-500
                            bg-amber-500
                            rounded-md
                            text-center
                            text-white
                            font-bold
                            `}
                                type='submit'>Enviar</button> */

    return (
        <div className='
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
        '>
        <button onClick={props.onClick} type={props.type}>{props.texto}</button>
        </div>
    )
}
