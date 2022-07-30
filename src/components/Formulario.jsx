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
                                <span className='text-sm'>Nome: </span>
                                <input
                                className='inserir'
                                placeholder='Nome'
                                maxlength="150"
                                required
                                ></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p className='texto-input'>
                            <span className='text-sm'>CPF:</span>
                            <input
                            type='text'
                            className='inserir'
                            placeholder='000.000.000-00'
                            pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}'
                            maxlength="14"
                            minLength="11"
                            required
                            ></input>
                            </p>
                        </td>
                        <td>
                        <p className='texto-input'>
                        <span className='text-sm'>E-mail:</span>
                        <input
                        className='inserir'
                        placeholder='E-mail'
                        type='email'
                        maxlength="200"
                        required
                        ></input></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='texto-input'>
                            <span className='text-sm'>Senha:</span>
                            <input
                            className='inserir'
                            placeholder='Senha'
                            type="password"
                            minLength='8'
                            maxLength='50'
                            pattern="(?=.*[a-z])(?=.*[0-9])(?=.*\W+)(?=^.{8,50}$).*$"
                            required
                            ></input></p>
                        </td>
                        <td>
                            <p className='texto-input'>
                            <span className='text-sm'>Senha:</span>
                            <input
                            className='inserir'
                            placeholder='Confirme sua Senha'
                            type='password'
                            pattern='/(?=.*[a-z])(?=.*[0-9])(?=.*[@-#-$])(?=^.{8,50}$).*$/'
                            required
                            ></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='texto-input'>Empresa:
                                <input
                                className='inserir'
                                placeholder='Empresa'
                                type='text'
                                maxlength="150"
                                required
                                ></input>
                            </p>
                        </td>
                        <td><p className='texto-input'>
                            <span className='text-sm'>Classificação:</span></p>
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