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