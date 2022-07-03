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

## Arreglos.

En versiones modernas de javaScript, los arreglos poseen una serie de métodos que nos permiten realizar operaciones para, recorrerlos, inspeccionarlos, o modificarlos.

Estas operaciones se introducen en la revisión de 2009 del lenguaje, conocida como ES5. ES5 es una de las revisiones más importantes que se han hecho al lenguaje, en parte por la introducción de estas operaciones.

Lo que tienen en común las operaciones `forEach`, `map`, `reduce`, `filter` y `find`, es que **son métodos que puedes usar en cualquiera arreglo, y que operan a través de funciones que enviamos como argumento para estos métodos, la sintaxis la iremos destacando en vídeos individuales para cada operación.**

Este tipo de trabajo adopta prácticas del paradigma de programación funcional, en el que la mayoría del código se estructura a través del uso de funciones.

El uso de las operaciones que verás en los próximos temas normalmente reduce la complejidad y lo verboso del código, es decir, lo hace más sencillo de comprender y reduce la cantidad de líneas que debes escribir para realizar una operación.

Es importante aclarar que un bloque de código no es mejor cuando es más pequeño que otro, cuando programamos debemos buscar que el código sea comprensible, no corto. Para evaluar este aspecto veamos las siguientes operaciones, ambas realizan lo mismo utilizando diferentes enfoques:

````javascript
let lenguajes = ["java", "C++", "Elixir", "Java"];
for(let i = 0;i < lenguajes.length; i++){
   let element = lenguajes[i];
   console.log(element);
}

lenguajes.forEach(function(lenguaje){ 
    console.log(lenguaje) 
    });
````
> En este escenario, además de que usar un método del `lenguajes` hace el código más corto, e incluso lo puede resumir en una sola línea, también es más expresivo, forEach nos da un indicio de que hace el código, para cada uno de los elementos.

1. ForEach();
2. Map();
3. Filter();
4. IndexOf();
5. includes();
6. find();
7. findIndex();
8. some();

## Arreglo iterables

Decimos que un arreglo es iterable cuando se puede separar las partes que lo conforman, en este caso un arreglo iene varios componentes que lo conforman.

````javascript
    // spread syntax (...)
    let arreglo = [1, 2, 3];
    console.log(arreglo); //Normal
    console.log(...arreglo); // Iterado
    /*
    normal: [1, 2, 3]
    iterado:
    1
    2
    3
    */

   // Rest parameters
   function demo (...arr){
    console.log(arr);
   }

   demo(10, 2); // Unificar : [10, 2]
````

## Programacion orioentada a objetos

La programación orientada a objetos es un paradigma de programación basado en la creación de objetos que pueden contener datos y funciones.

Se dice que la programación orientada a objetos busca que representemos nuestro código y algoritmos con objetos, como en la vida real.

Este paradigma está basado, principalmente en los principios de abstracción, encapsulación o encapsulamiento, herencia y polimorfismo

El propósito central de la programación orientada a objetos es que los objetos que definimos para nuestros algoritmos sean independientes, que no expongan sus detalles y que se puedan usar e integrar con otros objetos.

Un objeto es una combinación de propiedades o atributos que describen al objeto y una serie de métodos o acciones que puede ejecutar el objeto. Cada objeto en nuestro programa es capaz de almacenar información en sus propiedades y de modificarlas de manera independiente a otros objetos. Esto quiere decir que aunque tuviera dos objetos similares, digamos dos marcadores, cada uno puede modificar sus propiedades sin que estas modificaciones afecten al otro objeto, aún cuando ambos son del mismo tipo.

De este mismo objeto marcador, podemos decir que las propiedades que tiene son su color, su tamaño, la tinta disponible, el tipo de material del que están hecho, por mencionar algunos. Aunque tuviéramos dos tipos de marcadores, ambos podrían tener colores de tinta distintos, tinta disponible diferente, etc. Por eso en el paradigma cada objeto guarda un valor que le pertenece solo a él en sus propiedades.

Uno de los grandes poderes del paradigma es el de composición, objetos como el marcador que usamos de ejemplo, no son una unidad, son una composición de objetos más pequeños que tienen responsabilidades específicas y sencillas, la punta solo tiene que absorber tinta, el material que lo une solo tiene que sostenerlo todo, y así en lugar de pensar en el marcador como algo complejo con muchas funciones, pensamos en él como una composición de muchos objetos haciendo tareas sencillas.

De eso se trata separar nuestro código en objetos, de crear pequeños objetos, simples, con responsabilidades sencillas, que en conjunto, puedan solucionar problemas complejos, ayudándonos así a separar dicho problema en distintas responsabilidades.

Aunque en este bloque nos enfocaremos principalmente en el contexto y el valor de this, es importante comenzar hablando del tema de definición de 

### JSON (JavaScript Object Notaion)

Es un script lleno de objetos, los cuales ya hemos descrit anteriormente, teniendo el siguiente estructura.

````javascript
let curso = {
    titulo: "Curso de JS",
    formato: "Video",
    bloques: ["Introduccio", "Funcionalidad"];
}
````