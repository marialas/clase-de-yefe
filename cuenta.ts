class Cuenta {
    private titular: string;
    private valorActual: number;

    constructor(titular: string, valorActual: number) {
        this.titular = titular;
        this.valorActual = valorActual; 
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setValorActual(valorActual: number): void {
        this.valorActual = valorActual;
    }

    public getValorActual(): number {
        return this.valorActual;
    }

    public mostrar(): void {
        console.log("Titular: " + this.titular + ", Valor Actual: " + this.valorActual);
    }

    public ingresar(cantidad: number): void {
        if (cantidad < 0) {
            console.log("No es válido el valor");
        } else {
            this.valorActual += cantidad;
            console.log("Se han ingresado " + cantidad + ". Nuevo saldo: " + this.valorActual);
        }
    }

    public retirar(cantidad: number): void {
        const valorInicial = this.valorActual;
        this.valorActual -= cantidad;
        console.log("Valor inicial: " + valorInicial + ", Retirado: " + cantidad + ", Nuevo saldo: " + this.valorActual);
    }
}

// Crear un objeto de la clase Cuenta
const cuenta1 = new Cuenta("Juan Pérez", 1000);

// Mostrar la cuenta
cuenta1.mostrar();

// Ingresar dinero
cuenta1.ingresar(500);
cuenta1.ingresar(-100);

// Retirar dinero
cuenta1.retirar(300);