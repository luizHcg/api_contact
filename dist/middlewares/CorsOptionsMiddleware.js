"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProviderConfig_private_1 = __importDefault(require("../config/private/ProviderConfig.private"));
class CorsOptionsMiddleware {
    constructor() {
        this.CORS_OPTIONS = {
            origin: ProviderConfig_private_1.default.DOMAINS
        };
    }
    getCorsOption() {
        return this.CORS_OPTIONS;
    }
}
exports.default = new CorsOptionsMiddleware().getCorsOption();
//# sourceMappingURL=CorsOptionsMiddleware.js.map