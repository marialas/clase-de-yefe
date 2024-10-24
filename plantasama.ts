class PlantasEnLaAmazonia {
    private nombre: string;
    private color: string;
    private tipo: string;
    private edad: number;

    constructor(nombre: string, color: string, tipo: string, edad: number) {
        this.nombre = nombre;
        this.color = color;
        this.tipo = tipo;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
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

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public mostrarDatos(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Color: " + this.color);
        console.log("Tipo: " + this.tipo);
        console.log("Edad: " + this.edad);
    }
}

let planta1 = new PlantasEnLaAmazonia("Castaño", "Verde", "Árbol", 100);
let planta2 = new PlantasEnLaAmazonia("Orquídea", "Rosa", "Flor", 5);
let planta3 = new PlantasEnLaAmazonia("Ceiba", "Verde", "Árbol", 200);
let planta4 = new PlantasEnLaAmazonia("Hevea", "Verde", "Árbol", 50);
let planta5 = new PlantasEnLaAmazonia("Victoria Regia", "Verde", "Planta acuática", 2);
let planta6 = new PlantasEnLaAmazonia("Cedro", "Verde", "Árbol", 150);
let planta7 = new PlantasEnLaAmazonia("Bromelia", "Verde", "Planta", 3);
let planta8 = new PlantasEnLaAmazonia("Acai", "Verde", "Palma", 20);
let planta9 = new PlantasEnLaAmazonia("Copaiba", "Verde", "Árbol", 80);
let planta10 = new PlantasEnLaAmazonia("Pachira", "Verde", "Árbol", 10);

console.log("Planta 1");
planta1.mostrarDatos();

console.log("Planta 2");
planta2.mostrarDatos();

console.log("Planta 3");
planta3.mostrarDatos();

console.log("Planta 4");
planta4.mostrarDatos();

console.log("Planta 5");
planta5.mostrarDatos();

console.log("Planta 6");
planta6.mostrarDatos();

console.log("Planta 7");
planta7.mostrarDatos();

console.log("Planta 8");
planta8.mostrarDatos();

console.log("Planta 9");
planta9.mostrarDatos();

console.log("Planta 10");
planta10.mostrarDatos();
