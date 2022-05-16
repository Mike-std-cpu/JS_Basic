class Persona {
    constructor(name, lastName){
        this._name = name;
        this.lastName = lastName;
    }

    get name() {
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
}
