"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mail_1 = __importDefault(require("../controller/Mail"));
const routes = express_1.Router();
routes.get('/', (request, response) => {
    return response.json({ message: 'Hello Word! -__-' });
});
routes.post('/send', (request, response) => {
    new Mail_1.default(request.body.email, request.body.assunto, request.body.mensagem, request.body.nome)
        .sendMsg()
        .then(info => {
        return response.status(202).json(info.accepted);
    }).catch(error => {
        return response.status(406).json(error);
    });
});
exports.default = routes;
