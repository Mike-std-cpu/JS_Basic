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
}

let persona1 = new Persona('Miguel', 'Andrade');
console.log(persona1)
console.log(persona1.nombre)
persona1.nombre = 'Jose';//set Jose to Miguel
console.log( persona1.nombre );//get Joe

let persona2 = new Persona('Sarai', 'Gonzlez');
console.log(persona2)
console.log(persona2.nombre)
persona1.nombre = 'Karina';//set Karina to Sarai
console.log( persona1.nombre );//get Karina