console.log("Prueba de ejecucion en node 🌚");

console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuad = ladoCuadrado * 4;
const areaCuad = ladoCuadrado * ladoCuadrado;
console.log(`CUADRADO | Lado: ${ladoCuadrado}}cm`);
console.log(`Perimetro del cuadrado: ${perimetroCuad}cm`);
console.log(`Area del cuadrado: ${areaCuad}cm2`);
console.groupEnd();

console.group("Triangulo");
const baseTri = 10;
const ladoTri = 6;
const alturaTri = 5.5;
const perimetroTri = baseTri + ladoTri + ladoTri;
const areaTri = (baseTri * alturaTri) / 2
console.log(`TRIANGULO | Base : ${baseTri}cm & lado: ${ladoTri}cm & Altura: ${alturaTri}`);
console.log(`Perimetro del Triangulo : ${perimetroTri}cm`);
console.log(`Area del Triangulo: ${areaTri}cm2`);

console.groupEnd();