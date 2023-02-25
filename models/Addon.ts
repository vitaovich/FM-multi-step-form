class Addon {
    id: string
    name: string
    description: string
    price: number

    constructor(name: string, description: string, price: number) {
        this.id = name
        this.name = name
        this.description = description
        this.price = price
    }
}

export default Addon