import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarProduto(idadm, nome, preco, estoque, capacidade, cores, medidas) {
    const resultado = await api.post('/produto', {
        idadm: idadm,
        nome: nome,
        preco: preco,
        estoque: estoque,
        capacidade: capacidade,
        cores: cores,
        medidas: medidas
    })
    return resultado.data;
}


export async function alterarProduto(id, idadm, nome, preco, estoque, capacidade, cores, medidas) {
    const resultado = await api.put(`/produto/${id}`, {
        idadm: idadm,
        nome: nome,
        preco: preco,
        estoque: estoque,
        capacidade: capacidade,
        cores: cores,
        medidas: medidas
    })
    return resultado.data;
}

export async function listarTodosProdutos() {
    const resultado = await api.get('/produto');
    return resultado.data;
}

export async function listarProdutoNome(nome) {
    const resultado = await api.get(`/produto/busca?nome=${nome}`);
    return resultado.data;
}

export async function removerProduto(id) {
    const resposta = await api.delete(`/produto/${id}`);
    return resposta.status;
}

export async function buscaProdutoId(id) {
    const resposta = await api.get(`/produto/esp/${id}`);
    return resposta.data;
}