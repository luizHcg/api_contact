"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(subject, enterprise, message) {
        this.Subject = subject;
        this.Enterprise = enterprise;
        this.Message = message;
    }
    getSubject() {
        return this.Subject;
    }
    getEnterprise() {
        return this.Enterprise;
    }
    getMessage() {
        return this.Message;
    }
}
exports.default = Contact;
