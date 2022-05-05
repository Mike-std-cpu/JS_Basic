let promesa =  new Promise((resolver) => {
    setTimeout(() => {
        resolver('Saludos con promesa TimeOut'), 3000 ;
    })
})

async function miFuncionConPromesa(){
   return 'Saludos con ASYNC';
}

// miFuncionConPromesa().then(valor => console.log(valor));

/**
 * Lo que podemos ver es que con asyn valoramos como una promesa que tan solo mandarla a llamar con then, podemos
 * sacar el valor de la promesa, en este aso se agregan los (a la funcion por que es una funcion)
 */

//ASYNC con Await
async function otraFuncionPromesaAwait(){
    let laPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await laPromesa);
}

otraFuncionPromesaAwait();