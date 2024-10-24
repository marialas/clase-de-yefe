class CuentaDeObjetosFiados {
    private nombres_personas: string;
    private nombres_objetos: string;
    private numeros: number;

    constructor(nombres_personas: string, nombres_objetos: string, numeros: number) {
        this.nombres_personas = nombres_personas;
        this.nombres_objetos = nombres_objetos;
        this.numeros = numeros;
    }

    public getNombresPersonas(): string {
        return this.nombres_personas;
    }

    public setNombresPersonas(nombres_personas: string): void {
        this.nombres_personas = nombres_personas;
    }

    public getNombresObjetos(): string {
        return this.nombres_objetos;
    }

    public setNombresObjetos(nombres_objetos: string): void {
        this.nombres_objetos = nombres_objetos;
    }

    public getNumeros(): number {
        return this.numeros;
    }

    public setNumeros(numeros: number): void {
        this.numeros = numeros;
    }

    public mostrarDatos(): void {
        console.log("Nombres de personas: " + this.nombres_personas);
        console.log("Nombres de objetos: " + this.nombres_objetos);
        console.log("Números: " + this.numeros);
    }
}

let fiados1 = new CuentaDeObjetosFiados("Juan", "Televisor", 200);
let fiados2 = new CuentaDeObjetosFiados("Ana", "Refrigerador", 500);
let fiados3 = new CuentaDeObjetosFiados("Luis", "Lavadora", 300);
let fiados4 = new CuentaDeObjetosFiados("Carlos", "Moto", 800);
let fiados5 = new CuentaDeObjetosFiados("Marta", "Celular", 700);
let fiados6 = new CuentaDeObjetosFiados("José", "Televisor", 1200);
let fiados7 = new CuentaDeObjetosFiados("Laura", "Computadora", 1500);
let fiados8 = new CuentaDeObjetosFiados("Pedro", "Microondas", 400);
let fiados9 = new CuentaDeObjetosFiados("Lucía", "Lavadora", 1300);
let fiados10 = new CuentaDeObjetosFiados("Jorge", "Bicicleta", 600);

console.log("Fiados 1");
fiados1.mostrarDatos();

console.log("Fiados 2");
fiados2.mostrarDatos();

console.log("Fiados 3");
fiados3.mostrarDatos();

console.log("Fiados 4"); 
fiados4.mostrarDatos();

console.log("Fiados 5"); 
fiados5.mostrarDatos();

console.log("Fiados 6"); 
fiados6.mostrarDatos();

console.log("Fiados 7"); 
fiados7.mostrarDatos();

console.log("Fiados 8"); 
fiados8.mostrarDatos();

console.log("Fiados 9"); 
fiados9.mostrarDatos();

console.log("Fiados 10"); 
fiados10.mostrarDatos();
