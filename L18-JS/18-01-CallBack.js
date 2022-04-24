//EJEMPLO DE FUNCION CALLBACK

function miFuncion1(){
    console.log('Funcion 1');
}
function miFuncion2(){
    console.log('Funcion 2');
}

//Las funciones en js son secuenciales, segun se declaran se imprimiran.
miFuncion2();
miFuncion1();

//CALLCABCK
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(num1, num2, imprimir){// calback cuando mandamos a llamar la funcion imprimir como parametro a otra funcion.
    let sult = num1 + num2;
    imprimir(`El resultado es: ${sult}`);
}

sumar(5,3,imprimir);