# Document Object Model

Este es un modelo el cual da una estructura basica de un archivo `html`, como se puede ver en la siguiente imagen:
![clipboard.png](https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/35650/image-upload/the=dom-tree.png)
Podemois ver distintos tipos de etiquetas HTML que puede  estructurarse asi, podemos observar que el documento puede tener la estructua basica y tener dentro **mucho más etiquetas** 

>_HTML es un lenguaje de marcación que sirve para definir el contenido de las páginas web. Se compone en base a etiquetas, también llamadas marcas o tags, con las cuales conseguimos expresar las partes de un documento, cabecera, cuerpo, encabezados, párrafos, etc. En definitiva, el contenido de una página web._

Es clave mencionar que el concepto de *DOM* es un estandar en `html`, y que para `JavaScript` cada uno de estos elementos los concidera como *OBJETOS*.
# DOM, HTML y JavaScript.
Bien, ahora tenemos que incorporar nuestro codigo *Javascript* dentro de nuestra estructura DOM de  HTML.
En este caso, se agregara posterior a la etiqueta `body` para agregar la etiqeuta `script` y dentro ira nuestro código.

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | L20</title>
</head>
<body>
    <h1 id = 'cabecero'>Ejemplo DOM con JS | L20</h1>
    <P id = 'parrafo'>Hola 🚀✨</P>
    <script>
        let cabecero = document.getElementById("cabecero").innerHTML;
        console.log(cabecero)
        console.log("Saludos desde JS")
    </script>
</body>
</html>
````
> Podemos ver que dentro de nuestra etiqueta `script` va el código JS que nosotros pongamos, en este ejemplo encontramos la siguiente declaracion:

````javascript
        let cabecero = document.getElementById("cabecero").innerHTML;
        console.log(cabecero)
        console.log("Saludos desde JS")
````
> Lo que hace realmente este código es capturar el contenido de la etiqeuta `h1` con el `id = 'cabecero`, tenemos estos componentes:
> - _*document*_ : Para poder acceder a los documetnos de nuestro documento HTML.
> - *_getElementById_* : Como Jacascript concidera todas las etiquetas como *Objetos* obtendemos el objeto de H1.
> - *_innerHTML_* :Esto ayudara a acceder al contenido de el objeto que obtuvimos con el getElementById.
---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)