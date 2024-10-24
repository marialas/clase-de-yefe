class Kilometros {
    private distancia: number;
    private numero_kilometros: number;

    constructor(distancia: number, numero_kilometros: number) {
        this.distancia = distancia;
        this.numero_kilometros = numero_kilometros;
    }

    public getDistancia(): number {
        return this.distancia;
    }

    public setDistancia(distancia: number): void {
        this.distancia = distancia;
    }

    public getNumeroKilometros(): number {
        return this.numero_kilometros;
    }

    public setNumeroKilometros(numero_kilometros: number): void {
        this.numero_kilometros = numero_kilometros;
    }

    public mostrarDatos(): void {
        console.log("Distancia: " + this.distancia);
        console.log("Número de kilómetros: " + this.numero_kilometros);
    }

    
}

let kilometros1 = new Kilometros(12.5, 10);
let kilometros2 = new Kilometros(8.2, 5);
let kilometros3 = new Kilometros(20, 15);
let kilometros4 = new Kilometros(600.5, 150);
let kilometros5 = new Kilometros(300.2, 80);
let kilometros6 = new Kilometros(1200.3, 200);
let kilometros7 = new Kilometros(900.6, 300);
let kilometros8 = new Kilometros(250.7, 70);
let kilometros9 = new Kilometros(700.8, 190);
let kilometros10 = new Kilometros(500.9, 130);

console.log("Kilometros 1");
kilometros1.mostrarDatos();

console.log("Kilometros 2");
kilometros2.mostrarDatos();

console.log("Kilometros 3");
kilometros3.mostrarDatos();

console.log("Kilometros 4");
kilometros4.mostrarDatos();

console.log("Kilometros 5"); 
kilometros5.mostrarDatos();

console.log("Kilometros 6"); 
kilometros6.mostrarDatos();

console.log("Kilometros 7"); 
kilometros7.mostrarDatos();

console.log("Kilometros 8"); 
kilometros8.mostrarDatos();

console.log("Kilometros 9"); 
kilometros9.mostrarDatos();

console.log("Kilometros 10"); 
kilometros10.mostrarDatos();
