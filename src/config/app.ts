import express from 'express'
import cors from 'cors'
import routes from '../routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '@configs/swagger.json'
import CorsOptionsMiddleware from "../middlewares/CorsOptionsMiddleware";

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(cors(CorsOptionsMiddleware))
        this.express.use(express.json())
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    }

    private routes(): void {
        this.express.use('/api', routes)
    }
}

export default new App().express
