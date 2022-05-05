let promesa = new Promise((resolver, rechazar) => {
    let expesion = true;
    if (expesion){
        resolver('!Resuetlo!');
    }else{
        rechazar('!Rechazada¡ se produjo un error.');
    }
});

// Se crea un objeto tipo promise que tendra una funcion que tendra como parametros 'resolver' y 'rechazar' se crea la condiciòn
// - se podra llamar declrando el objeto dentro de la variable promesa y de ahi con .then y. catch se regresara en caso de exito o rechazo.

promesa.then(valor => console.log(valor)).catch(error => console.log(error));

// Ejemplo con setTimeOut

let promesa2 = new Promise((resolver) => {
    setTimeout(() => {
        resolver('Saludos con promesa y TimeOut'), 5000
        console.log('Adios..')
    })
});

promesa2.then(resolver => console.log(resolver));