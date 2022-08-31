import '../styles/Footer.scss'

export default function Footer(){
    return(
        <div className='barra-final'>
        <div className="duvidas">
            <span className='text-gray-50'>
                Dúvidas? Envie um e-mail para </span>
                <a href="mailto:atendimento@umbrindenaeuropa.com.br">
                atendimento@umbrindenaeuropa.com.br</a>


        </div>
        <div className='imagens-ilustrativas-texto'>
            <span className='text-gray-50'>
                Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.
            </span>
        </div>
        </div>
    )
}