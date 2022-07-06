class Persona{
    private _name : string;
    constructor(name : string){
        this._name = name;
    }

    getNombre():string{
        return this._name;
    }

    static metodoEstatico():number{
        return 10;
    }
}

let persona1 = new Persona("Miguel");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());