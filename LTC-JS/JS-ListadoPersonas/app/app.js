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

function agregarPerson(){
    const forma = document.forms['forma']; // Recuperamos los objetos del forms
    const name = forma['name'];
    const lastName = forma['lastName'];
    if(name.value != '' && lastName != ''){
        const persona = new Persona(name.value, lastName.value);
        console.log(persona)
        Personas.push(persona);
        showPersonas();
    }else{
        alert("Campos Vacios, Agregue un nombre y un apellido.👻")
    }



}