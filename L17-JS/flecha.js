//Funcion basica
function miFuncion(){
 console.log("Saludos desde mi funcion");   
}

miFuncion();

//FUNCIONES anonimas
//Por lo regular no se les agrega nombre, son anonimas.
let miOtraFuncion = function(){
    console.log("Saludos desde mi funcion 2");
}
// En este caso la funcion no tiene nombre, pero la pasamos a una variable con nombre.

miOtraFuncion();

//FUNCION FLECHA
let miFuncionFlecha = () => {
    console.log("Hola desde mi funcion flecha.")
}
/*Es casi la misma sintaxis que la funcion anonima, solo que aqui omitimos laS palabra reservada
  function, agregamos el () para las posibles parametros que tenga. */

  miFuncionFlecha();

