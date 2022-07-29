import '../styles/Formulario.css'

export default function Formulario() {
    return (

        <form>
            <div>
                <h1 className='tabela-topo text-center font-extrabold text-3xl mb-5'>CADASTRE-SE</h1>
                <h2 className='tabela-descricao text-center font-extrabold text-m'>
                Preencha os campos abaixo para validar sua participação
                <br /> na campanha e concorrer aos prêmios.</h2>
                <table>
                    <tr>
                        <td colspan='2'>
                            <p className='texto-input'>
                                <span>Nome: </span>
                                <input className='inserir' placeholder='Nome'></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='texto-input'>CPF:
                            <input className='inserir' placeholder='000.000.000-00'></input></p>
                        </td>
                        <td><p className='texto-input'>E-mail:
                        <input className='inserir' placeholder='E-mail'></input></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='texto-input'>Senha: <input className='inserir' placeholder='Senha'></input></p>
                        </td>
                        <td>
                            <p className='texto-input'>Senha:
                            <input className='inserir' placeholder='Nome'></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='texto-input'>Empresa: <input className='inserir' placeholder='Empresa'></input></p></td>
                        <td><p className='texto-input'>Classificação:</p>
                            <select name="select" id='classificacao' className='inserir pr-5'>
                                    <option value="vazio" disabled selected>Escolha sua Categoria</option>
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2">Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                    <option value="valor4">Valor 3</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th colspan='2'>
                            <button
                                className={`
                            botao-enviar
                            botao-campanha
                            border-amber-500
                            bg-amber-500
                            rounded-md
                            text-center
                            text-white
                            font-bold
                            `}
                                type='submit'>Enviar</button></th>
                    </tr>
                </table>
            </div>
        </form>
    )
}