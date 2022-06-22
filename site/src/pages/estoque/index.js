import { Link } from 'react-router-dom';
import { listarTodosProdutos, listarProdutoNome, removerProduto } from '../../api/produtoApi';

import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import './index.scss';
import Logo from '../../assets/images/logo.jpg';
import Lupa from '../../assets/images/lupa-removebg-preview.png';
import Mais from '../../assets/images/WhatsApp_Image_2022-04-29_at_10.05.13-removebg-preview.png';
import Xicara from '../../assets/images/xicara.webp';
import { useEffect, useState } from 'react';

export default function Index () {

    const [produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();

    function editarProduto(id) {
        navigate(`/registro/alterar/${id}`);
    }

    async function deletarProdutoClick(id, nome) {

        confirmAlert({
            title: 'Remover produto',
            message: `Deseja remover o produto ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerProduto(id, nome);
                        if(filtro === '')
                            carregarTodosProdutos();
                        else
                            Filtrar();
                        toast.dark('Produto removido!');
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })

    }

    async function Filtrar() {
        const resposta = await listarProdutoNome(filtro);
        setProdutos(resposta);
    }

    async function carregarTodosProdutos() {
        const resposta = await listarTodosProdutos();
        console.log(resposta);
        setProdutos(resposta);
    }

    useEffect(() => {
        carregarTodosProdutos();
    }, [])


    return (
        <main className='pagina-estoque'>

                <div className='container-mae'>

                    <div className='container-header'>

                                <img className='img-logo' src={ Logo } alt="logo" height="90px" width="90px" />

                                <h2 className='texto-logo'>ArtMaac's Artesanato</h2>

                            <div class="container-texto-area">
                                <input class="texto-area" type="text" value={filtro} onChange={e => setFiltro(e.target.value)} />
                                <img src={ Lupa } alt="lupa" height="25px" width="25px" onClick={Filtrar} />
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

                                {produtos.map(item => 
                                    

                                        <div class="container-card" key={item.id}>

                                            <img className='imagem-produto' src={ Xicara } alt="Xícara" />
                                            <p>{item.nome}, <span>{item.capacidade}</span></p>
                                            <p class="paragrafo-estoque">ESTOQUE: {item.quantidade}</p>
                                            <p class="paragrafo-preco">R$ {item.valor}</p>

                                            <div class="container-botoes">
                                                <a class="botao-edicao" href="#" onClick={() => editarProduto(item.id)}>Editar</a>
                                                <a class="botao-excluir" href="#" onClick={() => deletarProdutoClick(item.id, item.nome)}>Excluir</a>
                                            </div>

                                        </div>
                                    
                                )}

                        </div>
                    </section>
                </div>
        </main>
    )
}