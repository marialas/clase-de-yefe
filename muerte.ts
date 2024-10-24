class Muertes {
    private nombre: string;
    private lugar: string;
    private tipo: string;
    private edad: number;
    private hora: string;

    constructor(nombre: string, lugar: string, tipo: string, edad: number, hora: string) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.tipo = tipo;
        this.edad = edad;
        this.hora = hora;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getLugar(): string {
        return this.lugar;
    }

    public setLugar(lugar: string): void {
        this.lugar = lugar;
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

    public getHora(): string {
        return this.hora;
    }

    public setHora(hora: string): void {
        this.hora = hora;
    }

    public mostrarDatos(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Lugar: " + this.lugar);
        console.log("Tipo: " + this.tipo);
        console.log("Edad: " + this.edad);
        console.log("Hora: " + this.hora);
    }
}

let muerte1 = new Muertes("Pedro", "Hospital", "Accidente", 40, "10:30 AM");
let muerte2 = new Muertes("Maria", "Casa", "Enfermedad", 80, "2:00 PM");
let muerte3 = new Muertes("Luis", "Calle", "Asesinato", 35, "8:00 PM");
let muerte4 = new Muertes("Fernando", "Hospital", "Enfermedad", 60, "6:00 AM");
let muerte5 = new Muertes("Carmen", "Casa", "Accidente", 70, "3:00 PM");
let muerte6 = new Muertes("Raúl", "Trabajo", "Asesinato", 45, "7:30 PM");
let muerte7 = new Muertes("Sofia", "Calle", "Suicidio", 30, "11:00 PM");
let muerte8 = new Muertes("Carlos", "Carretera", "Accidente", 55, "9:00 AM");
let muerte9 = new Muertes("Daniel", "Montaña", "Desastre Natural", 35, "4:00 PM");
let muerte10 = new Muertes("Andrea", "Playa", "Ahogamiento", 25, "2:30 PM");

console.log("Muerte 1");
muerte1.mostrarDatos();

console.log("Muerte 2");
muerte2.mostrarDatos();

console.log("Muerte 3");
muerte3.mostrarDatos();

console.log("Muerte 4");
muerte4.mostrarDatos();

console.log("Muerte 5");
muerte5.mostrarDatos();

console.log("Muerte 6");
muerte6.mostrarDatos();

console.log("Muerte 7");
muerte7.mostrarDatos();

console.log("Muerte 8");
muerte8.mostrarDatos();

console.log("Muerte 9");
muerte9.mostrarDatos();

console.log("Muerte 10");
muerte10.mostrarDatos();
