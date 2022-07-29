import './styles/Body.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Bottom from './components/Bottom';

export default function Main() {
  return (
    <>
    <div className="body-header">
    <Header></Header>
    </div>
    <div className='body-main'>
      <Formulario></Formulario>
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
