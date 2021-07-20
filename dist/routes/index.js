"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mail_1 = __importDefault(require("../controller/Mail"));
const routes = express_1.Router();
routes.get('/', (req, res) => {
    return res.json(req.url);
});
routes.post('/send', (req, res) => {
    return new Mail_1.default(req.body.mail, req.body.subject, req.body.message, req.body.name, req.body.enterprise)
        .sendMsg()
        .then(info => {
        return res.status(202).json(info);
    }).catch(error => {
        return res.status(406).json(error);
    });
});
exports.default = routes;
//# sourceMappingURL=index.js.map