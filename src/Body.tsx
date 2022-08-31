import './styles/Body.scss';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import React, { useState } from "react";
import Login from './components/Login';
import Botao from './components/Botao';

export default function Main() {

  //renderiza seletivamente entre login(false) e formulario(false)
  let [visivel, setVisivel] = useState<boolean>(true)

  function loginForm() {
    setVisivel(true)
  }
  function formulario() {
    setVisivel(false)
  }
  function entrarLogin() {    //para função de login ser implementada consultando banco de dados.
    setVisivel(false)
  }


  return (
    <div className='body'>
        <>
        <div className="body-header">
          <Header>
            <Botao texto='LOGIN' onClick={() => loginForm()} cor='600'></Botao>
            <Botao texto='CADASTRE-SE' onClick={() => formulario()} cor='600'></Botao>
          </Header>
        </div>
        <div className='body-main'>
          {visivel === true ? (
            <Login>
              <Botao texto='ENTRAR' onClick={() => entrarLogin()} type='submit' cor='a500'></Botao>
            </Login>
          ) : (
            <Formulario></Formulario>
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
      </div>
  );
}
