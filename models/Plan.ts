class Plan {
    id: number
    name: string
    price: number
    img: any

    constructor(id: number, name: string = '', price: number = 0, img: any = '') {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
    }
}

export default Plan