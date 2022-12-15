# ¿Que es JS?🤔

Debemos de tener en cuenta que **Javscript** es un **lenguaje interpretado**, no es necesario copilar. Inicialmente se creo para dar servicios cliente/navegador para sitios web, como ya mencionamos. 

Hoy, JavaScript puede ejecutarse no solo en los navegadores, sino también en servidores o incluso en cualquier dispositivo que cuente con un programa especial llamado [El motor o intérprete de JavaScript](https://es.wikipedia.org/wiki/Int%C3%A9rprete_de_JavaScript).

El navegador tiene un motor embebido a veces llamado una “Máquina virtual de JavaScript”.

Diferentes *motores* tienen diferentes “nombres en clave”. Por ejemplo:

-   [V8](https://es.wikipedia.org/wiki/Chrome_V8) – en Chrome, Opera y Edge.
-   [SpiderMonkey](https://es.wikipedia.org/wiki/SpiderMonkey) – en Firefox.
-   …Existen otros nombres en clave como “Chakra” para IE , “JavaScriptCore”, “Nitro” y “SquirrelFish” para Safari, etc.
JavaScript se se usa típicamente para hacer sitios web interactuadles, aplicaciones web y para la creación de servidores web, apps móviles, apps de escritorio etc.  
  
Existe una entidad que se encarga de estandarizar lenguajes de programación llamada ECMA, y hace que lenguaje sea estandarizado para todo los tipos de navegadores que existen. ECMAScript es la estandarización y compatibilidad de los navegadores, servidores del lenguaje de programación, actualmente existe el EcmaScript6.

## Limitantes de JavaScript.

De manera general, podemos describir que JS tiene limitantes con el mero fin de tener la _Informacion del usuario asalvo_, a continuación mencionaremos las tematcias de las limtiantes dentro de este margen.

- Una de las más desconocidas es que dentro de los stios web hay sitios que nosa permiten la habilitación de camara, microfono o ubicacion del usuario (es decir nostros). Por lo tanto, una página habilitada para JavaScript no puede habilitar una cámara web para observar el entorno y enviar la información a la [NSA](https://es.wikipedia.org/wiki/Agencia_de_Seguridad_Nacional).
- Ventanas de navegacion no pueden estar conectadas entre si, por ejemplo, JavaScript no puede acceder a la otra si provienen de diferentes sitios (de diferente dominio, protocolo o puerto).

> Esta restriccion es conocida como _"Same Origin Policy"_, estas paginas deben de estar conectadas pero las dos deben de estar deacuerdo de intercambiar datos y deben de contener código especial de JS que este controlandon este proceso.

Volvemos a confirmar que esto se hace por cuidado del usuario y su información, por ejemplo: _Una página de `http://algunsitio.com`, que el usuario haya abierto, no debe ser capaz de acceder a otra pestaña del navegador con la URL `http://gmail.com` y robar la información de esta otra página._ 🔐

![JS](https://github.com/Mike-std-cpu/JS_Basic/Information/img/JSWEB.jpg)

- JavaScript puede fácilmente comunicarse a través de la red con el servidor de donde la página actual proviene. Pero su capacidad para recibir información de otros sitios y dominios está bloqueada. Aunque sea posible, esto requiere un acuerdo explícito (expresado en los encabezados HTTP) desde el sitio remoto. Una vez más: esto es una limitación de seguridad.
![[Pasted image 20221214152300.png]]
> Tales limitaciones no existen si JavaScript es usado fuera del navegador; por ejemplo, en un servidor. Los navegadores modernos también permiten complementos y extensiones que pueden solicitar permisos extendidos.

### ¿Que hace JavaScript tan especial?🚀

Dentro de las limitantes antes expuesta (que en lo personal no creo que sean limitantes) existen 3 puntos fundamentales dentro de JS.

1. COMPLETA integracion con tecnologias CSS y HTML.
2. Trabajo simple para el desarrollo de coplementos con otras tecnologias.
3. Es soportado por la mayoria de los navegadores y es habilitado de manera predeterminada.
> Como complemento, podemos decir que JS tiene la capacida de crear tanto servidores, aplicaciones moviles, etc.

Pero debemos tener en cuenta que existen algunos lenguajes de programación que podrian tener otros enfoques, esto dependera de las necesidades o los requerimientos de  desarrollo que se tengan que implementar. JS no es el unico lenguaje existente, ya que recientemente han aparecido una gran cantidad de nuevos lenguajes, los cuales son _transpilados_ (convertidos) a JavaScript antes de ser ejecutados en el navegador.

> Esta famosa _"Transpilación_, se ha hecho demaciada famoso con el pasar de los años, puesto que esta "Transformación" sucede de manera casi instantanea, y esto permite a los desarrolladores codificar en otros lenguajes y covertirlo automaticamente destras de telon, tales como:

-  [CoffeeScript](https://coffeescript.org/) Es una “sintaxis azucarada” para JavaScript. Introduce una sintaxis corta, permitiéndonos escribir un código más claro y preciso. Usualmente desarrolladores de Ruby prefieren este lenguaje.

-   [TypeScript](https://www.typescriptlang.org/) se concentra en agregar “tipado estricto” (“strict data typing”) para simplificar el desarrollo y soporte de sistemas complejos. Es desarrollado por Microsoft.

-   [FLow](https://flow.org/) también agrega la escritura de datos, pero de una manera diferente. Desarrollado por Facebook.

-   [Dart](https://www.dartlang.org/) es un lenguaje independiente, tiene su propio motor que se ejecuta en entornos que no son de navegador (como aplicaciones móviles), pero que también se puede convertir/transpilar a JavaScript. Desarrollado por Google.

-   [Brython](https://brython.info/) es un transpilador de Python a JavaScript que permite escribir aplicaciones en Python puro sin JavaScript.

-   [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html) es un lenguaje moderno, seguro y conciso que puede apuntar al navegador o a Node.

---

🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">