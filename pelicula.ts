class Pelicula {
    private nombre: string;
    private genero: string;


    constructor(nombre: string, genero: string) {
        this.nombre = nombre;
        this.genero = genero;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getgenero(): string {
        return this.genero;
    }

    public setgenero(genero: string): void {
        this.genero = genero;
    }

    public mostrarDatos(): void {
        console.log("Nombre: " + this.nombre);
        console.log("genero: " + this.genero);
    }
}

let pelicula1 = new Pelicula("Titanic", "Drama");
let pelicula2 = new Pelicula("Avengers", "Acción");
let pelicula3 = new Pelicula("Toy Story", "Animada");
let pelicula4 = new Pelicula("El Señor de los Anillos", "Fantasía");
let pelicula5 = new Pelicula("Matrix", "Ciencia Ficción");
let pelicula6 = new Pelicula("Inception", "Thriller");
let pelicula7 = new Pelicula("Gladiador", "Acción");
let pelicula8 = new Pelicula("Shrek", "Animada");
let pelicula9 = new Pelicula("El Rey León", "Animada");
let pelicula10 = new Pelicula("Forrest Gump", "Drama");

console.log("Pelicula 1");
pelicula1.mostrarDatos();

console.log("Pelicula 2");
pelicula2.mostrarDatos();

console.log("Pelicula 3");
pelicula3.mostrarDatos();

console.log("Pelicula 4"); 
pelicula4.mostrarDatos();

console.log("Pelicula 5"); 
pelicula5.mostrarDatos();

console.log("Pelicula 6"); 
pelicula6.mostrarDatos();

console.log("Pelicula 7"); 
pelicula7.mostrarDatos();

console.log("Pelicula 8"); 
pelicula8.mostrarDatos();

console.log("Pelicula 9"); 
pelicula9.mostrarDatos();

console.log("Pelicula 10"); 
pelicula10.mostrarDatos();
