/**
 UN CONSTRUCTOR es una funcion especial para objetos
 */
//CONTRUCTOR tipo persona 
function Persona (nombre, apellido, email){
    //this.propiedadObjeto = ParametroFunction;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + " " + this.apellido;
    }
}

//CREAR OBJETO o OBJETOS
let io = new Persona('Miguel','Andrade', 'hoodloom07@outlook.es');
console.log (io);

let mama = new Persona('Lety', 'Valadez','titivago@hotmail.com');
console.log(mama);

io.nombre = 'Jose';
mama.nombre = 'Martha';
console.log(io);
console.log(mama);

console.log(io.nombreCompleto());
console.log(mama.nombreCompleto());

//PROTOTYPE
Persona.prototype.tel = '55-22-33-11'; // Se agrega la priopuiedad a todos los objetos que se hagan
console.log(io.tel);
console.log(mama.tel);
//modificar
io.tel = '55-79-40-22-13'
mama.tel = '55-89-36-22-25'
console.log(io.tel);
console.log(mama.tel);
//SE PUEDE VISUALIZAR LA PROPIEDAD TEL ya en los bojetos
console.log(io);
console.log(mama);
