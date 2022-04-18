## Sobre Escritura

Basicamente la sobre escritura en JS o en los lenguajes de programación dentro de POO **Programacion Orientada a objetos**, es casi la misma terminologia que la herencia.

### Ejemplo:
- Se tiene una madre que tiene la caracteristica de canto, dado por hecho lo anterior, su hija tendra las miscas cualidad, pero de manera diferente _De una manera propia_.

Es aqui donde podemos tener el ejemplo ya dentro en materia:

Tenemos el siguiente diagrama:

 ```mermaid
 classDiagram
 class Empleado
 Empleado : +name
 Empleado : +sueldo
 Empleado : +obtenerDetalles()
 ```

 Aqui heredara de la clase **Gerente.**

 ```mermaid
 classDiagram
 class Gerente
 Gerente : +obtenerDetalles()
 ```
 
 **_Entonces tenemos como sobre escritura la herencia de metodos pero con su propio comportamiento_**.

 En el script `L15-JS` se podra visualziar el ejemplo practico.

 _Es clave mencionar que si se desea utilizar el metodo de la clase padre, se necesita usar la palabra `super`_

 ````javascript

     obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Departamento: ${this._departamento}`;
    }

 ````

 ---

🪄 Thanks for watching [@Mike Andrade](https://github.com/Mike-std-cpu)