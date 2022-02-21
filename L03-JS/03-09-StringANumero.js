let myNumber = "19";

//console.log(typeof myNumber);
let edad = Number(myNumber);// De string a numero
console.log(typeof edad);
//Condicional tradicional
if(edad >= 18){
    console.log("La persona puede votar");
}else{
    console.log("Es muy joven para votar")
}
//operador ternario
let resutlado = (edad >= 18) ? "Puedes votar" : "Eres muy joven, no puedes votar";
console.log(resutlado);

//NaN = Not a Number
let myNumber02 = "18x"
let edad2 = Number(myNumber02);
console.log(edad2);

if(isNaN(edad2)){
    console.log("No es Un numero");
}else{
    let resultado2 = edad2 >= 18 ? "La persona puede votar" : "Es muy joven para votar"
    console.log(resultado2);
}