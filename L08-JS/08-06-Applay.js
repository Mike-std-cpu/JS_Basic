// call es similar a applay
let persona1 = {
    nombre:'Miguel',
    apellido : 'Andrade',
    nombreCompleto: function (titulo, tel){
        return this.nombre + " " + this.apellido + " " + titulo + " " + tel;
    }
}

let persona2 = {
    nombre:' Sarai',
    apellido : 'Gonzalez'
    }

    //USO APPLAY 
console.log(persona1.nombreCompleto('Lic', '55-79-40-22-13'));


let array = ['Ingeniero', '55-20-48-82-12']
console.log(persona1.nombreCompleto.apply(persona2, array) );

/**
 A diferencia de call, aqui se puede organizar mediante un arreglo y evitar separar por comas cada argumnto, pasando los
 valores a un arrelgo 
 */

 //console.log(persona1.nombreCompleto.apply(persona2, ['Ingeniero', '55-20-48-82-12']) ); --> si en dado caso no se desea declarar el arreglo.