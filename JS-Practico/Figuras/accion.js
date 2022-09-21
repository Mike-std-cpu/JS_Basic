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


// HTML
function calculperimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const peri = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es : ${peri}`);
}
function calculperimetroTriangulo(){
    const input = document.getElementById("ladoTriangulo");
    const value = input.value;
    const peri = perimetroTriangulo(value);
    alert(`El perimetro del triangulo es : ${peri}`);
}

function areaCuadrado(ladoCuadrado){
    const areaCuad = ladoCuadrado * ladoCuadrado;
    return areaCuad;
}

let areaTriangulo = (baseTriangulo, alturaTriangulo)=>{
    const areaTri = (baseTriangulo * alturaTriangulo) / 2;
    return areaTri;
}


// HTML
function calcularareaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El area del cuadrado es : ${area}`);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo")
    const valueBase = base.value;
    const valueAltura = altura.value;
    const area = areaTriangulo(valueBase,valueAltura);
    alert(`El el area del triangulo es : ${area}`);
}


console.group("Cuadrado");
console.log(`El area del cuadrado es de: ${areaCuadrado(10)}`);
console.log(`El perimetro del cuadrado es de: ${perimetroCuadrado(10)}`);
console.groupEnd();

console.group("Triangulo");
console.log(`El area del triangulo es de: ${areaTriangulo(10,15)}`);
console.log(`El perimetro del triangulo es de: ${perimetroTriangulo(10)}`);
console.groupEnd();
