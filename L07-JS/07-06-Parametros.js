
let sumar = function (a, b){ //function (a = 1, b = 10) mandara undefined pero tendra esos valors, solo que no se le esta mandando un argumento, por esa razon UNDEFINED
    // Regresa el argumento que se le asigno a "a"
    console.log(arguments[0]); 
    console.log(arguments[1]);
    console.log(arguments [2])
    return a + b;
}

resultado = sumar (1, 10, 7); // En JS no es necesario que el numero de argumentos coincida con el numero de parametros
console.log(resultado);

//Para metros son las variables que vana contener los valores
//Los argumentos son los valores que se les enviara a los parametros de una funcion

//SUMA DE ARGUMENTOS

let resu = sumar_Todo(5, 4, 13, 10, 9, 10);// Se almacenaron en el arrelgo argumentos

function sumar_Todo(){
    let sum = 0;
        for (let i = 0; i < arguments.length; i++){
            sum += arguments[i]; 
         // sum = suma + arguments [i]
        }
        return  sum;
}
console.log(resu);
console.log()