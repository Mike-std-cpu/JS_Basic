// Obketos que se almacenan en un arreglo o es un conjunto de objetos
//let autos = new array('BMW', 'Mercedes', 'Volvo'); // Forma antigua

const   autos = ['BMW', 'Mercedes', 'Volvo']; // Nueva forma
console.log(autos);
console.log (autos [0]);
console.log (autos [1]);
console.log (autos [2]); 

for (let i = 0; i <= autos.length; i++){ // length nos proporciona la cantidad de elementos del arreglo
    console.log(i + " : " + autos[i]);
}

//Asiganr nuevos valores
autos[1] = "Ferrari";
console.log(autos[1]);
console.log(autos); //Verificamos -->

// -----   Agregar nuevos valores   -----

// 1.- PUSH
autos.push('Audi');
console.log(autos);

//2.-lenght
console.log(autos.length);
autos[autos.length] = 'Cadilac';
console.log(autos);

//3.- Numero del indice
autos[6] = 'Porshe';
console.log(autos); // El indice 5 no hay nada por que aun no se indica

//¿Como saber si es un arreglo?
//Array.array
console.log(typeof autos);
Array.isArray(autos);
console.log(Array.isArray(autos));

//instancia
console.log(autos instanceof Array);
//¿La variable autos es una instancia de un Arreglo?