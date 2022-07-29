import React from 'react'
import '../styles/Header.css'
import imagemMundo from '../assets/clouds.png'
import LogoTexto from './LogoTexto'
import Botao from './Botao'

export default function Header(){
    return (
        <>
        <div className='texto-campanha flex'>
        <LogoTexto></LogoTexto>
        <div className='botoes-campanha flex flex-nowrap'>
        <Botao texto='LOGIN'></Botao>
        <Botao texto='CADASTRE-SE'></Botao>
        </div>
        </div>
        <div
        className='logo-campanha'>
        <img className='imagem-mundo' src={imagemMundo} alt='ok'></img>
        </div>
        </>
    )
}
