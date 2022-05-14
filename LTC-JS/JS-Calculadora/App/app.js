console.log('Estoy en app.js 🌚');

function sumar() {
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = 'La operacion no puede ejecutarse por que no hay números.'
    }
    document.getElementById('Resultado').innerHTML = `El resultado es: ${resultado}`;
    console.log('Se acaba el calculo')
}
function restar() {
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) -  parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = 'La operacion no puede ejecutarse por que no hay números.'
    }
    document.getElementById('Resultado').innerHTML = `El resultado es: ${resultado}`;
    console.log('Se acaba el calculo')
}

function dividir() {
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) /  parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = 'La operacion no puede ejecutarse por que no hay números.'
    }
    document.getElementById('Resultado').innerHTML = `El resultado es: ${resultado}`;
    console.log('Se acaba el calculo');
}

function multipli() {
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) *  parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = 'La operacion no puede ejecutarse por que no hay números.'
    }
    document.getElementById('Resultado').innerHTML = `El resultado es: ${resultado}`;
    console.log('Se acaba el calculo');
}