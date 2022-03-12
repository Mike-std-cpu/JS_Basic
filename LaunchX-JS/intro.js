console.log("\n********** Variables ***********\n")
var num1 = 4;; //definiicon de variables 
var num2 = 2
console.log(num1+num2);
console.log("El numero 1 es: " + num1 + " y el numero 2 es: " + num2);
console.log(num1 > num2);

console.log("\n********** Cadenas ***********\n")
var frase = "Hola como estas, esto es un saludo de prueba";
var frase2 = "Este es otro comentario ";
var fraseconv = `Ejemplo de concatenacion con comillas invertidas: ${frase} : para concatenra`;
console.log(frase);
console.log(fraseconv);

console.log("\n********** Operadors Logicos & AND ***********\n");
console.log(true && false); // Aqui necesariamente debe de ser igual para true
console.log(true && true);

console.log("\n********** Operadors Logicos || OR ***********\n");
console.log(true || false); // Aqui con que se auno true, todo sera ture
console.log(true || true);

console.log("\n********** Arreglos ***********\n");
let listaNum = [2, 3, 4, 5, 6, 7];
console.log(listaNum);
console.log(listaNum[0]); // posicion 0
listaNum.push(10);// se inserciono el 10
console.log(listaNum);

let palabras = ["lunchX", "innovaccion", "Frontend"];
console.log(palabras);
console.log(palabras.length);

let explorers = "Explorer";
console.log(explorers[1]);
console.log(explorers[5]);
 // Las cadenas igual se pueden trtar como arreglos.


 console.log("\n********** Objetos ***********\n");
let explorer = {
    nombre: "Nombre del explorer",
    email: "email@explorer.com",
    numero: 123456,
    mision: "JS",
    proyecto: {
        escolar: "Tareas",
        personal: "LaunchX",
        Trabajo: "Pagina web"
    }
}
console.log(explorer);
console.log(explorer.email);
console.log(explorer.proyecto);