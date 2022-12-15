# ¿Que es _npm_?

**npm** es parte esencial de Node.js, el entorno de ejecución de _javaScript_ en el lado del servidor basado en el motor V8 de Google. Es muy seguramente la principal razón del gran éxito de Node permitiendo que cientos de desarrolladores puedan compartir paquetes de software entre distintos proyectos.

> En este momento, se han publicado 1,493,231 paquetes por medio de su repositorio con más de 27 mil millones de descargas.

**npm** responde a las siglas de **Node Package Manager** o manejador de paquetes de node, es la herramienta por defecto de JavaScript para la tarea de compartir e instalar paquetes.

Tal como reza su documentación, **npm** se compone de al menos dos partes principales.

-   Un repositorio online para publicar paquetes de software libre para ser utilizados en proyectos Node.js
-   Una herramienta para la terminal (command line utility) para interactuar con dicho repositorio que te ayuda a la instalación de utilidades, manejo de dependencias y la publicación de paquetes.

Es decir, en tu proyecto basado en Node — que actualmente incluye los proyectos de aplicaciones web que utilizan Node para su proceso de compilación y generación de archivos — utilizarás la utilidad de linea de comandos (cli) **para consumir paquetes desde el repositorio online** , un listado gigantesco de soluciones de software para distintos problemas disponibles públicamente en [npmjs.com](http://npmjs.com/) y para manejar dependencias, y para ello necesitas un archivo de configuración que le diga a **npm** que este es un proyecto node.

## El archivo package.json📦

Famoso dentro de la comunidad de desarrolladores en javaScript, este archivo indica a npm que _el directorio en el que se encuentra es en efecto un proyecto o paquete npm_. Este archivo contiene la información del paquete incluyendo la descripción del mismo, versión, autor y más importante aún dependencias.

Este archivo es indemdiatamente creado con todas las `configuraciones` necesarias de npm para poder ejecutarlo correctamente, basta con ejecutar el sigueinte comando:

> `npm init`

Dentro de la lienas de comando, preguntara información necesaria para comenzar a configurar el proyecto:

````
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test)

````

Para mayor información sobre el llenado de estas dependencias ejecuta `npm help init`

Dentro de estas configuraciónes, se enlistara la tematica de cada pregunta realizada por _npm_.

-   **version**: Corresponde a la versión de tu proyecto. Lo ideal es mantener este campo actualizado cuando modificas algo en tu proyecto o librería utilizando por ejemplo [semver](https://semver.org/lang/es/).

-   **description**: Una breve descripción de tu proyecto. Particularmente importante si lo que estás creando es un paquete que publicarás vía npm.

-   **entry point:** Define cuál será el punto de "entrada" de tu proyecto. Esto es, que archivo se ejecutará cuando se importe tu proyecto dentro de otro. Nuevamente, especialmente importante para paquetes de librerías.

-   **test command:** Aquí puedes definir el comando que quieres ejecutar para realizar las pruebas de tu proyecto, este comando se ejecutará cuando escribas `npm run test` en tu terminal.

-   **git repository**: Define la url del repositorio git en donde este proyecto está alojado, se utiliza para informar a los usuarios de tu paquete el repositorio en donde encontrar el código fuente del proyecto.

-   **author:** El nombre e email de quien creó este proyecto.

-   **license**: Identifica el tipo de licencia de uso de tu proyecto. Permite a las personas saber que y que no está permitido al usar tu código. Puedes encontrar la lista completa de licencias soportadas por este campo [aquí](https://spdx.org/licenses/).

-   **private:** Es un valor boolean que te permite evitar que tu paquete se publique en el repositorio. Si lo que estás creando es un proyecto personal este valor será **true.**

### Scripts📄

Dentro del archivo **package.json** podremos ver dependencias, configuraciónes proporcionadas con la data que nosotros le hayamos proporcionado en la sección anterior.  Esta sección define un listado de propiedades que permiten ejecutar comandos dentro del contexto de tu proyecto incluyendo: comandos de otros paquetes listados como dependencias, scripts personalizados, scripts bash, etc.

Aqui estan las secciónes que podemos configurar sin nungun problema:

-   **start:** Primero ejecuta el script **generate** y luego inicia la aplicación web. `react-scripts` es una dependencia del paquete y se encuentra disponible dentro del directorio `node_modules`.

-   **build:** Ejecuta la compilación de la aplicación en modo producción.

-   **lint:** Ejecuta el proceso de linting (revisión de formato y estilo de código) del proyecto (Puedes leer más sobre este proceso en el [primer artículo](https://www.freecodecamp.org/espanol/news/que-es-linting-y-eslint/) de esta colección)

-   **test:** Ejecuta el script de pruebas basado en el paquete **jest** que también está instalado como dependencia.

-   **prettier**: Ejecuta **prettier** mediante el uso de **npx.** Este es un paquete especial de npm que permite ejecutar binarios dentro del alcance de tu proyecto sin necesidad de especificar dicho comando como script dentro del archivo `package.json`.

---
🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">