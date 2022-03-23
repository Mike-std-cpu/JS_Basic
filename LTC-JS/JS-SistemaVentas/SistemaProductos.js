class Producto {
    static contadorProductos = 0;
    
    constructor (nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        //Templetes Literals
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}  `;
        //return `| ID:  ${this._idProducto}, Nombre:  ${this._nombre},  Precio: ${this._precio} `;
    }
}

class Orden{
    static ContadorOrdenes = 0;
    static get ORD_MAX(){
        return 5;
    }

    constructor (){
        this._idOrden = ++ Orden.ContadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        this._idOrden;
    }
    agregarProducto(producto){
        if (this._productos.length < Orden.ORD_MAX){
            this._productos.push(producto); // Se agregara un nuevo producto al arreglo
        }else{
            console.log('NO SE PUEDE AGREGAR MAS PRODCUTOS')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){ // iterar variables de los arreglos
           totalVenta += producto.precio;//se sumaran cada uno de los precuios de los productos
           //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n' + producto.toString() + '}';
        }
        console.log(` Orden: ${this._idOrden} Total: $${this.calcularTotal()} Productos: ${productosOrden}`);
    }

}



let producto1 = new Producto('Television', 2500);
let producto2 = new Producto('Labadora', 15000);
let producto3 = new Producto('Tostadora', 3600);

console.log(producto1.toString() );
console.log(producto2.toString() );
console.log(producto3.toString() );

let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden2.agregarProducto(producto3);

orden1.mostrarOrden();// Se muestra en consola
orden2.mostrarOrden();