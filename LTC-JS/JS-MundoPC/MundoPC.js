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