'use strict' // Strict mode

try{
    x = 10; // Marcara error ya que el modo strict no detecta el tipo de varible que es.
}catch(error){
    console.log(error);
}finally{// Siempre se va a ejecutar *Opcional*
    console.log("Termina la revision de errores")
}

console.log("Continuamos con la codificiacion");
/* Antes del try, al momento de que mandaba el error de la varible, podiamos observar que las demas
lineas de codigo no se ejecutaban por ese simple error, el try catch ayuda a capturar el error
y posterior a esto poder seguir con el codigo que este adjunto a esto.
*/