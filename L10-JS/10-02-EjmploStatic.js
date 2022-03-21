class Persona {

    static contadorPersona = 0;
    static get MAX_OBJ(){
        return 3;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ){
        this.idPersona = ++Persona.contadorPersona; //++preincrmeneto
        }else{
            console.log("SE han superado el maximo de instancias posibles");
        }
    }
    get nombre(){
        return  this._nombre;
    } 
    set nombre (nombre){
        this._nombre = nombre
    }
    get apellido(){
        return  this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
     nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
     }
     toString(){
        return this.nombreCompleto();
     }
}

class Empleado extends Persona { 
    constructor(nombre, apellido, puesto){
        super(nombre, apellido);
        this._puesto = puesto;
    }
    get puesto (){
        return this._puesto;
    }
    set puesto (puesto){
        this._puesto = puesto;
    }
   
    nombreCompleto(){
        return super.nombreCompleto() + " | " + this._puesto;
    }
}

let persona1 = new Persona('Miguel', 'Andrade');
console.log(persona1.toString());

let empleado1 = new Empleado('Sarai','Gonzalez','Maeta');
console.log(empleado1.toString());

let persona2 = new Persona('Eduardo', 'Andrade');
console.log(persona2.toString());

console.log(Persona.contadorPersona);// Se han creado estos objetos de las clases -->

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10; // Como es un metodo get, solo tendra el valor que se le defina
console.log(Persona.MAX_OBJ);// no se modifica el restulraod -->

let persona3 = new Persona('Cristhian', 'Martinez'); // Mnadara el mensaje por consola