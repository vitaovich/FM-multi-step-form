class Plan {
    id: string
    name: string
    price: number
    img: any

    constructor(name: string = '', price: number = 0, img: any) {
        this.id = name
        this.name = name
        this.price = price
        this.img = img
    }
}

export default Plan