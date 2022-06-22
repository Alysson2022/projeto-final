import { alterarProduto, listarProduto, deletarProduto, todosProdutos } from "../repository/alterarRepository.js";


import { Router } from 'express';
const server = Router();

server.put('/produto/:id', async (req, resp) => {
    try {
        //const { id,nome, preco, estoque, capacidade, cores, medidas } = req.body;
        const { id } = req.params;
        const produto = req.body;
        const produtoinserido = await alterarProduto(id, produto);

        resp.status(204).send()
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.get('/produto', async (req, resp) => {
    try {
        const resposta = await todosProdutos();
        resp.send(resposta);
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/produto/busca', async (req, resp) => {
    try {
    const {nome} = req.query
    const resposta = await listarProduto(nome);
    resp.send(resposta);
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/produto/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const resposta = await deletarProduto(id);
        if(resposta != 1)
            throw new Error ('Produto não pode ser removido.');

        resp.status(204).send();
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;