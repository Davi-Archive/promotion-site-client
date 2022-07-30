import React from 'react'
import '../styles/Header.css'
import imagemMundo from '../assets/clouds.png'
import LogoTexto from './LogoTexto'

export default function Header(props){
    return (
        <>
        <div className='texto-campanha flex'>
        <LogoTexto></LogoTexto>
        <div className='botoes-campanha flex flex-nowrap'>
        {props.children}
        </div>
        </div>
        <div
        className='logo-campanha'>
        <img className='imagem-mundo' src={imagemMundo} alt='ok'></img>
        </div>
        </>
    )
}
