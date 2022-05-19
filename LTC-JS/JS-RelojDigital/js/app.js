const mostrarTime = () =>{
    let fecha = new Date();
    let hr = formatoDigitos(fecha.getHours());
    let min = formatoDigitos(fecha.getMinutes());
    let seg = formatoDigitos(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];
    const dias = ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'];
    let diasWeek = dias[fecha.getDay()];
    let dia = fecha.getDay();
    let monthYear = meses[fecha.getMonth()];
    let fechaTexto = `${diasWeek}, ${dia} de ${monthYear}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    //Segun el numero que regrese del dia de la semana, sera la posicion del arreglo antes declarado
    document.getElementById('contenedor').classList.toggle('animar');
    //classList enlista todas las clases que se tengan en el contenedor indicado, en este caso es 'CONTENEDOR'
    //toggle es una funcion tipo interruptor ya que inicializa cada vez que se active una clase, como se agrega el efecto y lo activa segun el segundo


}

const formatoDigitos = (times) =>{
    if(times < 10){
     times = '0' + times;   
    }
    return times;
}
//Sirve para ostra la hora cada segunod o segun el timepo que pongamos
setInterval(mostrarTime, 1000);