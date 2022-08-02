import React from 'react'
import '../styles/Header.css'
import LogoTexto from './LogoTexto'

export default function Header(props) {
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
