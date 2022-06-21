import { Link } from 'react-router-dom';

import './index.scss';
import Logo from '../../assets/images/logo.jpg';
import Lupa from '../../assets/images/lupa-removebg-preview.png';
import Mais from '../../assets/images/WhatsApp_Image_2022-04-29_at_10.05.13-removebg-preview.png';
import Xicara from '../../assets/images/xicara.webp';

export default function Index () {
    return (
        <main className='pagina-estoque'>

                <div className='container-mae'>

                    <div className='container-header'>

                                <img className='img-logo' src={ Logo } alt="logo" height="90px" width="90px" />

                                <h2 className='texto-logo'>ArtMaac's Artesanato</h2>

                            <div class="container-texto-area">
                                <input class="texto-area" type="text"/>
                                <img src={ Lupa } alt="lupa" height="25px" width="25px" />
                            </div>
                    </div>

                    <section class="container-section">

                        <div class="titulo-estoque">
                            <h1>Estoque da <span class="titulo-artmaac">ARTMAAC`S</span> </h1>
                        </div>

                        <div class="container-tres-cards">
                            <Link to='/registro' class="container-card">

                                <a class="container-adicionar-produto" href="#"> <img src={ Mais } alt="mais" height="25px" width="25px"/><br/> <h3 class="texto-adicionar-produto"> Adicionar produto </h3> </a>

                            </Link>
                            <div class="container-card">

                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>

                            </div>
                            <div class="container-card">
                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>
                            </div>
                        </div>

                        <div class="container-tres-cards">
                            <div class="container-card">

                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>

                            </div>
                            <div class="container-card">

                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>

                            </div>
                            <div class="container-card">
                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>
                            </div>
                        </div>

                        <div class="container-tres-cards">
                            <div class="container-card">

                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>

                            </div>
                            <div class="container-card">

                                <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                <p>Xicara de chá de porcelana <br/> 
                                    personalizada, 200ml</p>
                                <p class="paragrafo-estoque">ESTOQUE: 50</p>
                                <p class="paragrafo-preco">R$ 0,00</p>

                                <div class="container-botoes">
                                    <a class="botao-edicao" href="../registro">Editar</a>
                                    <a class="botao-excluir" href="../registro">Excluir</a>
                                </div>

                            </div>
                            <div class="container-card">
                                
                            <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                            <p>Xicara de chá de porcelana <br/> 
                                personalizada, 200ml</p>
                            <p class="paragrafo-estoque">ESTOQUE: 50</p>
                            <p class="paragrafo-preco">R$ 0,00</p>

                            <div class="container-botoes">
                                <a class="botao-edicao" href="../registro">Editar</a>
                                <a class="botao-excluir" href="../registro">Excluir</a>
                            </div>

                            </div>
                        </div>
                    </section>
                </div>
        </main>
    )
}