import nodeMailer from 'nodemailer';
import MailConfig from "../config/private/MailConfig";
import ProviderConfig from "../config/private/ProviderConfig";
class Mail {
    constructor(replyTo, subject, text, name) {
        this.myUser = MailConfig.getMail();
        this.myPass = MailConfig.getPassword();
        this.providerHost = ProviderConfig.getHost();
        this.providerPort = ProviderConfig.getPort();
        this.TRANSPORT = nodeMailer.createTransport({
            host: this.providerHost,
            port: this.providerPort,
            auth: {
                user: this.myUser,
                pass: this.myPass
            }
        });
        this.REPLY_TO = replyTo;
        this.SUBJECT = subject;
        this.TEXT = text;
        this.NAME = name;
    }
    async sendMsg() {
        return await this.TRANSPORT.sendMail({
            from: this.myUser,
            to: this.myUser,
            replyTo: this.REPLY_TO,
            subject: this.SUBJECT,
            text: `${this.NAME} \n ${this.TEXT}`
        }).then(info => {
            return info;
        }).catch(error => {
            return error;
        });
    }
}
export default Mail;
//# sourceMappingURL=Mail.js.map