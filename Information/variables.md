# Variables y sus declaraciónes.

## 👾Declaraciones de variables.

Dentro del lenguaje de programacion, existe las distintas formas de declarar variables, a continuacion mencionaremos las existentes:

1. `var`: Es una de las maneras más antiguas de declarar variables en el mundo de JS. Ya que en esta no existen restricciones de alcance, es decir que pueden ser modificadas, acendidas mediante se van usando en el código.
   
2. `let`: En el caso de **let**, esta que si tiene restricciones de alcance de bloques de código, un ejemplo basico es que dentro de una funcion, se declara con _let_, fuera de este "bloque de código" la variable no existe.
   
3. `const`:Esta es igual que su compañera "let", solo que esta tiene una restriccion más ya que hace referencia a su significado, el cual es _constante_ refiriendoce a que ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

## Nobramiento de varibles.

Debemos de tener en cuenta que al momento de nombrar una variable exiten 2 limitaciones o restricciones de declarar:

1. El nombre únicamente puede incluir letras, dígitos, o los símbolos `$` y `_`.
2. El primer carácter no puede ser un dígito.

Tambien debemos de puntualizar una variable por lo regular se usa el metodo _camelCase_ ya que si tu variable tiene más de una palabra, debemos de capitalziar las letras mayusculas en el comienzo de cada nueva palabra.

```js
let userName;
let myUserNameOriginal;
```

> De esta manera sera más sencillo idetificar tus varibales.👾

### Palabras reservadas.

Esta regla pude a llegar hacer sencilla de entender, ya que para evitar problemas de sintaxis o de entendimeinto de tu código, **no esta permitido** usar las mismas palbras que se usan para declarar variables, funciones, ciclos, etc.

```js
let let = 5;
// no se puede le nombrar "let" a una variable ¡Error! 

let return = 5; a
// tampoco se le puede nombrar "return", ¡Error!
```

Al igual que el seguir las restricciones y como ya hemos visto en nuestra [[3. ECMAScript]] con el uso del `use strict`  no se salva de estas restricciones, como se puede ver en el siguiente codigo:

```js
// nota: no se utiliza "use strict" en este ejemplo 

num = 5; // se crea la variable "num" si no existe antes 

alert(num); // 5
```

En este caso no hay problema, pero ve lo siguiente:

```js
"use strict"

num = 5; // ERROR, num no esta definida.
```

### Constantes mayusculas.

Existe una práctica utilizada ampliamente de utilizar constantes como aliases de valores difíciles-de-recordar y que se conocen previo a la ejecución.

Tales constantes se nombran utilizando letras mayúsculas y guiones bajos.

Por ejemplo, creemos constantes para los colores en el formato “web” (hexadecimal):

```js
"use strict";

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...cuando debemos elegir un color

let color = COLOR_ORANGE;

alert(color); // #FF7F00
```

> Es claro que podemos recordar la palabra `COLOR_ORANGE` que recordar `#FF7F00` ¿no lo crees?😵‍💫

¿Cuándo se deben utilizar letras mayúsculas para una constante, y cuando se debe nombrarla de manera normal? Dejémoslo claro.

Ser una “constante” solo significa que el valor de la variable nunca cambia. Pero hay constantes que son conocidas previo a la ejecución (como el valor hexadecimal del color rojo) y hay constantes que son _calculadas_ en el tiempo de ejecución, pero no cambian después de su asignación inicial.

_**En otras palabras, las constantes con nombres en mayúscula son utilizadas solamente como alias para valores invariables y preestablecidos (“hard-coded”).**_

Una de nuestras recomendaciones es que al momento de declarar una variable, es neceasario que describas correctamente la funcionalidad o el dato que va a contener. Esto se recomienda para que la legibilidad del codigo sea la correcta, si en dado caso se reutiliuza o se debe de refactorizar tu código.

---
🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">
