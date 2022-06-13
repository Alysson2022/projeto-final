import { alterarProduto } from "../repository/alterarRepository.js";

import { Router } from 'express';
const server = Router();

server.put('/produto/:id', async (req, resp) => {
    try {
        //const { id,nome, preco, estoque, capacidade, cores, medidas } = req.body;
        const { id } = req.params;
        const produto = req.body;
        const produtoinserido = await alterarProduto(produto, id);

        resp.send(produtoinserido)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

export default server;