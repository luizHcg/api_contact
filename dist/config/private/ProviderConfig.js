"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProviderConfig {
    constructor() {
        this.HOST = 'smtp.umbler.com';
        this.PORT = 587;
    }
    getHost() {
        return this.HOST;
    }
    getPort() {
        return this.PORT;
    }
}
exports.default = new ProviderConfig();
