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

  // ********************************

  // Funciones flecha de una linea.
  const miFuncionFlecha2 = () => console.log("Saludos desde mi fucion flecha2");  
  miFuncionFlecha2();

  const saludar = () => 'Saludos desde mi funcion flecha | oneLine';
  console.log(saludar());

  const regresaObjeto = () => ({name: 'Miguel', lastname: 'Andrade', age: 25 }); 
  //Se debe de manejar entre parentesis por que se cofundira por la sintaxis {}
  console.log(regresaObjeto());

  const funcionParametro = (massage) => {console.log(massage)};
  funcionParametro('Soy un parametro')
