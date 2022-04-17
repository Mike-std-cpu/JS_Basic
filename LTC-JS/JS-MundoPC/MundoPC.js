/**
 * CLASE DISPOSITIVO ENTRADA *****
 */
class DispoitivoEntrada{ //Clase de dispositivos de entrada
    constructor(entrada, marca){ // Constructor para obtener los atributos
        this._entrada = entrada;
        this._marca = marca;
    }

    get entrada(){ // Para mostrar
        return this._entrada;
    }
    get marca(){
        return this._marca;
    }

    set entrada(entrada){ // Para modificar
        this._entrada = entrada; // Se insertara el parametro a this. que es del atributo de la clase
    }
    set marca(marca){
        this._marca = marca;
    }
}

/**
 * CLASE RATON *****
 */

class Raton extends DispoitivoEntrada{ // Raton heredara las caracteristicas de DE
    static contadorRatones = 0; // Para poder ver la cantidad de instancias

    constructor(entrada, marca){
        super(entrada,marca);//Los atributos que se heredaran
        this._idRaton = ++Raton.contadorRatones; // Atributos nuevos
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `ID: ${this._idRaton}
        | Entarda: ${this._entrada}
        | Marca: ${this._marca}`;
    }
}

let raton1 = new Raton("USB","HP")
console.log(raton1.toString());// podemos ver la primera instancia
let raton2 = new Raton("Bluetooth", "DELL");
console.log(raton2.toString()); // ID se incrementea a 2-->

/**
 * CLASE TECLADO *****
 */

class Teclado extends  DispoitivoEntrada{
    static contadorTeclado =0;

    constructor (tipoEntrada, marca){
        super (tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `ID: ${this._idTeclado}
        | Entrada: ${this._entrada}
        | Marca: ${this._marca}`;
    }
}

let teclado1 = new Teclado("Bluetooth","MSI");
console.log(teclado1.toString());
let teclado2 = new Teclado ("USB", "ECER");
console.log(teclado2.toString(9)); // CMBIA EL ID cada que se instancia la clase o el constructor

/**
 * CLASE TECLADO *****
 */

class Monitor {
    static cotadorMonitores = 0;
    constructor (marca, tamaño){
        this._idMonitor = ++Monitor.cotadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `ID: ${this._idMonitor}
        | Tamaño: ${this._tamaño}
        | Marca: ${this._marca}`;
    }

}
//Prueba instanciando las clases.
let monitor1 = new Monitor("HP", "60");
console.log(monitor1.toString());
let monitor2 = new Monitor("Dell", "15");
console.log(monitor2.toString());

/**
 * CLASE TECLADO *****
 */

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado; // Agregamos el valor a los valores con guion bajo para que se puedan agregar.
    }
    toString(){
        return `ID: ${this._idComputadora}
        | Nombre: ${this._nombre}
        | Monitor: ${this._monitor}
        | Raton: ${this._raton}
        | Teclado: ${this._teclado}`;
    }
}

let pc1 = new Computadora("HP",monitor1,raton1,teclado1);
//Aqui ya usamos los datos de los bojetos que hemos hecho anteriormente, los pasmaos como referencia de la instancia de PC
console.log(pc1.toString());
/*
EL metodo toString se llamada de manera automatica de la sigueitne manera
-console.log(`${pc1}`)
*/
let pc2 = new Computadora("DELL",monitor1,raton2,teclado2);
console.log(`${pc2}`);

/**
 * CLASE ORDEN *****
 */

class Orden{
    static contadorOrdenes =0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this.idOrden
    }
    agregarPC(computadora){
        this._computadoras.push(computadora); // Se agregara la referencia con el metodo push al arreglo
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`; /*se usa esta sintaxis como ya se menciono, se ejecutara -
                                                      - el metodo toSring() solo*/
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarPC(pc1);
orden1.agregarPC(pc2);
orden1.agregarPC(pc1);//No importa que se repitan pc's
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarPC(pc2);
orden2.mostrarOrden();