import '../styles/Formulario.css'
export default function Formulario() {
    return (

        <form>
            <div>
                <h1 className='text-center font-extrabold text-3xl mb-5'>CADASTRE-SE</h1>
                <h2 className='text-center font-extrabold text-m'>Preencha os campos abaixo para validar sua participação <br /> na campanha e concorrer aos prêmios.</h2>
                <table>
                    <tr>
                        <th><p className='text-center'>Hippopotamus</p></th>
                    </tr>
                    <tr>
                        <td>Horse</td>
                        <td>Mare</td>
                    </tr>
                    <tr>
                        <td>Stallion</td>
                    </tr>
                    <tr>
                        <th>Crocodile</th>
                    </tr>
                    <tr>
                        <th>Chicken</th>
                        <td>Hen</td>
                    </tr>
                    <tr>
                        <td>Rooster</td>
                    </tr>
                </table>
            </div>
        </form>
    )
}