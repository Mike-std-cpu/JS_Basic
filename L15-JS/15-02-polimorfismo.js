// Usarmos las mismas clases Empleado y gerente.

//CLASE PADRE
class Empleado{
    constructor (nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: Nombre: ${this._nombre}, sueldo : ${this._sueldo}`;
    }
}

// CLASE HIJA
class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Departamento: ${this._departamento}`;
    }
}

function imprimir(tipo){// Metodo independiente de las clases
    console.log(tipo.obtenerDetalles());
    //Se podra acceder a los metodos Padre e hija, esto se llamada polimorfismo es Multiples formas.
}

//PRUEBAS
let gerente1 = new Gerente("Miguel", 5000, "Sistemas")
console.log(gerente1);
let gerente2 = new Gerente("Cristian", 7500, "Seguridad");
console.log(gerente2);
let empleado1 = new Empleado("Sarai", 6600);

//Resultados vistos desde salida.
imprimir(gerente1);
imprimir(gerente2);
imprimir(empleado1);
//Podemos ovbservar que no hay problema en usar el metodo de manera de usar diferentes clases.

