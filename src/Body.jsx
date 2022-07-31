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

  //renderiza seletivamente entre login e form
  let [visivel, setVisivel] = useState({estaVisivel: true })

   function loginForm() {
    setVisivel(false)
  }
  function formulario() {
    setVisivel(true)
  }
  function entrarLogin(){    //para função de login ser implementada consultando banco de dados.
    setVisivel(true)
  }


  return (

    <>
    <div className="body-header">
    <Header>
        <Botao texto='LOGIN' onClick={() => loginForm()} cor='600'></Botao>
        <Botao texto='CADASTRE-SE' onClick={() => formulario()} cor='600'></Botao>
    </Header>
    </div>
    <div className='body-main'>
     {visivel === true ? (
     <Formulario></Formulario>
     ) : (
     <Login>
        <Botao texto='ENTRAR' onClick={() => entrarLogin()} type='submit' cor='a500'></Botao>
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
