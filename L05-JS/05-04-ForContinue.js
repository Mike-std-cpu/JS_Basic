for(let contador=0;contador <= 10; contador++){ // for (Declaracion; Condicion; incremento de contador)
    if ( contador % 2 !== 0){ 
        continue; // ir a la siguiente iteracion
    }else{
        console.log(contador);
    }
}
console.log("Fin del ciclo for");

