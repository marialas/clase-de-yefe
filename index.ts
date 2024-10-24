class Carro {
    private year: Number
    private color: String

    accelerate(): void {
        console.log('car is accelerated')
    }
    stop(): void{
        console.log('car is stoped')
    } 
    constructor(year: Number, color: String){
        this.year = year
        this.color = color
    }
}
let carrito1 = new Carro(2024, 'blue')
carrito1.accelerate()
carrito1.stop()