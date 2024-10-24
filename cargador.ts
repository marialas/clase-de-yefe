class Cargador {
    private marca: string;
    private color: string;
    private tipo: string;
    private largo: number;

    constructor(marca: string, color: string, tipo: string, largo: number) {
        this.marca = marca;
        this.color = color;
        this.tipo = tipo;
        this.largo = largo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getLargo(): number {
        return this.largo;
    }

    public setLargo(largo: number): void {
        this.largo = largo;
    }

    public mostrarDatos(): void {
        console.log("Marca: " + this.marca);
        console.log("Color: " + this.color);
        console.log("Tipo: " + this.tipo);
        console.log("Largo: " + this.largo);
    }
}

let cargador1 = new Cargador("Samsung", "Blanco", "USB-C", 1.5);
let cargador2 = new Cargador("Apple", "Negro", "Lightning", 1.2);
let cargador3 = new Cargador("Xiaomi", "Gris", "Micro-USB", 2.0);
let cargador4 = new Cargador("Apple", "Blanco", "USB-C", 1.2);
let cargador5 = new Cargador("Samsung", "Negro", "Micro-USB", 1.0);
let cargador6 = new Cargador("Huawei", "Gris", "USB-C", 1.5);
let cargador7 = new Cargador("Sony", "Blanco", "Lightning", 1.8);
let cargador8 = new Cargador("Xiaomi", "Rojo", "USB-A", 1.0);
let cargador9 = new Cargador("Oppo", "Negro", "USB-C", 1.7);
let cargador10 = new Cargador("OnePlus", "Azul", "Micro-USB", 1.1);

console.log("Cargador 1");
cargador1.mostrarDatos();

console.log("Cargador 2");
cargador2.mostrarDatos();

console.log("Cargador 3");
cargador3.mostrarDatos();

console.log("Cargador 4"); 
cargador4.mostrarDatos();

console.log("Cargador 5"); 
cargador5.mostrarDatos();

console.log("Cargador 6"); 
cargador6.mostrarDatos();

console.log("Cargador 7"); 
cargador7.mostrarDatos();

console.log("Cargador 8"); 
cargador8.mostrarDatos();

console.log("Cargador 9"); 
cargador9.mostrarDatos();

console.log("Cargador 10"); 
cargador10.mostrarDatos();
