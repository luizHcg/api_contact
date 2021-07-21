"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ProviderConfig_private_1 = __importDefault(require("../config/private/ProviderConfig.private"));
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (typeof token === 'undefined')
        return res.status(403).json({ auth: false, message: 'Falha na autenticação' });
    const BEARER = token.split(' ')[0];
    const TOKEN = token.split(' ')[1];
    if (BEARER.localeCompare('Bearer'))
        return res.status(401).json({ auth: false, message: 'TOKEN não correspondente.' });
    jsonwebtoken_1.default.verify(TOKEN, ProviderConfig_private_1.default.API_TOKEN, function (err) {
        if (err)
            return res.status(401).json({ auth: false, message: 'TOKEN incorreto' });
        next();
    });
};
exports.default = auth;
//# sourceMappingURL=AuthMiddleware.js.map