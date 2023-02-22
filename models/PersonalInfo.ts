class PersonalInfo {
    id: string
    name: string
    email: string
    phoneNumber: string

    constructor(name: string = '', email: string = '', phoneNumber: string = '') {
        this.id = name
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
    }
}

export default PersonalInfo