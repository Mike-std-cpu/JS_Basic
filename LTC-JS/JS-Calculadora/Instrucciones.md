# Calculadora con Javascript.#️⃣

En este apartado se encuentra el codigo de una calculadora funcional usando **javaScript** y **bootstrap.**

## bootstrap.

<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdijitalturk.com%2Fveysel%2Fwp-content%2Fuploads%2F2016%2F12%2FBootstrap.png&f=1&nofb=1" width=300 height=300 align=center/>

Basicamente, bootstrap es un framework de interfaz de usuario, de código abierto, creado para un desarrollo web más rápido y sencillo. Mark Otto y Jacob Thornton fueron los creadores iniciales.

> Contiene todo tipo de plantillas de diseño basadas en HTML y CSS para diversas funciones y componentes, como navegación, sistema de cuadrícula, carruseles de imágenes y botones.

En esta practica utilizaremos este apoyo que nos brinda *bootstrap* para poder tener nuestros componentes mayormente aliniados y con stilos que nos brinda el mismo framework. Podemos consultar su documentacion aqui --> [Documentación Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

````html
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

    <!-- jS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
````

EN nuestro archivo `html` tenemos estas 2 etiqeutas que nos ayudaran a importar tanto la hoja de estilos css y los script de JS necesarios para importarlo en nuestros componentes. Es necesario *checar la documentacón* de bootstrap para poder que terminoso se usan para los estilos, en el ejemplo de la calculadora podemos observar esto:

````html
    <div class="mb-3">
    <input type="number" id="operandoA" class="form-control"
            placeholder="Escribe el numero uno a operar." />
    <button class="btn btn-outline-success mb-3" onclick="sumar()">Sumar</button>
````
> Podemos observar que en las `class` tenenmos clases particulares, pues bien... Dentro de la documentación de *bootstrap* tenemos todos ests clases ya que llamando estas clases, bootstrap nos inporta los estilos dentro de sus `links` css y js.

En practicas más adeltante podremos ver más usos de `bootstrap` 🚀

---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)