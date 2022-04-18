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
        //Comportamiento diferente al funcion padre, eso es SOBREESCRITUTRA
    }
}

//PRUEBAS
let gerente1 = new Gerente("Miguel", 5000, "Sistemas")
console.log(gerente1);
console.log(gerente1.obtenerDetalles()); 
// SOLO SE PUEDE VER NOMBRE Y DETALLE, es por eso que no sale el departamento.

