let persona3 = { // Variable tipo object
    nombre: 'Miguel',
    apellido : ' Andrade',
    edad : 23,
    email : 'hoodloom07@outlook.es',
    telefono : '55-79-40-22-13',
    idioma : 'es_mx',
    get lang (){
        return this.idioma.toUpperCase(); // UPEERCASE convierte una cadena a MAYUSCULAS
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },//Set se utiliaran para modifiar los valores de los atributos
    get nombreCompleto () { // Get significa capturar o cachar y no es necesario poner FUNCTION
       return this.nombre + this.apellido;
    },    
    get datosPersonales(){
        return this.email + "|" + this.telefono;
    }
}

console.log (persona3.nombreCompleto);
console.log (persona3.lang);
persona3.lang = 'en';
//persona.(METODO SET) = (ATRIBUTO A CACHAR)
console.log (persona3.lang);
console.log (persona3.idioma)