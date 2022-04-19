# Try Catch
Es ahora de hablar de las expeciones en JavaScript, es un tema de suma importnacia que nos ayuda a ejecutar codigo cuando se detecta algun tipo de error.Buscando en la terminologia encontramos la siguiente definicion:

> _La sentencia try..catch..finally especifica un bloque de código para probar junto con una respuesta en caso de que ocurra un error. La sentencia try puede contener uno o más bloques try y termina con al menos una cláusula catch o finally._
>
En nuestro ejemplo podemos observar que usamos el `estrict mode`, esto estepecialmente nos ayuda a ser más estrictos en la sintaxis de nuestro código. Cualquier tipo de falta de declaracion de variables o funciones, el script mandara un error inmedito.

Usaremos esto para ejempliciar el try Catch a continuacion:

````javascript
'use strict' // Strict mode

try{
    x = 10; 
}catch(error){
    console.log(error);
}finally{
    console.log("Termina la revision de errores")
}

console.log("Continuamos con la codificiacion");
````

Podemos observar que metemos el error de `no defined` en la variable x, estando en el bloque de _try_ mandara error, posterior cachara el error en el _catch_ que imprimira el `error` y seguira con las demas lineas codigo. _(Cosa que no dejaria sin el try-Catch_

La sentencia _**finally**_ puede ser agregada opciónalmente y esta se ejecutara **SIEMPRE** aunque no se detecte error dentro del try, el finally siempre se ejecutara.

El uso de manejo de expecines es muy usado y fundamental dentro del desarrollo de proyectos en JS, es por eso que se debe de tener en cuenta cuando se esta programando para tener buenas practicas.

---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)