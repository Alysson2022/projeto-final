import { Login } from '../repository/admRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/adm/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await Login(email, senha);
        if (!resposta) {
            throw new Error('Usuário inválido')
        }

        resp.send(resposta);

    } catch (err) {
        console.log(err);
        resp.status(401).send({
            erro: err.message
        });

    }
})


export default server;