export default function Login(props) {
    return (
        <div>

        <form>
            <div>
                <h1 className='tabela-topo text-center font-extrabold text-3xl mb-5'>LOGIN</h1>
                <table>
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
                    </tr>
                    <tr>
                        <th colspan='2'>
                        {props.children}
                        </th>
                    </tr>
                </table>
             </div>
        </form>
        </div>
    )
}