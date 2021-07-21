"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mail_1 = __importDefault(require("../controller/Mail"));
const routes = express_1.Router();
routes.get('/', (req, res) => {
    return res.redirect('/api-docs');
});
routes.post('/send', (req, res) => {
    const { mail: replyTo, subject, message, name, enterprise } = req.body;
    return new Mail_1.default(replyTo, subject, message, name, enterprise)
        .sendMsg()
        .then((info) => {
        if (typeof info === 'object') {
            return res.status(202).json({ message: 'Enviado', sent: true });
        }
        else
            res.status(406).json({ message: info, sent: false });
    }).catch(error => {
        return res.status(406).json(error);
    });
});
exports.default = routes;
//# sourceMappingURL=index.js.map