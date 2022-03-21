class Persona {

    static contadorObjetosPersona = 0; // ATRIBUTO QUE PERTENECE A LA CLASE
    email = " hoodloom07@outlook.es"; // ATRIBUTO NO STATIC DE OBJETOS

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++; // aumentara cada que se haga una estancia
        console.log("SE INCREMENTA CONTADOR: " + Persona.contadorObjetosPersona);
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
        return this._nombre + " " + this._apellido;
     }
     toSring(){
        return this.nombreCompleto();
     }
     // METODO STATIC
     static saludar(){ // se asociara con la clase, no con losm objetos

        console.log("Slaudos desde metodo STATIC :D");
     }
     static saludar2(persona){
        console.log(persona.nombre);
     }
}

class Empleado extends Persona { 
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento (){
        return this._departamento;
    }
    set departamento (departamento){
        this._departamento = departamento;
    }
   
    nombreCompleto(){
        return super.nombreCompleto() + " | " + this._departamento;
    }
}

let persona1 = new Persona('Miguel', 'Andrade');
console.log(persona1);
console.log(persona1.nombreCompleto ());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Finanzas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.apellido);
console.log(empleado1.nombreCompleto ());
console.log(empleado1.toSring());

//persona1.saludar(); // No es posible mandar a llamar un metodo STATIC desde ub objeto
//UN METODO ESTATICO SE ASOCIA CON UNA CLASE pero no con los objetos que se hagan

/**
 * los miembros estáticos de las clases en Programación Orientada a Objetos en general son atributos y 
 * métodos que dependen directamente de una clase, en vez de depender de un objeto en particular.
 */

//SOLO FUNCIONA CON LA CLASE, NO CON OBJETOS
Persona.saludar(); // Se observa en consola
Persona.saludar2(persona1);
Empleado.saludar2(empleado1);

//atributos static
console.log(persona1.contadorObjetosPersona);// como es de un objeto (Una instancia) no puede acceder a el
console.log (Persona.contadorObjetosPersona); // como es de la clase, si se puede acceder
console.log(Empleado.contadorObjetosPersona); // CADA QUE SE HACE UNA INSTANCIA UN OBJETO,  SE AUMENA UN NUMERO

//No static
console.log(persona1.email);
console.log(Persona.email);