import 'dotenv/config'

import admController from './controller/admController.js';
import produtoController from './controller/produtoController.js';
import alterarprodutoController from './controller/alterarController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.listen(process.env.PORT, () => console.log(`API esta online na porta ${process.env.PORT}`));

// configuracao dos endpoits
server.use(admController);
server.use(produtoController);
server.use(alterarprodutoController);



