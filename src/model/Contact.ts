class Contact {
    constructor(subject: string, enterprise: string, message: string) {
        this.Subject = subject
        this.Enterprise = enterprise
        this.Message = message
    }

    private readonly Subject!: string
    private readonly Enterprise!: string
    private readonly Message!: string

    getSubject () {
        return this.Subject
    }

    getEnterprise () {
        return this.Enterprise
    }

    getMessage () {
        return this.Message
    }
}

export default Contact
