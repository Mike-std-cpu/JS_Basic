console.log("Prueba de ejecucion en node 🌚");
// Refactorizacion a funciones

function perimetroCuadrado(ladoCuadrado){
    const periCuad = ladoCuadrado * 4;
    return periCuad;
}

function perimetroTriangulo(ladoTriangulo){
    const peritri = ladoTriangulo * 3;
    return peritri;
}

function areaCuadrado(ladoCuadrado){
    const areaCuad = ladoCuadrado * ladoCuadrado;
    return areaCuad;
}

let areaTriangulo = (baseTriangulo, alturaTriangulo)=>{
    const areaTri = (baseTriangulo * alturaTriangulo) / 2;
    return areaTri;
}


console.group("Cuadrado");
console.log(`El area del cuadrado es de: ${areaCuadrado(10)}`);
console.log(`El perimetro del cuadrado es de: ${perimetroCuadrado(10)}`);
console.groupEnd();

console.group("Triangulo");
console.log(`El area del triangulo es de: ${areaTriangulo(10,15)}`);
console.log(`El perimetro del triangulo es de: ${perimetroTriangulo(10)}`);
console.groupEnd();
