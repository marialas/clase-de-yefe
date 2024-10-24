class Ladrillo {
    private color: string;
    private tamaño: number;
    private precio: number;

    constructor(color: string, tamaño: number, precio: number) {
        this.color = color;
        this.tamaño = tamaño;
        this.precio = precio;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getTamaño(): number {
        return this.tamaño;
    }

    public setTamaño(tamaño: number): void {
        this.tamaño = tamaño;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public mostrarDatos(): void {
        console.log("Color: " + this.color);
        console.log("Tamaño: " + this.tamaño);
        console.log("Precio: " + this.precio);
    }
}

let ladrillo1 = new Ladrillo("Rojo", 20, 1.5);
let ladrillo2 = new Ladrillo("Gris", 25, 2.0);
let ladrillo3 = new Ladrillo("Amarillo", 30, 2.5);
let ladrillo4 = new Ladrillo("Blanco", 20.3, 12.5);
let ladrillo5 = new Ladrillo("Gris", 25.7, 15.6);
let ladrillo6 = new Ladrillo("Naranja", 30.2, 18.8);
let ladrillo7 = new Ladrillo("Rojo", 28.5, 16.3);
let ladrillo8 = new Ladrillo("Beige", 22.8, 14.4);
let ladrillo9 = new Ladrillo("Amarillo", 24.5, 17.7);
let ladrillo10 = new Ladrillo("Azul", 26.3, 19.0);

console.log("Ladrillo 1");
ladrillo1.mostrarDatos();

console.log("Ladrillo 2");
ladrillo2.mostrarDatos();

console.log("Ladrillo 3");
ladrillo3.mostrarDatos();

console.log("Ladrillo 4"); 
ladrillo4.mostrarDatos();

console.log("Ladrillo 5"); 
ladrillo5.mostrarDatos();

console.log("Ladrillo 6"); 
ladrillo6.mostrarDatos();

console.log("Ladrillo 7"); 
ladrillo7.mostrarDatos();

console.log("Ladrillo 8"); 
ladrillo8.mostrarDatos();

console.log("Ladrillo 9"); 
ladrillo9.mostrarDatos();

console.log("Ladrillo 10"); 
ladrillo10.mostrarDatos();
