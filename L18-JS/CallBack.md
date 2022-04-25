# Call Back.

Bien, es momento de hablar de las funciones `CallBack` estas son funciones que tienen como parametros otra **Función**.

El concepto de _Call Back_ es definidio asi en fuentes:

> _"Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción."_

Este tipo de funciones usan el termino de ser secuenciales, en este caso podemos usar las funciones segun las vamos declarado.

Ejemplo basico:

````javascript
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
````

Como ya platicamos, podemos observar que la funcion `saludar` mandara imprimir un mensaje con el `nombre` que cae como parametro.

Posterior a esto, se declara otra función donde pedira por teclado el nombre y se llamara la función donde se pedia el nombre.

- _Una observación es que no necesariamente se debe de llamar igual el parametro de la función a la misma función que hacemos callBack, como podemos ver, la función se llama `saludar` y en la 2da función se declara con otro nombre, en este caso `callback`, javaScript lo toma como callback sinla necesidad de llamarlo igual._

El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación asincrónica.

## Procesos Sincronos y Asincronos.
En este tipo de funciónes llevan en si los terminos de procesos sincronos, que son basicamante *Proceso que se iran ejecutando  linea por linea*, es como un tipo de orden de declaración liena a la vez.

En funciónes callBack no siguen este tipos de procesos puesto que se usan funciónes, variables o algun tipo de componente antes, despues de su declración o uso.

## SetTimeOut

Este proceso nos ayuda a realizar cierta acción depues de determinado tiempo declarnado el tiempo en *milisegundos*. A continuación se mostrara el ejemplo:

````javascript
    function miFuncionCallBack(){
        console.log("Saludo Asincrono despues de 3 segundos");
    }
    setTimeout(miFuncionCallBack,3000) //El tiempo se establece en milisegundos.

    //Se puede mandar la función directamente al SetTimeOut
    setTimeout(function (){console.log("Saludos despues de 5 segundos")}, 5000);

    //Funciones flecha
    setTimeout(() => {console.log("Saludos despues de 7 segundos")}, 7000);

````

--- 

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)