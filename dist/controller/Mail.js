"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const MailConfig_private_1 = __importDefault(require("../config/private/MailConfig.private"));
const ProviderConfig_private_1 = __importDefault(require("../config/private/ProviderConfig.private"));
class Mail {
    constructor(replyTo, subject, text, name, enterprise) {
        this.myUser = MailConfig_private_1.default.MAIL;
        this.myPass = MailConfig_private_1.default.PASSWORD;
        this.providerHost = ProviderConfig_private_1.default.HOST;
        this.providerPort = ProviderConfig_private_1.default.PORT;
        this.TRANSPORT = nodemailer_1.default.createTransport({
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
        this.ENTERPRISE = enterprise;
    }
    async sendMsg() {
        return await this.TRANSPORT.sendMail({
            from: this.myUser,
            to: this.myUser,
            replyTo: this.REPLY_TO,
            subject: this.SUBJECT,
            text: `${this.NAME} da empresa ${this.ENTERPRISE} \n ${this.TEXT}`
        }).then((info) => {
            return info;
        }).catch(error => {
            return error;
        });
    }
}
exports.default = Mail;
//# sourceMappingURL=Mail.js.map