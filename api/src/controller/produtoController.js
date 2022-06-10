
import { cadastrarProduto } from '../repository/produtosRepository.js';

import {Router} from 'express'
const server = Router();

server.post('/produto', async (req, resp) => {
    try {
        //const { id,nome, preco, estoque, capacidade, cores, medidas } = req.body;
        const produto = req.body;
        const produtoinserido = await cadastrarProduto(produto);

        resp.send(produtoinserido)
    } catch (err) {
        resp.send({
            erro: err.message
        })

    }
})

export default server;
