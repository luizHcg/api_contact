export default interface IProviderConfig {
    readonly HOST: string
    readonly PORT: number
    readonly ID_USER: string
    readonly API_TOKEN: string
    readonly DOMAINS: string
    readonly DNS_HEROKU_DOMAINS: string

    isDomain(domain: string): boolean
}
