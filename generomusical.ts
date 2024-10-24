class GeneroMusical {
    private nombre: string;
    private genero: string;
    private letras: string;
    private sonidos: string;
    private tiempo: number;

    constructor(nombre: string, genero: string, letras: string, sonidos: string, tiempo: number) {
        this.nombre = nombre;
        this.genero = genero;
        this.letras = letras;
        this.sonidos = sonidos;
        this.tiempo = tiempo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getLetras(): string {
        return this.letras;
    }

    public setLetras(letras: string): void {
        this.letras = letras;
    }

    public getSonidos(): string {
        return this.sonidos;
    }

    public setSonidos(sonidos: string): void {
        this.sonidos = sonidos;
    }

    public getTiempo(): number {
        return this.tiempo;
    }

    public setTiempo(tiempo: number): void {
        this.tiempo = tiempo;
    }

    public mostrarDatos(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Género: " + this.genero);
        console.log("Letras: " + this.letras);
        console.log("Sonidos: " + this.sonidos);
        console.log("Tiempo: " + this.tiempo);
    }
}

let genero1 = new GeneroMusical("Pop", "Popular", "Letra 1", "Suave", 3);
let genero2 = new GeneroMusical("Rock", "Alternativo", "Letra 2", "Fuerte", 4);
let genero3 = new GeneroMusical("Jazz", "Clásico", "Instrumental", "Relajante", 5);
let genero4 = new GeneroMusical("Salsa", "Latino", "Letra 3", "Ritmos rápidos", 4);
let genero5 = new GeneroMusical("Reggaetón", "Urbano", "Letra 4", "Ritmos urbanos", 3.5);
let genero6 = new GeneroMusical("Clásica", "Instrumental", "Sin letras", "Suave", 5);
let genero7 = new GeneroMusical("Cumbia", "Popular", "Letra 5", "Ritmos folclóricos", 3.8);
let genero8 = new GeneroMusical("Blues", "Tradicional", "Letra 6", "Lento", 6);
let genero9 = new GeneroMusical("Electrónica", "Moderno", "Sin letras", "Sonidos digitales", 7);
let genero10 = new GeneroMusical("Hip-Hop", "Urbano", "Letra 7", "Beats", 3.7);

console.log("Genero 1");
genero1.mostrarDatos();

console.log("Genero 2");
genero2.mostrarDatos();

console.log("Genero 3");
genero3.mostrarDatos();

console.log("Genero 4"); 
genero4.mostrarDatos();

console.log("Genero 5"); 
genero5.mostrarDatos();

console.log("Genero 6"); 
genero6.mostrarDatos();

console.log("Genero 7"); 
genero7.mostrarDatos();

console.log("Genero 8"); 
genero8.mostrarDatos();

console.log("Genero 9"); 
genero9.mostrarDatos();

console.log("Genero 10"); 
genero10.mostrarDatos();
