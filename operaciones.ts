class Operaciones {
    private numero1: number;
    private numero2: number;
  
    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
  
    public setNumero1(numero1: number): void {
        this.numero1 = numero1;
    }
  
    public getNumero1(): number {
        return this.numero1;
    }
  
    public setNumero2(numero2: number): void {
        this.numero2 = numero2;
    }
  
    public getNumero2(): number {
        return this.numero2;
    }
  
    public sumar(): number {
        return this.numero1 + this.numero2;
    }
  
    public restar(): number {
        return this.numero1 - this.numero2;
    }
  
    public multiplicar(): number {
        return this.numero1 * this.numero2;
    }
  
    public dividir(): number | string {
        if (this.numero2 !== 0) {
            return this.numero1 / this.numero2;
        } else {
            return "División por cero no es posible";
        }
    }
  }
  
  // Crear 5 objetos de la clase Operaciones
  const operacion1 = new Operaciones(10, 5);
  const operacion2 = new Operaciones(15, 3);
  const operacion3 = new Operaciones(20, 10);
  const operacion4 = new Operaciones(8, 2);
  const operacion5 = new Operaciones(7, 0);
  
  // Llamar a los métodos

  console.log("Operación 1:", "10 + 5 =", operacion1.sumar(), "10 - 5 =", operacion1.restar(), "10 * 5 =", operacion1.multiplicar(), "10 / 5 =", operacion1.dividir());
  console.log("Operación 2:", "15 + 3 =", operacion2.sumar(), "15 - 3 =", operacion2.restar(), "15 * 3 =", operacion2.multiplicar(), "15 / 3 =", operacion2.dividir());
  console.log("Operación 3:", "20 + 10 =", operacion3.sumar(), "20 - 10 =", operacion3.restar(), "20 * 10 =", operacion3.multiplicar(), "20 / 10 =", operacion3.dividir());
  console.log("Operación 4:", "8 + 2 =", operacion4.sumar(), "8 - 2 =", operacion4.restar(), "8 * 2 =", operacion4.multiplicar(), "8 / 2 =", operacion4.dividir());
  console.log("Operación 5:", "7 + 0 =", operacion5.sumar(), "7 - 0 =", operacion5.restar(), "7 * 0 =", operacion5.multiplicar(), "7 / 0 =", operacion5.dividir());