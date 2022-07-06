"use strict";
class Persona {
    constructor(name) {
        this._name = name;
    }
    getNombre() {
        return this._name;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Miguel");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
