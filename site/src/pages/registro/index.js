import { useState } from 'react';

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

    async function publicarProduto() {
        try {
            const idadm = storage('adm-logado').id;
            const resposta = await cadastrarProduto(idadm, nome, preco, estoque, capacidade, cores, medidas);
            
            toast.dark('Produto cadastrado com sucesso!');
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
                        <option value="" selected disabled>Selecione a quantidade</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
                        <option value="">15</option>
                        <option value="">16</option>
                        <option value="">17</option>
                        <option value="">18</option>
                        <option value="">19</option>
                        <option value="">20</option>
                        <option value="">21</option>
                        <option value="">22</option>
                        <option value="">23</option>
                        <option value="">24</option>
                        <option value="">25</option>
                        <option value="">26</option>
                        <option value="">27</option>
                        <option value="">28</option>
                        <option value="">29</option>
                        <option value="">30</option>
                    </select>
                </div>
                </div>
                


                <div className = 'flex-principal'>
                    <div className = 'select'>
                    <select className = 'cors' name="cores" value={cores} onChange={e => setCores(e.target.value)} >
                        <option value="" selected disabled> Selecione as cores</option>
                        <option value="">Vermelho</option>
                        <option value="">Laranja</option>
                        <option value="">Amarelo</option>
                        <option value="">Verde</option>
                        <option value="">Azul</option>
                        <option value="">Indigo</option>
                        <option value="">Violeta</option>
                        <option value="">Branco</option>
                        <option value="">Rosa</option>
                        <option value="">Preto</option>
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