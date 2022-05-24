class Ingreso extends Dato{
    static contadorIngresos =0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos; // cada que se instancie la clase se ira incrementando el contador
    }
    get id() {
        return this._id; // solo lectura
    }
}