class Cafe {
    private tipo: string;
    private color: string;
    private precio: number;
    private cantidad: number;
    private peso: number;

    constructor(tipo: string, color: string, precio: number, cantidad: number, peso: number) {
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
        this.peso = peso;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public mostrarDatos(): void {
        console.log("Tipo: " + this.tipo);
        console.log("Color: " + this.color);
        console.log("Precio: " + this.precio);
        console.log("Cantidad: " + this.cantidad);
        console.log("Peso: " + this.peso);
    }

    
}

let cafe1 = new Cafe("Arábica", "Negro", 3.5, 250, 0.5);
let cafe2 = new Cafe("Robusta", "Marrón", 4.0, 200, 0.45);
let cafe3 = new Cafe("Colombiano", "Oscuro", 5.0, 300, 0.55);
let cafe4 = new Cafe("Arábica", "Oscuro", 8.5, 500, 0.6);
let cafe5 = new Cafe("Robusta", "Claro", 10.0, 300, 0.4);
let cafe6 = new Cafe("Liberica", "Medio", 12.5, 600, 0.3);
let cafe7 = new Cafe("Excelsa", "Oscuro", 15.0, 250, 0.9);
let cafe8 = new Cafe("Geisha", "Claro", 9.5, 400,0.5);
let cafe9 = new Cafe("Blue Mountain", "Oscuro", 14.0, 450, 0.2);
let cafe10 = new Cafe("Kopi Luwak", "Medio", 20.0, 350, 0.3);

console.log("Cafe 1");
cafe1.mostrarDatos();

console.log("Cafe 2");
cafe2.mostrarDatos();

console.log("Cafe 3");
cafe3.mostrarDatos();

console.log("Cafe 4"); 
cafe4.mostrarDatos();

console.log("Cafe 5"); 
cafe5.mostrarDatos();

console.log("Cafe 6"); 
cafe6.mostrarDatos();

console.log("Cafe 7"); 
cafe7.mostrarDatos();

console.log("Cafe 8"); 
cafe8.mostrarDatos();

console.log("Cafe 9"); 
cafe9.mostrarDatos();

console.log("Cafe 10"); 
cafe10.mostrarDatos();
