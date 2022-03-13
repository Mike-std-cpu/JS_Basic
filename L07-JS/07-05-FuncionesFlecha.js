//Funcion tipo expresion
let suma = function(a,b){return a+b}; //Las variables a la lista de valores que tomara una funcion
               
let resultado = suma (1,2);
console.log(resultado);

//Const para no cambiar los valores de la variable
const sumarFuncionTipoFlecha = (a, b) => a + b; // Nombre de la funcion = (Argumentos) => accion de la funcion

resultado = sumarFuncionTipoFlecha(5, 3);
console.log(resultado);

//Ejemplo de funciones de tipo expresion
const funcionMayorMenor = (a,b) =>
 (a>b) ? "El mayor es " +  a : "El mayor es " + b;

 resultado = funcionMayorMenor(2,10);
 console.log(resultado);