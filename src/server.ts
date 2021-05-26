require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
    debug: process.env.DEBUG,
});

import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRoutes from '@routes/index';

//criar aplicação node express 
const app = express();
const httpServer = http.createServer(app);
app.use(bodyParser.json());
app.use(indexRoutes);
app.use(cors);

//aponto onde está toda a aplicação web estática
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//os servidores http e socket vão ouvir na porta definida abaixo (ex: 3333)
httpServer.listen(process.env.SRV_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.SRV_PORT}.`);
});

