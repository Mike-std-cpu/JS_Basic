inicio: //Etiqueta
for(let contador=0;contador <= 10; contador++){ // for (Declaracion; Condicion; incremento de contador)
    if ( contador % 2 !== 0){ 
        continue inicio; // Continue con la iteracion siguiente de la etiqueta.
    }
        console.log(contador);
}
console.log("Fin del ciclo for");
