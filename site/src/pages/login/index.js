import { Login } from '../../api/admApi'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

import { useEffect, useState } from 'react'

import './index.scss';
import Xicara from '../../assets/images/logoartmaac.png';
import Senha from '../../assets/images/senha.jpg';

export default function Index () {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    async function entrarPage() {
        setCarregando(true);

        try {
        const resposta = await Login(email, senha);
        storage('adm-logado', resposta);

        navigate('/estoque');
        } catch(err) {
            setCarregando(false);
            if(err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    return (
        <main className='pagina-login'>
            <div class="container-mae">

                    <header class="faixa-header">
                        <img class="logo" src={Xicara} alt='Senha' />
                        <h2 class="texto-logo">ArtMaac's Artesanato</h2>
                    </header>

                <section class="faixa-principal">

                        <div class="texto-login">
                            <h1>
                                Login
                            </h1>
                        </div>    

                    <section class="faixa">

                            <img src={Senha} alt='Imagem senha' height="400px" width="400px" />

                        <div>
                            <div class="email">
                                <h3 class="texto-email">
                                    E-mail:
                                </h3>
                
                                <input class="input-email" type = 'text' value = {email} onChange = {e => setEmail(e.target.value) } />
                            </div>

                            <div class="senha">
                                <h3 class="texto-senha">
                                    Senha:
                                </h3>
                
                                <input class="input-senha" type = 'password' value = {senha} onChange = {e => setSenha(e.target.value) } />
                            </div>

                            <div class="botoes">
                                <a href="/" class="botao-esqueci-senha"><h4>Esqueci Minha Senha</h4></a>

                                <button class="botao-entrar" onClick={entrarPage} disabled = {carregando}> ENTRAR </button>
                            </div>
                            <div className='msg-erro'>
                                {erro}
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    )
}