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

## Onload.
Este evento nos audara a que al entrar a la pagina, en su mero arranque, pueda ejecutar algo que nosotros deseamos, en este ejemplo agregamos un `alert`.

````javascript
        function entrar(){
            alert('¡Entrando a la pagian web!🚀')
        }
````
El evento `onload` va declarado en el body, manando a llamar una funcion, en este caso llamada `mostrar()`.

Ahora, ocuparemos el evento onload para mostrar si las 🍪🍪🍪 estan habilitadas, se trabajo a esto:
````javascript
       function entrar(){
            alert('¡Entrando a la pagian web!🚀');
            let texto = '';
            if(navigator.cookieEnabled){
                texto = ' Las coockies estan habilitadas.🍪'
            }else{
                texto = 'Las cookies estan inhabilitadas.🍪'
            }
            document.getElementById('cookies').innerHTML = texto;
        }
````
Esto hara que despues del alert, dentro del `div` que tiene como id cookies, muestre si las cookies estan habilitadas.

## Onchange.
Este evento hace que una etiqueta de texto sea mdodificada, en el ejemplo hacemos que un `input` sea cambiado a **MAYUSCULAS**.

````html
 Nombre: <input type = 'text' onchange="convertir(this)"/>
````
> Como podemos observar, tenemos el evento `onchange` que tiene una función que tiene como parametro el termino `this`, que como ya hemos platicado en la lección anterior, este this pacapara todo el objeto de tipo `type` y esto hace que podamos capturar sus atributos.

Ahora bien, declaramos nuestra función `convertir()`.

````javascript
function convertir(nombreInput){
            nombreInput.value = nombreInput.value.toUpperCase();
````
Aqui se observa como captura todo el objeto del `input` como parametro, dentro de la funcion, solo accedemos a su `value` que s lo que necesitamos, lo pasamos a su misma variable pero ahora con la funcion `upperCase()` *Esto hara que convirta el string que tengamos a **MAYUSCULAS** *.
## OnFocus & OnBlur.

Esyos eventos nos sirven practicmente para dar un formato a un elemetnoq ue tengamos fijado, como por ejemplo un casilla de texto, al momento de dar click y estar en esa casilla focada, se pondra de un color y cuando ya no este en focada volverla a poner del mismo color inicial, para eso usaremos `OnFocus` & `OnBlur`.

````html
    Primer Apellido: <input type="text" onfocus = "cambiarFocu(this)" onblur = "cambiarBlur(this)"/>
    Segudno Apellido: <input type="text" onfocus = "cambiarFocu(this)" onblur = "cambiarBlur(this)"/>
````
> Es similar que los eventos pasados, donde le agregaremos una función que tendra de parametro los atributos del objeto `input` posteriormente se agrega la funcion en nuestro script.

 ````javascript
        function cambiarFocu(elementoInput){
            console.log('Ejecuta focus')
            elementoInput.style.background = 'Green';
        }
        function cambiarBlur(elementoInputs){
            console.log('Ejecuta blur')
            elementoInputs.style.background = 'White';
        }
````

## AddEvenetListener.
Esta funcion nos ayudara a simplificar mayor mente nuestro código, ya que podemos enlisatr diferntes eventos directamente en nuestro script de JavaScript.

````html
Nombre: <input type="text" onfocus="cambiarFocu(this)" onblur="cambiarBlur(this)" />
Curso: <input  type="text" id="curso" />

<script>
  //NOMBRE **
  function cambiarFocu(elementoInput) {
            console.log('Ejecuta focus')
            elementoInput.style.background = 'Green';
        }
        function cambiarBlur(elementoInputs) {
            console.log('Ejecuta blur')
            elementoInputs.style.background = 'White';
        }
  //CURSO **
   document.getElementById('curso').addEventListener('focus', cambiarFocus);
        document.getElementById('curso').addEventListener('blur', cambiarBlu);
        function cambiarFocus(evento){
           let componente =  evento.target;
           componente.style.background = 'grey'
        }
        function cambiarBlu(evento){
            let compoenente = evento.target.style.background = 'White'
        }
</script>
````
Como podemos ver, en el caso del `input nombre`, teniamo que mandar a ejecutar la función que hiciera el evento, en el caso del `input curso` solo se necesita el `id`.
Es lave mencionar que al momento de programar la funcion de tipo callback del `AddEventListener`, tenemos como parametro `evento` que hace referencia a la etiqueta de tipo `input` del `id Curso` es decir, tendra el evento que esta ejecutando.

El elemento `target` nos regresara el elemento de tipo `input text`, es como usar le this, que regresaria el objeto input.
Depues de esto podemos acceder a su propiedad y cambiarle el formato, texto, etc.

---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)