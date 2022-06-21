
import { cadastrarProduto } from '../repository/produtosRepository.js';

import {Router} from 'express'
const server = Router();

server.post('/produto', async (req, resp) => {
    try {
        //const { id,nome, preco, estoque, capacidade, cores, medidas } = req.body;
        const produto = req.body;
        const produtoinserido = await cadastrarProduto(produto);

        if(!produto.nome)
            throw new Error('O nome deve ser preenchido!');

        if(!produto.preco)
            throw new Error('O preço deve ser preenchido!');

        if(!produto.estoque)
            throw new Error('A quantidade no estoque deve ser preenchida!');

        if(!produto.capacidade)
            throw new Error('A capacidade deve ser preenchida!');

        if(!produto.cores)
            throw new Error('A cor deve ser preenchida!');

        if(!produto.medidas)
            throw new Error('A medida deve ser preenchida!');

        resp.send(produtoinserido)
    } catch (err) {
        resp.send({
            erro: err.message
        })

    }
})

export default server;
