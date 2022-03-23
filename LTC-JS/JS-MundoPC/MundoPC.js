class DispoitivoEntrada{
    constructor(entrada, marca){
        this._entrada = entrada;
        this._marca = marca;
    }

    get entrada(){
        return this._entrada;
    }
    get marca(){
        return this._marca;
    }

    set entrada(entrada){
        this._entrada = entrada; // Se insertara el parametro a this. que es del atributo de la clase
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispoitivoEntrada{
    static contadorRatones = 0;

    constructor(entrada, marca){
        super(entrada,marca);
        this._idRaton = ++Raton.contadorRatones;
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
console.log(raton1.toString());