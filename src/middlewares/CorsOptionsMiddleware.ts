import cors from 'cors'
import ProviderConfig from '@configs/private/ProviderConfig.private'

class CorsOptionsMiddleware {
    private readonly CORS_OPTIONS: cors.CorsOptions = {
      origin: ProviderConfig.DOMAINS
    }

    getCorsOption (): cors.CorsOptions {
      return this.CORS_OPTIONS
    }
}

export default new CorsOptionsMiddleware().getCorsOption()
