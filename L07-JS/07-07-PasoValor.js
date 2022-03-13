/*PASO POR VALOR
Cuando utuilizamos tipos no Objet
YA QUE NO CUENTAN CON ATRIBUTOS NI METODOS
*/

let = x = 10; //valor primitivo ya que no contiene ningun atributo o metodo
function cambiarValor(a){
    a = 20;
    //console.log(a);
}

cambiarValor(x);
console.log(x);
console.log(a);
//El valor del argumento se destruye cuando acaba la funcion
// Por esta razon el valor de A se pierde ya que se borro la copia que se hizo 

