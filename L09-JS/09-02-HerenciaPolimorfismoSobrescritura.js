class Persona {
    constructor(nombre, apellido){
     // this.nombreAtributo = nombreParametro;
        this._nombre = nombre; // Se agrega el ' _ ' ya que el metodo get no se puede llamar igual que nuetro atributo
        this._apellido = apellido;
    }
    get nombre(){
        return  this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre
     // this._nombreAtributo = NnombreParametro  -Se asiganra el nuevo parametro y cambiarlo al de atributo-
    }
    get apellido(){
        return  this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
     // this._nombreAtributo = NnombreParametro  -Se asiganra el nuevo parametro y cambiarlo al de atributo-
    }
     nombreCompleto(){
        return this._nombre + " " + this._apellido;
     }
     //Sobre escribiendo el metodo de la clase padre
     toSring(){
         //se aplica aqui polimorfismo (Multiples formas en tiempo de ejecucion)
        return this.nombreCompleto();
     }
}

class Empleado extends Persona { // extends va hacer herencia de la clase que se defina
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);// llamamos el cosntructo de la clase padre
        this._departamento = departamento;
    }
    get departamento (){
        return this._departamento;
    }
    set departamento (departamento){
        this._departamento = departamento;
    }
    //Sobre Escritura con .super
    nombreCompleto(){
      //return this._nombre + " " + this._apellido + " | " + this._departamento;
        return super.nombreCompleto() + " | " + this._departamento;
    }
}

let persona1 = new Persona('Miguel', 'Andrade');
console.log(persona1);
console.log(persona1.nombreCompleto ())

let empleado1 = new Empleado('Maria', 'Jimenez', 'Finanzas');
console.log(empleado1);
console.log(empleado1.nombre); //HERENCIA de la clase padre
console.log(empleado1.apellido);
console.log(empleado1.nombreCompleto ());

console.log(empleado1.toSring());