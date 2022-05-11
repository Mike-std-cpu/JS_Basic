# Eventos.

Adiferencia de los eventos que tenemos en Javascript, en **HTML** son mediante diferntes, en el primer ejemplo tenemos un titulo `h1` que tendra una cabecera:

````html
<h1 onclick="cambiarText(this)">¡Hola a todos! 🙂✨</h1>
````

Tenemos el evento `onclick`, esto indica que al darle un _"click"_ al titulo se ejecutara la funcion `cambiarTexto` que tendra como parametro el contenido interno de la etiqeuta h1.

El terminio _this_ entra en funcion que como ya se comento anteriormente, JS concidera las etiquertas de HTML como objetos de tipo HTML, en este caso es como si colocaramos "this.innerHTML", que `innerHTML` es entrar al contenido de una etiqeuta, a su valor.

````html
 <script>
        function cambiarText(titulo){
            console.log(titulo)
            titulo.innerHTML = 'Soy el nuevo titulo 🚀';
        }
    </script>
````

Aqui entramos a nuestro aparto de JS, y podemos ver que no es necesario poner el mimo nombre del parametro, ya que en el body agregamos `this` y en la funcion `titulo`, ya que como se tiene en cuenta que es la misma funcion, las concidera igual.
En este caso, como ya comentamos, las etiquetas son **objetos** de tipo html, podemos agregar a sus atributos.

>Vemos eñ `titulo.innerHTML`, es muy familiar cuando deseabamos acceder a un atributo de una clase, en este caso es igual, desemaos capturar el contenido de la etiquetra h1 coni el `innerHTML` pero.. ¿De que etiqueta? a bueno, pues de la etiqueta h1 que mandamos como referencia y posterior a esto cambia el titulo.

Ahora, al darle click al titulo, se cambiara al que nosotros le demos.

---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)