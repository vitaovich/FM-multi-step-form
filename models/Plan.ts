class Plan {
    id: string
    name: string
    price: number

    constructor(name: string = '', price: number = 0) {
        this.id = name
        this.name = name
        this.price = price
    }
}

export default Plan