let a = 11;
let max =10, min=0;

// OPERADOR AND &, regresa true cuando los 2 sean verdaderos, si uno no cumple todo es false
if(a>=min && a<= max){// un rango, el operador && deben ser true las dos condiciones, si no manda al else
console.log("Dentro del rango maximo y minimo");
}else{//Si una condicion es falsa, manda false
    console.log("Fuera de rango");
}

//OPERADOR OR  ||, regresa true si cualquiera de los 2 es true.
let vacation = true, freeDay = false;//Si vacation o friday sea true, toda la expresion es TRUE.

if(vacation || freeDay){
    console.log("El padre puede ir al juego");
}else{
    console.log("El padre esta ocupado");
}

//OPERADOR TERNARIO -- Contraccion de una condicinal If-else    
let resultado = (3>2) ? "Verdadero" : "falso"; //formato  CONDISION ? SI CUMPLE (if) : NO CUMPLE (else)
console.log(resultado)
//ejemplo
let num = 9;
resultado = num % 2 == 0 ? "PAR" : "IMPAR";
console.log(resultado);