import nodeMailer, { SentMessageInfo } from 'nodemailer'
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

    private readonly EMAIL_LIST_ITEMS!: Array<string>

    private readonly TRANSPORT = nodeMailer.createTransport({
      host: this.providerHost,
      port: this.providerPort,
      auth: {
        user: this.myUser,
        pass: this.myPass
      }
    })

    constructor (replyTo: string, subject: string, text: string, name: string, enterprise: string) {
      this.REPLY_TO = replyTo
      this.SUBJECT = subject
      this.TEXT = text
      this.NAME = name
      this.ENTERPRISE = enterprise
      this.EMAIL_LIST_ITEMS = [replyTo, subject, text, name, enterprise]
    }

    verifyContent (): boolean {
      let result = true
      this.EMAIL_LIST_ITEMS.forEach((item: string) => {
        if (item.length === 0) {
          result = false
          return result
        }
      })
      return result
    }

    async sendMsg (): Promise<SentMessageInfo | string> {
      if (!this.verifyContent()) return 'Alguns dados então faltando.'

      return await this.TRANSPORT.sendMail({
        from: {
          name: `Contato de ${this.REPLY_TO}`,
          address: this.myUser
        },
        to: this.myUser,
        replyTo: this.REPLY_TO,
        inReplyTo: this.REPLY_TO,
        subject: this.SUBJECT,
        text: `Enviado por: ${this.NAME} \n E-mail de contato: ${this.REPLY_TO.toLowerCase()} \n Empresa: ${this.ENTERPRISE} \n \n ${this.TEXT}`
      }).then((info: SentMessageInfo) => {
        console.log(info)
        return info
      }).catch(error => {
        return error
      })
    }
}

export default Mail
