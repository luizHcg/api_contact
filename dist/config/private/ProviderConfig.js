"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProviderConfig {
    constructor() {
        this.HOST = 'smtp.umbler.com';
        this.PORT = 587;
        this.ID_USER = '';
        this.API_TOKEN = '';
    }
    getHost() {
        return this.HOST;
    }
    getPort() {
        return this.PORT;
    }
    getIdUser() {
        return this.ID_USER;
    }
    getApiToken() {
        return this.API_TOKEN;
    }
}
exports.default = new ProviderConfig();
//# sourceMappingURL=ProviderConfig.js.map