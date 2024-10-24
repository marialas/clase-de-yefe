class Persona
{
    // atributos
    private nombre: string 
    private fechaNacimiento:Date
    private teléfono: string
    private dirección: string
    private ciudad: string

    //contrucctores
    constructor(nombre: string, fechaNacimiento:Date,teléfono: string, dirección: string, ciudad: string ){
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.teléfono = teléfono
        this.dirección = dirección
        this.ciudad= ciudad

    }

    //acesorios
    public getNombre():string{
        return this.nombre
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre
    }

    //mostrar datos
    public mostrar_datos():void
    {

    console.log("\n nombre:"+this.nombre)
    console.log("\n fechaNacimiento:"+this.fechaNacimiento)
    console.log("\n telefono:"+this.teléfono)
    console.log("\n direccion:"+this.dirección)
    console.log("\n ciudad:"+this.ciudad)
    }
    // calcular edad
    public calcularEdad():number 
    {
        return (new Date().getFullYear()-this.fechaNacimiento.getFullYear())
    }
    public edad():void
    {
        
        if(this.calcularEdad()>=18)
            console.log("es adulto")
        else
            console.log("no es adulto")
    }
} 

let Persona1 = new Persona("pepito", new Date(2018,9,26) ,"3128481741","calle 14 23 a34", "popayan")
console.log("\n persona 1..............")
Persona1.mostrar_datos()

let Persona2 = new Persona("mabel",new Date(2006,9,26) ,"3128481741","calle 17 23 a34", "silvia")
console.log("\n persona 2..............")
Persona2.mostrar_datos()

let Persona3 = new Persona("jhon",new Date(2056,9,16) ,"312486283","calle 19 45 a34", "popayan")
console.log("\n persona 3..............")
Persona3.mostrar_datos()

let Persona4 = new Persona("richar",new Date(2250,9,25),"312537647241","calle 23 30 a34", "huila")
console.log("\n persona 4..............")
Persona4.mostrar_datos()

let Persona5 = new Persona("mariana",new Date(2086,9,26) ,"31283751741","calle 69 18 a34", "san sebastian")
console.log("\n persona 5..............")
Persona5.mostrar_datos()


