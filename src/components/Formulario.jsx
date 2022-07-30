import '../styles/Formulario.css'

export default function Formulario(props) {
    return (
        <form action='api.teste-frontend.ateliedepropaganda.com.br/v1/register' method='POST'>
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
                                id='name'
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
                            id='tax_id'
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
                        id='email'
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
                            id='password'
                            className='inserir'
                            placeholder='Senha'
                            type="password"
                            minLength='6'
                            maxLength='50'
                            required
                            ></input></p>
                        </td>
                        <td>
                            <p className='texto-input'>
                            <span className='text-sm'>Senha:</span>
                            <input
                            id='password_confirmation'
                            className='inserir'
                            placeholder='Confirme sua Senha'
                            type='password'
                            minLength='6'
                            maxLength='50'
                            required
                            ></input>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='texto-input'>Empresa:
                                <input
                                id='company'
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
                            <select name="select" id='segment' className='inserir pr-5'>
                                    <option value="vazio" disabled selected>Escolha sua Categoria</option>
                                    <option value="valor1">Gerente</option>
                                    <option value="valor2">Revendedor</option>
                                    <option value="valor3">Distribuidor</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th colspan='2'>
                            {props.children}
                        </th>
                    </tr>
                </table>
            </div>
        </form>
    )
}