import '../styles/Bottom.css'
import Logo from './Logo'

export default function Bottom(){
    return(
        <>
        <div className="bottom">
            <h1 className='text-2xl font-semibold'>SÓ QUEM VENDE CURTE AS <br /> EXPERIÊNCIAS MAIS DIFERENTONAS!</h1>
            <br />
            <div className='texto-informativo'>
                <p>*Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center e para o
                 Setor Público não serão válidas. A apuração do mês
                </p>
                <p>
                    de agosto será retroativa.  Imagens meramente ilustrativas.
                    Realizamos todos os esforços para garantir a precisão das informações, mas não
                </p>
                <p>somos responsáveis por qualquer conteúdo editorial,
                   fotográfico ou por erros tipográficos. Todas as imagens são apenas para fins
                </p>
                <p>ilustrativos. Para especificações completas de produto, informações de serviço e garantias,
                visite www.umbrindenaeuropa.com/saiba.
                </p>
                <p>Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros.
                Outros nomes de empresas, produtos
                </p>
        </div>
                <p className='last-texto-informativo'>e serviços podem ser marcas registradas ou marcas de serviço de terceiros &copy; 2020.
                Todos os direitos reservados.
                </p>
        </div>
        <div className='bottom-logo'>
            <Logo></Logo>
        </div>
        </>
    )
}