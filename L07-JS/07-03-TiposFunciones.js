//Funcion tipo expresion
let suma = function(a,b){return a+b};

let resultado = suma (1,2);
console.log(resultado);

//Funcion tipo self invoking
(function (a,b){
    console.log(" Ejecutando esta funcion -->  " + ( a + b ));
})(3,4);//fncion anonima que se puede auto llamar
//Solo se puede llamar una vez