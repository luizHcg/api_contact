import cors from 'cors'
import ProviderConfig from "@configs/private/ProviderConfig.private";
import {NextFunction, Request, Response} from "express";

class CorsOptionsMiddleware {

    private readonly CORS_OPTIONS!: cors.CorsOptions

    constructor() {
        this.CORS_OPTIONS = {
            allowedHeaders: [
                ProviderConfig.DOMAINS
            ],
            optionsSuccessStatus: 204
        }
    }

    getCorsOption(): cors.CorsOptions {
        console.log(this.CORS_OPTIONS)
        return this.CORS_OPTIONS
    }

}

export default new CorsOptionsMiddleware().getCorsOption()
