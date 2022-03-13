const persona = { // variable almacena una referencia a un objeto
    nombre: 'Miguel',
    apellido : 'Andrade'
} 

console.log(persona);

function cambiarValorObject (p1){
    p1.nombre = 'Jose'; // Se modifica el atributo fr la clase persona modificandola
    p1.apellido = 'Valadez';
}
cambiarValorObject(persona);
console.log(persona);

/*
Para la eplicacion, se crea un objeto en memoria, en la funcion le mandamos como parametro la variable PERSONA,
ahora p1 apunta igual que la variable persona, y asi tenemos accesos a sus metodos y modificandoloes

*/