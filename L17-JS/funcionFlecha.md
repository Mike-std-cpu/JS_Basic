# Funciones Flehca.

Bien sabemos que las funciones son de uso diario cuando hablamos de desarrollo en Js, es por eso que a lo largo de este trayecto de desarrollo en este lenguaje, nos enseñaron que para declarar una **función** debemos declarar con la palabra reservada `function`, a continiacion se muestra un ejemplo:
````javascript
function miFuncion(){
 console.log("Saludos desde mi funcion");   
}
````
- _Aqui podemos notar que la sintaxis es de una función basica con `function` usamos **{ }** y despues el bloque de codigo que deseamos ejecutar cuando mandemos a llamar la funcion posteriormente._

## Funciones anonimas.
Antes de pasar a las funciones flehca, es clave mencionar que existe otra forma de declarar funcciones, tales como las anoniamas, aqui **NO** usamos le agregamos nombre a la funcion, solo declaramos la pr `function ()` para despues agregarla a una variable con nombre, aqui esta el ejemplo:
````javascript
let miOtraFuncion = function(){
    console.log("Saludos desde mi funcion 2");
}
````

## Funciones Flecha.
Ahora si, las funciones flecha son descritas de la siguiente manera.

> _"Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones."_

Este tipo de funciones tiene  sus **limitantes**:
1. No tiene sus propios enlaces a `this` o `super` y no se debe usar como **métodos**.
2. No tiene argumentos o palabras clave `new.target`.
3. No apta para los métodos `call`, `apply` y `bind`, que generalmente se basan en establecer un ámbito o alcance
4. No se puede utilizar como **constructor**.
5. No se puede utilizar yield dentro de su cuerpo.

A continuacion se mostrara un ejemplo.

````javascript
let miFuncionFlecha = () => {
    console.log("Hola desde mi funcion flecha.")
}
````
Los **( )** se usan por si tenddra algun tipo de parametro que reicibi y se usan **=>** tal cual su nobre lo dice, una _flecha_.

En el script `flecha.js se encuentra un ejemplo` y se podra interactuar con el.

--- 

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)