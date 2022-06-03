import './index.scss';
import Xicara from '../../assets/images/logoartmaac.png';
import Senha from '../../assets/images/senha.jpg';

export default function Index () {
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
                
                                <input class="input-email" />
                            </div>

                            <div class="senha">
                                <h3 class="texto-senha">
                                    Senha:
                                </h3>
                
                                <input class="input-senha" />
                            </div>

                            <div class="botoes">
                                <a href="/" class="botao-esqueci-senha"><h4>Esqueci Minha Senha</h4></a>

                                <a href="../estoque" class="botao-entrar"> Entrar </a>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    )
}