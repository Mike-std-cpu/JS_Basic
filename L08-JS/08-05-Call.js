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

    //USO CALL pora usar el metodo 1 nombreCompleto() a perosna 2
console.log(persona1.nombreCompleto('Lic', '55-79-40-22-13'));

console.log(persona1.nombreCompleto.call(persona2, 'Lic', '55-20-40-82-18') );