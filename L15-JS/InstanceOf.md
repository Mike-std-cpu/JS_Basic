Es hora de usar el termino de *IntanceOf* que segun la terminologia nos ayudara a indentificar la clase de la instancia que estemos detectando con _instanceof_.

Podemos ver en el ejemplo la sintaxis:
````javascript
if(tipo instanceof Gerente){
        console.log("Es un objeto de la clase Gerente");
        console.log(tipo._departamento);
    }
````
En este caso, vemos que la condición nos muestra _si la instancia es de la clase Gerente_ se ejecutara el bloque de código siguiente a este.Indagando por internet nos muestra la siguiente definición:

> El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.

- _Debemos mencionar que dentro de varias condiciones donde se tiene intancias de clases padres e hijas, es  necesario declarar las intanias de **Menor Rango**_ como se muestra a continuacion:

````javascript
function determinarTipo(tipo){ 
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de la clase Gerente");
        console.log(tipo._departamento);
    }
    else if (tipo instanceof Empleado){
        console.log("Es un objeto de la clase Empleado");
        console.log(tipo._departamento);
    }
````

Podemos ver que primero se pregunta la instancia hija que es `Gerente` y despues la padre que es `Empleado`.
