# Promesas en JS.
Una promesa se usaran `Funciones` de tipo callback, aqui se hacen peticiones de funciones.
![clipboard.png](inkdrop://file:OWa65ux-D)
Como podemos observar, se tendra un caso, si en dado caso entre en el estado **RESOLVED** `then` entrara a la promesa, en dado caso haya un error de algun tipo entra al **REJECTED** y entrara al `catched`.

> _Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen promises ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.
Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función._

Las promesas son `Objetos` que tiene funciones, es auqi donde se hace todo la promesa, declarando las varbales si cumple, entra al `then`, si no, entra al `catch`, como en el siguiente ejemplo.

````javascript
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
````

Tambien hay otra forma de declarar las promesas, y no con el catch, si no con parametros:

````javascript
promesa.then(
  valor => console.log(valor),
  error => console.log(error));
````
Si la condicion del `if` se cumple, pasa como parametro resolver a la variable `valor` imprimiendo su contenido.
En dado caso no cumpla,entrara al error y de igual manera imprimira el contenido.

---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)