import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { cadastrarProduto } from '../../api/produtoApi';
import storage from 'local-storage';

import { toast } from 'react-toastify'

import './index.scss';
import Xicara from '../../assets/images/xicara.webp';

export default function Index () {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [cores, setCores] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [medidas, setMedidas] = useState('');

    const navigate = useNavigate();

    async function publicarProduto() {
        try {
            const idadm = storage('adm-logado').id;
            const resposta = await cadastrarProduto(idadm, nome, preco, estoque, capacidade, cores, medidas);
            
            toast.dark('Produto cadastrado com sucesso!');
            navigate('/estoque');
        } catch(err) {
            toast.error(err.response.data.erro);
        }
    }


    return(
        <main className = 'pagina-edicao'>
            <footer className = 'mae'>
        
                <h1 className = 'title'> PUBLICAÇÃO OU EDIÇÃO DE UM PRODUTO</h1>

                <img className = 'img' src={Xicara} width = "350px" height ="300px" />

            <section className = 'principal'>
                <main className = 'main'>


                    <div className = 'name'>
                        <p className = 'text'> Nome do produto </p>
                        <input className = 'campo1' type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className = 'flex-principal'>
                        <div className = 'pca'>
                            <p className = 'ppc'> Preço </p>
                            <input className = 'campo' type="text" maxlength="6" value={preco} onChange={e => setPreco(e.target.value)} />
                        </div>
                    <div class="select">
                    <select className = 'numbers' name="qtd" value={estoque} onChange={e => setEstoque(e.target.value)} >
                        <option value='selected disabled'> Selecione a quantidade</option>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option>4</option>
                        <option>5</option>
                        <option >6</option>
                        <option >7</option>
                        <option >8</option>
                        <option >9</option>
                        <option >10</option>
                        <option >11</option>
                        <option >12</option>
                        <option >13</option>
                        <option >14</option>
                        <option >15</option>
                        <option >16</option>
                        <option >17</option>
                        <option >18</option>
                        <option >19</option>
                        <option >20</option>
                        <option >21</option>
                        <option >22</option>
                        <option >23</option>
                        <option >24</option>
                        <option >25</option>
                        <option >26</option>
                        <option >27</option>
                        <option >28</option>
                        <option >29</option>
                        <option >30</option>
                    </select>
                </div>
                </div>
                


                <div className = 'flex-principal'>
                    <div className = 'select'>
                    <select className = 'cors' name="cores" value={cores} onChange={e => setCores(e.target.value)} >
                        <option value="" selected disabled> Selecione as cores</option>
                        
                        <option >Vermelho</option>
                        <option >Laranja</option>
                        <option >Amarelo</option>
                        <option >Verde</option>
                        <option >Azul</option>
                        <option >Indigo</option>
                        <option >Violeta</option>
                        <option >Branco</option>
                        <option >Rosa</option>
                        <option >Preto</option>
                        </select> </div>
                    
                    
                    <div className = 'cap'>
                        <p className = 'ppc'> Capacidade </p>
                        <input className = 'campo' type="text" maxlength="10" value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                    </div>
                </div>


                    <div className = 'medidas'>
                        <p className = 'text'> Medidas </p>
                        <input className = 'campo1' type="text" maxlength="15" value={medidas} onChange={e => setMedidas(e.target.value)} />
                    </div>

                    
                    <div className = 'publi' onClick={publicarProduto}><a href="#" className = 'publicar'>Publicar</a></div>
                </main>
    
            </section>
                
        </footer> 
    </main>
    )
}