# JavaScript
Es un lenguaje interpretado, es decir que cuando se ejecuta el progerama donde el interprete debe de entender el codigo.
Lengujaes copílados los cuales un claro ejemplo son Java y C++ necesitan  del copilador y ejecutan e uinterpretan el codigo en tiempo de cmopilacion.
Diferencias en tiempo de copilacion y en tiempo de ejecucion, es donde en javascript podra detectar errores ya cuando se este ejcutando esa misma linea donde se encuentra el error, al contrario de c+++ o java donde antes de ejecutarse ya se detecta el error.

## Tipado Dinamico.
Es cuando el interprete le dara un valor a la variable, no es necesario como en java que si es necesario poner el tipo de variable.

````java
//JAVA
int edad = 24;
````

````javascript
// JAVASCRIPT
let edad = 4;
 edad = 'cadena'
````

> En javascript jamas tendra un tipo de dato establecido.

## Tipos de datos.

### Tipos de datos primitivos.
- String.
- Number.
- Boolean.
- Undefined.
- Symbol.
- Null.

> Es clave mencionar que este tipo de deatos o de variables no se pueden modificar.

Existen *funciones* que nos pueden ayudar a convertir los diferentes tipos de datos de las variables. EN este ejemplo podemos mencionar a la funcion `parse*tipodato*`:
- `parseInt()`
- `parseString()`
- `parse(float()`
- etc.

## Truthy y Falsy
En JavaScript y a lo largo del curso me escucharás usar dos conceptos que de hecho son bastante divertidos de pronunciar, los valores Truthy y Falsy.

Decimos que un valor es Falsy cuando su representación booleana es falso, como mencioné en el tema anterior, los valores Nan, null, 0, -0, “”, y false son los considerados falsy.

Los valores truthy por su parte, son todos aquellos que no sean falsy, es decir que su representación booleana sea verdadero.

En muchos contextos del lenguaje, decir que retorna verdadero o falso no es correcto si no están retornando un booleano, por eso solemos usar las expresiones truthy para referrnos a cualquier valor verdadero, no solamente true, y falsy, para referirnos a cualquier valor falso, no solamente false.

Cuando el intérprete necesita saber si un valor es truthy o falsy hace un proceso llamado type coercion, del que hablaremos más adelante, que en términos simples significa que hará una conversión implícita, si lo simplificamos más significa que el lenguaje convertirá el valor a verdadero para evaluar si es truthy o falsy. Esta conversión es, digamos, momentánea, el valor original o la variable no cambian su valor, javaScript sólo obtendrá su representación booleana para saber si es truthy o falsy, sin modificar el valor original.

## Ciclos.
Los ciclos son muy utilziados dentro del ambiente de programación, ya que nos ayduan a repteri una definida acciones que nosotros le declaremos.

### Estructura.
1. Instruccion inicial.
2. Condición.
3. Intrucciónes despues de cada iteración.

````javascript
for (let = 1 ; i <= 10; i++){
    //BLOQUE DE CODIGO QUE SE DEBE DE JECUTAR.
}
````

## Funciones.

### Tipos.

1. Funcion normal.

Se declara con la palabra reservada `function`.
````javascript
    function cuadrado (numero){
        return numero * numero;
    }

cuadrado();
````

2. Expresion de Funcion.

Se declara igual solo que esta no debe de tener necesariamente un nombre ya que la estamos guardadno en una varbale externa.
````javascript
let funcion = function(){
    return console.log("¡Bien!")
}
```` 
3. Función flecha.
4. Funciones Puras.
 
Es aquella que no produce efectos secundarios, ya sea por declaracio de varuables dentro del scope local de alguna funcion.

````javascript
 // Sabemos que al modificar alguna variables dentro de un scope de codigo, puede haber mutaciones en las variables usadas.
 let edades = [20];
 function modificador(edades){
    let copia = [...edades]; //generamos una copia
    copia[25]; // Aqui se modifica a la copia y no al valor original
    return copia;
 }

 console.log(edades); // 20
 modificador(edades); // 25
````

## Scope
Es el alacance es una coleccion de variables, funciones en ciertas partes de tu codigo, ya se ne ciertos bloques o en todo el codgo.

1. Scope Global: Estas estan al alcance en todo el codigo, y se modifican se pueden modificar globlamente en el codigo.
2. Scope local: Son usadas en ciertos bloques de codigo, ya sea en funciones, arreglos o clases.

## Hoisting
Las `funciones` o `variables` se pueden usar antes de ser *declaradas*, por su proceoso de **hoisting**, donde solo la podemos utilizar para funciones o variables con `var` pero no es una buena pracrtica en las variables, si hablamos en las funciones si es posible..

````javascript

demo(1,2);

function demo (x,y){
    return x + y;
}
````