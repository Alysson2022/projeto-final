import { Login } from '../repository/admRepository.js'

import {Router} from 'express'
const server = Router();

server.post('/usuario', async (req, resp) => {
    try {
        const novofilme = req.body;

        const filmeinserido = await inserirfilme(novofilme);

        resp.send(filmeinserido)
    } catch (err) {
        resp.send({
            erro: err.message
        })

    }
})

export default server;
