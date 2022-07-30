import './styles/Body.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import React, { useState } from "react";
import Login from './components/Login';
import Botao from './components/Botao';

//trocar login para formulario em 1 botão

export default function Main() {

  let [visivel, setVisivel] = useState(0)

   const handleClick = event => {
      setVisivel(visivel + 1)
      console.log(visivel)
  }
   const form = event => {
    setVisivel(visivel = 1)
  }
  const login = event => {
    setVisivel(visivel = 2)
  }

//trocar login para formulario em 1 botão

  return (

    <>
    <div className="body-header">
    <Header>
        <Botao texto='LOGIN' onClick={() => form()}></Botao>
        <Botao texto='CADASTRE-SE' onClick={() => login()}></Botao>
    </Header>
    </div>
    <div className='body-main'>
     {visivel % 2 === 0 ? (
     <Formulario>
        <Botao texto='ENVIAR' onClick={() => login()} type='submit'></Botao>
     </Formulario>
     ) : (
     <Login>
        <Botao texto='ENTRAR' onClick={() => handleClick()} type='submit'></Botao>
     </Login>
     )
     }
    </div>
    <div className='body-bottom'>
      <Bottom></Bottom>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  );
}
