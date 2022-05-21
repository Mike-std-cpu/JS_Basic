# Reloj digital. ⏰

En este proyecto al igual que `Proyecto de inserción de objetos` podremos usar conceptos y temas que se han visto a lo largo de estas lecciones. A diferencia del proyecto anterior, aqui nuestro archivo de estilos `css` no sera con base a bootstrap, y que debemos usar y saber como manera los conceptos de css.

## ¿Que hace? 🤔
Tenemos nuestra pagina principal `index` en html para poner nuestros componentes que contendra nuestro reloj digital.

Aqui podremos ver el manejo de archivos de estilos de `css` y como los manipulamos tanto con `clases` u `id`.

>Debmos tener en cuenta que en css, cuando hacemos referencia a una clase es comenzar con ' . ' y cuando nos referimos a un `id` es coon ' # ' como lo siguiente.

````html
<div id="reloj">
        <div class="reloj-contenedor" id="contenedor">
            <div id="hora">Reloj digital⏰</div>
            <div id="fecha">con JavaScript</div>
        </div>
    </div>
````

- Podemos ver el `id: reloj` y la `clase reloj-contenedor` y en css se maneja asi:

````css
#reloj{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 60px;
    text-shadow: 0px 0px 2px #333;
    color: white; 
}   

.reloj-contenedor{
    background-color: rgb(12, 167, 206);
    padding: 25px; /*espacio en toda la caja con un relleno de 25px*/
    max-width: 350px;
    text-align: center;
    border-radius: 6px;
    margin: 0 auto; /*margin: [sup & inf] [izq & der]*/
    margin-top: 10%;
}
````

### Funcionalidad en JavaScript.🔎

Viendo el código fuente podemos observar que usamos funciones flechas para poder adaptarnos a ellas y entender su fucionamiento, aqui usamos las funciones `Date()` donde con estas funciones que js las tiene por defecto podemos obtener fechas, horas, minutos y segundosmsegun lo que deseomos.

- `getHours()`.
- `getMinutes()`.
- `getSeconds()`.

````javascript
const mostrarTime = () => {
    let fecha = new Date();
    let hr = formatoDigitos(fecha.getHours());
    let min = formatoDigitos(fecha.getMinutes());
    let seg = formatoDigitos(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
````
> *Aqui se pued observar que obtenemos la fecha por estas funciones.*

 ---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)