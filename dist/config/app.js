"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const CorsOptionsMiddleware_1 = __importDefault(require("../middlewares/CorsOptionsMiddleware"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use(cors_1.default(CorsOptionsMiddleware_1.default));
        this.express.use(express_1.default.json());
        this.express.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    routes() {
        this.express.use('/api', routes_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map