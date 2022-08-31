import React from 'react'
import '../styles/Header.scss'
import LogoTexto from './LogoTexto'

interface HeaderInt{
    children: any,
}

export default function Header(props:HeaderInt) {
    return (
        <>
            <div className='full-header'>
                <div className='botao-e-logo'>
                <div className='texto-campanha'>
                    <LogoTexto></LogoTexto>
                </div>
                <div className='botoes-campanha'>
                    {props.children}
                </div>
            </div>
            <div className='logo-campanha'>
                <div className='imagem-mundo'></div>
            </div>
            </div>
        </>
    )
}
