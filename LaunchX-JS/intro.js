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

/* Flujo cocnidcional*/
let condicion = true;
if (condicion){
console.log("Verdad");
}else{
console.log("Falso");
}

//EJEMPLO
let num = 3;
if(num == 1){
    console.log("Numero 1");
}else if (num == 2){
    console.log("Numero 2");
}else if(num == 3){
    console.log("Numero 3");
}else if(num == 4){
    console.log("Numero 4");
}else{
    console.log("Numero Desconocido");
}


/* Ciclo condicional */
console.log("\n********** While ***********\n");
let numwhile = 0;
while (numwhile <= 12){
    console.log(numwhile);
    numwhile = numwhile + 2;
}
console.log("Aqui termina el cilco while ya que el valor : " + numwhile + " es mayor a la condicion 12");



console.log("\n********** DoWhile ***********\n");
let contador = 0;
do{
    console.log(contador);
    contador++;
}while (contador < 3);
console.log("Fin del ciclo");


console.log("\n********** For ***********\n");
let contadorfor = 0;
for(contadorfor ; contadorfor <= 10; contadorfor++){ // for (Declaracion; Condicion; incremento de contador) 
        console.log(contadorfor);
}
console.log("Fin del ciclo for :" + contadorfor);


console.log("\n********** switch ***********\n");
let month = 11; // Los casos deben de ser del mismo tipo, ya que la comparacion ESTRICTA
let season = 'unknow';

switch( month ){
    case 1: case 2: case 12:
        season = "Invierno";
        break;
    case 3: case 4: case 5:
        season = "Primavera";
        break;
    case 6: case 7: case 8:
        season = "Verano";
        break;
    case 9: case 10: case 11:
        season = "Otoño";
        break;
    default:
        season = "No existe este mes"
}
console.log(season);