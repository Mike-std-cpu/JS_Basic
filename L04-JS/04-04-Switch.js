let num = 2;
let numberText = 'Valor desconocido';

switch( num ){
        case 1:
            numberText = 'Numero uno';
            break;
        case 2:
            numberText = 'Numero dos';
            break;   
        case 3:
            numberText = 'Numero tres';
            break;
        case 4:
            numberText = 'Numero cuatro';
            break;
        default:
            numberText = "Unknow :("
}
console.log(numberText)

//EJEMPLO DE ESTACION DE AÑO
let month = 11; // Los casos deben de ser del mismo tipo, ya que la comparacion ESTRICTA
let season = 'unknow';

switch( month ){
    case 1: case 2: case 12:
        season = "Invierno";
        break;
    case 3: case 4: case 5:
        season = "Primavera";
        break;
    case 6: case 7: case 8:
        season = "Verano";
        break;
    case 9: case 10: case 11:
        season = "Otoño";
        break;
    default:
        season = "No existe este mes"
}
console.log(season);