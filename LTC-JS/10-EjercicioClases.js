//Ejercicio de clases
class Persona{
    static contadorPersona = 0;
    static get PER_MAX (){
        return 3;
    }

    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;
        if (Persona.contadorPersona < Persona.PER_MAX){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log("SE HA ALCANZADO EL MAXIMO DE INSTANCIAS CREADAS |Numero de instancias: |" + PER_MAX);
        }
    }
    get nombre() {
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this.edad;
    }
    get idp (){
        return this.idPersona
    }
    set nombre(nombre){
        this.nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }

    informacion(){
        return `
        ID: ${this.idPersona}
        | Nombre y Apellido: ${this._nombre}${this._apellido}
        | Edad: ${this._edad}`;
    }

    toString(){
        return this.informacion();
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    static get EMP_MAX(){
        return 3;
    }
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        if(Empleado.contadorEmpleados < Empleado.EMP_MAX){
            this.idEmpleado = ++Empleado.contadorEmpleados;
        }else{
            console.log("SE HA ALCANZADO EL MAXIMO DE INSTANCIAS CREADAS |Numero de instancias: |" + EMP_MAX);
        }
    }

    get ide(){
        return this.idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()}
        | ID Empleado: ${this.idEmpleado}
        | Sueldo: ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    static get CLI_MAX(){
        return 3;
    }

    constructor (nombre, apellido, edad, fechaRegistro){
        super (nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        if(Cliente.contadorCliente < Cliente.CLI_MAX){
            this.idCliente = ++Cliente.contadorCliente;
        }else{
            console.log("SE HA ALCANZADO EL MAXIMO DE INSTANCIAS CREADAS |Numero de instancias: |" + CLI_MAX);
        }
    }

    get idc (){
        return this.idCliente;
    }

    get fechaRegistro (){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }

    toString(){
        return `${super.toString()}
        | ID Cliente:
         ${this.idCliente}
        | Fecha de Registro: ${this._fechaRegistro}`
    }
    
}

let persona1 = new Persona('Miguel', 'Andrade',23);
console.log(persona1.toString());
let empleado1 = new Empleado('Sarai','Gonzalez', 22, 7500);
console.log(empleado1.toString());
let cliente1 = new Cliente('Eduardo', 'Andrade', 14, '25-oct-2021')
console.log(cliente1.toString());

//Comprobacion de valor max de instancias
let persona2 = new Persona('JOSE','Andadre', 55);
console.log(persona1.toString());