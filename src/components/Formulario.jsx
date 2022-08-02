import '../styles/Formulario.css'
import React, { useState } from 'react';
import Botao from './Botao';
import Dialog from './Dialog';



export default function Formulario() {
    // mensagem de aviso no centro da tela <Dialog />
    const [dialog, setDialog] = useState({
        isLoading: false,
    });

    const handleDialog = (isLoading) => {
        setDialog({
            isLoading,
        });
    };

    // comunicação de variáveis para backend

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tax_id, setTaxId] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [company, setCompany] = useState("");
    const [segment, setSegment] = useState("null");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://api.teste-frontend.ateliedepropaganda.com.br/v1/register", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    tax_id: tax_id,
                    password: password,
                    password_confirmation: password_confirmation,
                    company: company,
                    segment: segment,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status === 200) {
                if (password === password_confirmation) {
                    setName("");
                    setEmail("");
                    setTaxId("");
                    setPassword("");
                    setPasswordConfirmation("");
                    setCompany("");
                    setSegment("");
                    handleDialog(true)
                    setMessage("Cadastro realizado com sucesso!");
                }
                if (password !== password_confirmation) {
                    handleDialog(true)
                    setMessage("As senhas não são iguais")
                }
            } else {
                handleDialog(true)
                setMessage("Ocorreu um erro no servidor.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    //atualiza o select

    function segmentChange(e) {
        setSegment(e.target.value);
    }

    return (
        <div className='formulario-main'>
            <form onSubmit={handleSubmit} className='formulario-form'>
                <div>
                    <h1 className='tabela-topo text-center font-extrabold text-3xl mb-5'>CADASTRE-SE</h1>
                    <h2 className='tabela-descricao text-center font-extrabold text-m'>
                        Preencha os campos abaixo para validar sua participação
                        <br /> na campanha e concorrer aos prêmios.</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan='2'>
                                    <p className='texto-input'>
                                        <span className='text-sm'>Nome </span>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            className='inserir'
                                            placeholder='Nome'
                                            maxLength="150"
                                            required
                                        ></input>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><p className='texto-input'>
                                    <span className='text-sm'>CPF</span>
                                    <input
                                        onChange={(e) => setTaxId(e.target.value)}
                                        id='tax_id'
                                        type='text'
                                        className='inserir-cpf inserir'
                                        placeholder='000.000.000-00'
                                        pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}'
                                        maxLength="14"
                                        minLength="11"
                                        required
                                    ></input>
                                </p>
                                    <p className='texto-cpf text-xs text-amber-500'>Digite um CPF válido</p>
                                </td>
                                <td>
                                    <p className='texto-input'>
                                        <span className='text-sm'>E-mail</span>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            id='email'
                                            className='inserir'
                                            placeholder='E-mail'
                                            type='email'
                                            maxLength="200"
                                            required
                                        ></input></p>
                                    <p className='text-xs'>&nbsp;</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='texto-input'>
                                        <span className='text-sm'>Senha</span>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
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
                                        <span className='text-sm'>Senha</span>
                                        <input
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                                    <p className='texto-input'>Empresa
                                        <input
                                            onChange={(e) => setCompany(e.target.value)}
                                            id='company'
                                            className='inserir'
                                            placeholder='Empresa'
                                            type='text'
                                            maxLength="150"
                                            required
                                        ></input>
                                    </p>
                                </td>
                                <td><p className='texto-input'>
                                    <span className='text-sm'>Classificação</span></p>
                                    <select name="select"
                                        onChange={segmentChange}
                                        value={segment}
                                        className='segment inserir pr-5'

                                    >
                                        <option disabled value='null'>Escolha sua Categoria</option>
                                        <option value="Manager">Gerente</option>
                                        <option value="Reseller">Revendedor</option>
                                        <option value="Distributor">Distribuidor</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan='2'>
                                    <Botao texto='ENVIAR' type='submit' cor='500'></Botao>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="message">{message ? <p className='text-xs text-center'>{message}</p> : null}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            {/* chama dialog para passar mensagem de sucesso ou erro */}
            {dialog.isLoading && (
                <Dialog
                    mensagem={message}
                    onDialog={handleDialog}
                />
            )}
        </div>
    )
}