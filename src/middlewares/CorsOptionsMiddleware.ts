import cors from 'cors'
import ProviderConfig from '@configs/private/ProviderConfig.private'

class CorsOptionsMiddleware {
    private readonly CORS_OPTIONS!: cors.CorsOptions

    constructor () {
      this.CORS_OPTIONS = {
        origin: ProviderConfig.DOMAINS,
        optionsSuccessStatus: 204
      }
    }

    getCorsOption (): cors.CorsOptions {
      return this.CORS_OPTIONS
    }
}

export default new CorsOptionsMiddleware().getCorsOption()
