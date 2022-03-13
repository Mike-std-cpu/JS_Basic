function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

miFuncion(8,3);

console.log(typeof miFuncion);
// FUNCION == OBJETO    
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);