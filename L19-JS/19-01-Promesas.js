let promesa = new Promise((resolver, rechazar) => {
    let expesion = true;
    if (expesion){
        resolver('!Resuetlo!');
    }else{
        rechazar('!Rechazada¡ se produjo un error.');
    }
});

promesa
.then(valor => console.log(valor))
.catch(error => console.log(error));