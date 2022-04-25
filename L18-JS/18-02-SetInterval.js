 //SetIntervall
 //SetInterall manda a llamar la función cada cierto tiempo establecido

 let reloj = () =>{
    let fecha = new Date(); //Regresa la fecha actual
    console.log("La hora es: ")
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);
//Estamos usando callback  al usar la función reloj dentro de SetInterval