import nodeMailer from 'nodemailer'
import MailConfig from '@configs/private/MailConfig'
import ProviderConfig from '@configs/private/ProviderConfig'

class Mail {
    private readonly REPLY_TO!: string
    private readonly SUBJECT!: string
    private readonly TEXT!: string
    private readonly NAME!: string

    private myUser = MailConfig.getMail()
    private myPass = MailConfig.getPassword()
    private providerHost = ProviderConfig.getHost()
    private providerPort = ProviderConfig.getPort()

    private readonly TRANSPORT = nodeMailer.createTransport({
      host: this.providerHost,
      port: this.providerPort,
      auth: {
        user: this.myUser,
        pass: this.myPass
      }
    })

    constructor (replyTo: string, subject: string, text: string, name: string) {
      this.REPLY_TO = replyTo
      this.SUBJECT = subject
      this.TEXT = text
      this.NAME = name
    }

    async sendMsg () {
      return await this.TRANSPORT.sendMail({
        from: this.myUser,
        to: this.myUser,
        replyTo: this.REPLY_TO,
        subject: this.SUBJECT,
        text: `${this.NAME} \n ${this.TEXT}`
      }).then(info => {
        return info
      }).catch(error => {
        return error
      })
    }
}

export default Mail
