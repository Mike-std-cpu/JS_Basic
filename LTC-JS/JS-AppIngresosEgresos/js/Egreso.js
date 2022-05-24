class Egreso extends Dato{
    static contadorEgresos =0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos; // cada que se instancie la clase se ira incrementando el contador
    }
    get id() {
        return this._id; // solo lectura
    }
}