let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);
//¿Por que 16?
/*El resultado es 16 ya que se hace el post incremento de X, que es de 5 a 6, sumando asi el 10 de Y.
Posterior a esto, tenia pendiente un post decremento, terminando la operacion se hace y ahora Y vale 9.
*/

let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
 console.log(resultado);