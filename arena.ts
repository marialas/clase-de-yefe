class Arena { 

    // Atributos 

    private tipo: String
    private color: String
    private cantidad: number 
    private consistencia : String 


    // constructor 
    constructor(tipo:string, color:string, cantidad:number, consistencia:string){
        this.tipo=tipo
        this.color=color
        this.cantidad=cantidad
        this.consistencia=consistencia
    }


    //acesorios 
    public getTipo():String{
        return this.tipo
    }

    public setTipo(tipo:string):void{
        this.tipo=tipo
    }

    public getColor():String{
        return this.color
    }

    public setColor(color:string):void{
        this.color=color
    }

    public getCantidad():number{
        return this.cantidad
    }

    public setCantidad(cantidad:number):void{
        this.cantidad=cantidad
    }

    public getConsistencia():String{
        return this.consistencia
    }

    public setConsistencia(consistencia:string):void{
        this.consistencia=consistencia
    }

      //mostrar datos
    public mostrar_datos():void
    {

    console.log("\n TIPO:"+this.tipo)
    console.log("\n COLOR:"+this.color)
    console.log("\n CANTIDAD:"+this.cantidad)
    console.log("\n CONSISTENCIA:"+this.consistencia)
    }

}

let Arena1 = new Arena("Arena letidio","gris",400,"gruesa")
console.log("\n Arena 1..............")
Arena1.mostrar_datos()

let Arena2 = new Arena("Arena (hormigón)","marron",300,"fina")
console.log("\n Arena 2..............")
Arena2.mostrar_datos()

let Arena3 = new Arena("arena limones","gris",1000,"media")
console.log("\n Arena 3..............")
Arena3.mostrar_datos()

let Arena4 = new Arena("arena zirosto","gris",3000,"fina")
console.log("\n Arena 4..............")
Arena4.mostrar_datos()

let Arena5 = new Arena("arena letidio","gris",500,"fina")
console.log("\n Arena 5..............")
Arena5.mostrar_datos()

let Arena6 = new Arena("Arena jal","gris",4200,"gruesa")
console.log("\n Arena 6..............")
Arena1.mostrar_datos()

let Arena7 = new Arena("Arena grava","marron",3020,"media")
console.log("\n Arena 7..............")
Arena2.mostrar_datos()

let Arena8 = new Arena("arena letijio","gris",1230,"media")
console.log("\n Arena 8..............")
Arena3.mostrar_datos()

let Arena9 = new Arena("arena gravilla","gris",3870,"gruesa")
console.log("\n Arena 9..............")
Arena4.mostrar_datos()

let Arena10 = new Arena("arena limones","gris",5200,"fina")
console.log("\n Arena 10..............")
Arena5.mostrar_datos()
