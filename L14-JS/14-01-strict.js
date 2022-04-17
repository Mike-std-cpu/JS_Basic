//METODO STRICTO.
/*Cuando hablamos de buenas practicas, es bueno declarar el tipo de valor que se declara en las 
  es aqui donde se usa el modo estricto para poder marcar esas buenas practicas.  
*/
"use strict"; // Con esto se agrega en modo estricto.

x=10; //mensaje "x is not defined"
console.log(x);
// No se podra usar ya que esta en mood estricto
let y = 10;
console.log(y);

//igual para funciones
miFuntion();
// se debe4 de declarar el tipo
function myFuntion(){
    let z = 15;
    console.log(z);
}

//Son para uso de buenas practica, sin el JS puede ejecutar sin problemas.
//Se puede poner la cadena strict dentro de funciones igual

