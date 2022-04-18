De igualmanera iremos manejando las clases ocupadas en **Sobre Escritura** usando asi, las metodos `obtenerDetalles();` tanto de la clase _Empleado_ como la de _Gerente_.

Tenemos que definir el significado de **_Polimorfimso_**:

> En programación orientada a objetos, polimorfismo es la capacidad que tienen los objetos de una clase en ofrecer respuesta distinta e independiente en función de los parámetros (diferentes implementaciones) utilizados durante su invocación. Dicho de otro modo el objeto como entidad puede contener valores de diferentes tipos durante la ejecución del programa.

En este caso, tenemos las clases padre e hija que son `Empleado` y`Gerente` como se podra observar se tienen una _Funcion_ independiente fuera de las dos clases que obtebdra como parametro la variable `tipo`.

````javascript
function imprimir(tipo){// Metodo independiente de las clases
    console.log(tipo.obtenerDetalles());
    //Se podra acceder a los metodos Padre e hija, esto se llamada polimorfismo es Multiples formas.
}
````
Se usa el termino de polimorfismo ya que se usa un metodo generico que podr ausarse para el metedo `mostrarDetalle()`. En este caso se pueden mandar usar el metodo imprimir con cualquier intancia que se haya hecho de los objetos existentes ya sea *Empleado* o *Gerente*

````javascript
let gerente1 = new Gerente("Miguel", 5000, "Sistemas")

let gerente2 = new Gerente("Cristian", 7500, "Seguridad");

let empleado1 = new Empleado("Sarai", 6600);

//Resultados vistos desde salida.
imprimir(gerente1);
imprimir(gerente2);
imprimir(empleado1);
````
Los resultados se visualizan desde la salida de VSC.

 ---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)