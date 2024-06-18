
import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { Users } from 'types/user';
import ExibirMensagem from 'components/Mensagem/mensagem';


const Login: React.FC = () => {
   
    const [user, setUser] = useState<Users>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL}/users/2`)
            .then((response => {
                setUser(response.data)
            
            })).catch(erro => {
                ExibirMensagem('Sem acesso a base de dados, contact o administrador do sistema', erro);
            });
    }, [])


    const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        try {


            if (user != null)

                if ((user?.email === email) && (user.password === password)) {
                    ExibirMensagem('Logado com sucesso!', user.email) // Handle success


                    setTimeout(function () {                      //depois de logado vai para Menu em 2 segundos
                        window.location.href = 'Menu';
                    }, 1500);

                } else {
                    ExibirMensagem('Usuário ou senha inválidos!', user.email) // Handle success

                }
        } catch {

            (ExibirMensagem('não foi possivel acessar banco de dados', ''))
        }
    }
    return (
        <>
            <section className='containerCliente containerLogin'>

                <h1 className='titulo'>Login</h1>
                <form className='containerForm' onSubmit={handSubmit}>
                    <label className='tituloEntrada'>Entre com os dados:</label>
                    <input className='inputForm' type="text"
                        placeholder='Email'

                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input className='inputForm' type="password"
                        placeholder='Senha'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required

                    />
                    <div className='btnIcone'>
                    <button type='submit'>Login</button>
                        
                    </div>

                </form>

                <div id="menssagem"></div>
            </section>

        </>
    )
}

export default Login