import '../styles/Formulario.css'

export default function Formulario() {
    return (

        <form>
            <div>
                <h1 className='text-center font-extrabold text-3xl mb-5'>CADASTRE-SE</h1>
                <h2 className='text-center font-extrabold text-m'>Preencha os campos abaixo para validar sua participação <br /> na campanha e concorrer aos prêmios.</h2>
                <table>
                    <tr>
                        <th colspan='2'><p className='flex flex-col text-left'>Nome: <input placeholder='Nome'></input></p></th>
                    </tr>
                    <tr>
                        <td><p className='flex flex-col text-left'>CPF: <input placeholder='000.000.000-00'></input></p></td>
                        <td><p className='flex flex-col text-left'>E-mail: <input placeholder='E-mail'></input></p></td>
                    </tr>
                    <tr>
                        <td><p className='flex flex-col text-left'>Senha: <input placeholder='Senha'></input></p></td>
                        <td><p className='flex flex-col text-left'>Senha: <input placeholder='Nome'></input></p></td>
                    </tr>
                    <tr>
                        <td><p className='flex flex-col text-left'>Empresa: <input placeholder='Empresa'></input></p></td>
                        <td><p className='flex flex-col text-left'>Classificação:
                            <select name="select">
                                <option value="valor1">Valor 1</option>
                                <option value="valor2" selected>Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select></p></td>
                    </tr>
                    <tr>
                        <th colspan='2'>
                            <button
                                className={`botao-enviar
                            border-amber-500
                            border-1
                            rounded-md
                            bg-amber-500
                            botao-campanha
                            mr-5
                            items-center
                            text-center
                            text-white
                            font-bold
                            justify-center
                            `}
                                type='submit'>Enviar</button></th>
                    </tr>
                </table>
            </div>
        </form>
    )
}