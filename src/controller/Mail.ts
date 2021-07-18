import nodeMailer from 'nodemailer'
import MailConfig from '@configs/private/MailConfig.private'
import ProviderConfig from '@configs/private/ProviderConfig.private'

class Mail {
    private readonly REPLY_TO!: string
    private readonly SUBJECT!: string
    private readonly TEXT!: string
    private readonly NAME!: string
    private readonly ENTERPRISE!: string

    private myUser = MailConfig.MAIL
    private myPass = MailConfig.PASSWORD
    private providerHost = ProviderConfig.HOST
    private providerPort = ProviderConfig.PORT

    private readonly TRANSPORT = nodeMailer.createTransport({
        host: this.providerHost,
        port: this.providerPort,
        auth: {
            user: this.myUser,
            pass: this.myPass
        }
    })

    constructor(replyTo: string, subject: string, text: string, name: string, enterprise: string) {
        this.REPLY_TO = replyTo
        this.SUBJECT = subject
        this.TEXT = text
        this.NAME = name
        this.ENTERPRISE = enterprise
    }

    // Devo criar validações de campo
    async sendMsg() {
        return await this.TRANSPORT.sendMail({
            from: this.myUser,
            to: this.myUser,
            replyTo: this.REPLY_TO,
            subject: this.SUBJECT,
            text: `${this.NAME} da empresa ${this.ENTERPRISE} \n ${this.TEXT}`
        }).then(info => {
            return "Enviado"
        }).catch(error => {
            return error
        })
    }
}

export default Mail
