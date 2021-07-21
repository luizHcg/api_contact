"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mail_1 = __importDefault(require("../controller/Mail"));
const AuthMiddleware_1 = __importDefault(require("../middlewares/AuthMiddleware"));
const routes = express_1.Router();
routes.get('/', (req, res) => {
    return res.redirect('/api-docs');
});
routes.post('/send', AuthMiddleware_1.default, async (req, res) => {
    const { mail: replyTo, subject, message, name, enterprise } = req.body;
    return await new Mail_1.default(replyTo, subject, message, name, enterprise)
        .sendMsg()
        .then((info) => {
        if (typeof info === 'string') {
            return res.status(406).json({ message: info, sent: false });
        }
        else
            return res.status(202).json({ message: 'Enviado', sent: true });
    }).catch(error => {
        throw res.status(406).json(error);
    });
});
exports.default = routes;
//# sourceMappingURL=index.js.map