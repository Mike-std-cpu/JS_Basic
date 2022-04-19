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

function determinarTipo(tipo){ //Polimorfismo
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de la clase Gerente");
        console.log(tipo._departamento);
    }
    else if (tipo instanceof Empleado){
        console.log("Es un objeto de la clase Empleado");
        console.log(tipo._departamento);
        //Saldra Undefined por que el departamento es solo de la clase Gerente.
    }

    
}

//PRUEBAS
let gerente1 = new Gerente("Miguel", 5000, "Sistemas");
let gerente2 = new Gerente("Cristian", 7500, "Seguridad");
let empleado1 = new Empleado("Sarai", 6600);

//Resultados vistos desde salida.
determinarTipo(gerente1);
determinarTipo(gerente2);
determinarTipo(empleado1);