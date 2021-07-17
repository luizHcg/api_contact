"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const MailConfig_1 = __importDefault(require("../config/private/MailConfig"));
const ProviderConfig_1 = __importDefault(require("../config/private/ProviderConfig"));
class Mail {
    constructor(replyTo, subject, text, name) {
        this.myUser = MailConfig_1.default.getMail();
        this.myPass = MailConfig_1.default.getPassword();
        this.providerHost = ProviderConfig_1.default.getHost();
        this.providerPort = ProviderConfig_1.default.getPort();
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
exports.default = Mail;
