const Personas = [
    new Persona('Miguel', 'Andrade'),
    new Persona('Sarai', 'Gonzalez'),
    new Persona('Cristhian', 'Martinez'),
    new Persona('Mario', 'Solano')
];

function showPersonas(){
    console.log('Mostrando Personas');
    let text = '';
    for(let person of Personas){
        console.log(person);
        text += `<li>${person.name} ${person.lastName}</li>`
    }
    document.getElementById('personas').innerHTML = text;
}