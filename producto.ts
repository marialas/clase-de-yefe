class Producto 
{

    private identificador: string;
    private nombre: string;
    private tipo: string;
    private precio: number;
    private pais: string;
    private cantidad: number;

    constructor(identificador: string, nombre: string, tipo: string, precio: number, pais: string, cantidad: number) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.pais = pais;
        this.cantidad = cantidad;
    }

    public mostrarProducto(): void 
    {
        console.log
        (
            "ID: " + this.identificador + 
            ", Nombre: " + this.nombre + 
            ", Tipo: " + this.tipo + 
            ", Precio: " + this.precio + 
            ", País: " + this.pais + 
            ", Cantidad: " + this.cantidad
        );
    }
}

// Ingresar varios productos
const productos: Producto[] = [];
for (let i = 0; i < 3; i++) 
{
    const id = prompt("Ingrese el identificador del producto:") || '';
    const nombre = prompt("Ingrese el nombre del producto:") || '';
    const tipo = prompt("Ingrese el tipo del producto:") || '';
    const precio = parseFloat(prompt("Ingrese el precio del producto:") || '0');
    const pais = prompt("Ingrese el país del producto:") || '';
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:") || '0');

    const producto = new Producto(id, nombre, tipo, precio, pais, cantidad);
    productos.push(producto);
}

// Mostrar los productos ingresados
productos.forEach(function(producto) 
{
    producto.mostrarProducto();
});

// Contar la cantidad de productos y sumar los precios
const totalProductos = productos.reduce(function(sum, producto) 
{
    return sum + producto.cantidad;
}, 0);

const totalPrecio = productos.reduce(function(sum, producto) 
{
    return sum + producto.precio;
}, 0);

console.log("Total productos ingresados: " + totalProductos);
console.log("Suma de todos los precios: " + totalPrecio);