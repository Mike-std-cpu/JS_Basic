/*
EJERCICIO
6AM - 11AM --> Buenos dias
12PM - 18PM --> Buenos  tardes
19PM - 24PM --> Buenos noches
0AM - 5AM --> MIMIDO
*/

let hora = "8";
let mensaje;

if( hora >= 6 && hora <= 11 ){
    mensaje = "Buenos dias";
}else if ( hora >= 12 && hora <= 18 ){
    mensaje = "Buenas tardes";
}else if ( hora >= 19 && hora <= 24 ){
    mensaje = "Buenas noches";
}else if(hora <= 5 && hora >= 0){
    mensaje = "MIMIDO -zzzzz-"
}else{
    mensaje = "No existe esta hora";
}
console.log(mensaje);
