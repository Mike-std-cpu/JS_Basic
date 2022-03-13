let x = 10; // Es una variable primitiva ya que no tiene  PROPIEDAD NI METODOS
let persona = { // Variable tipo object
    nombre: 'Miguel',
    apellido : ' Andrade',
    edad : 23,
    email : 'hoodloom07@outlook.es',
    telefono : '55-79-40-22-13',

    nombreCompleto : function(){ /* THIS apuntara a las variables del objeto, refifiendose como un persona.nombre == this.nombre ya que
                                     ya que no se puede acceder a si mismo por que es una propiedad.*/
       return this.nombre + this.apellido;
    },    
    datosPersonales : function(){
        return this.email + "|" + this.telefono;
    }
}
/*
LA VARIABLE PERSONA SOLO APUNTA A UN ESPACIO EN MEMROIA DONDE TIENE LAS PROPEIDADES nombre, edad, apellido & email
*/
console.log(persona.nombre);
console.log(persona.edad)
console.log(persona.email)
console.log(persona.nombreCompleto());
console.log(persona.datosPersonales());

//-ACCEDER A PROPIEDADES como un arreglo

console.log(persona['apellido']);
//for in
for(nombrePropiedad  in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}


//-AGREGAR Y ELIMINAR PROPIEDADES
//cambiar
persona.telefono = '55-78-30-33-14' // se sobre escribe ANTES --> 55-79-40-22-13
console.log(persona)
//eliminar
persona.nombree = 'Juan'
console.log(persona)
delete persona.nombree;
console.log(persona) //Ya eliminado


//-IMPRIMIR los valores de los OBJETOS
//Concatenar cada valor
console.log(persona.nombre + ", " + persona.apellido + "... ")
//for in
for (propiedades in persona){
    console.log(persona[propiedades]);
}
//Object.values  como un arreglo
let personaArray = Object.values (persona);
console.log(personaArray);
//JSON
let personaString = JSON.stringify(persona); //convertir el objeto a una cadena
console.log(personaString);