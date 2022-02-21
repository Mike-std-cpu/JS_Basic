let a = 3, b = 2, c = "3";

let z = a == c; // ¿Es igual? se revisa el valor sin importar el tipo.
console.log(z);

z = a === c;// revisa los valores pero tambien los tipos
console.log(z);

z = a != c; // Revisa si es diferente una variable de otra
console.log (z);

z = a !== c; // Revisa si es diferente una variable de otra reisando los tipos de la variable , Operador ESTRICTO
console.log (z);

z = a < b; // a es menor que b?
console.log (z);

z = a <= b; //  a es menor o igual que b?
console.log (z);

z = a > b; // a es mayor que b?
console.log (z);

z = a >= b; // a es mayor que b?
console.log (z);
