let month = 1;
let season;

if (month == 1 || month == 2 || month == 12 ){
    season = "Invierno";
}else if (month == 3 || month == 4 || month == 5 ){
    season = "Primavera";
}else if(month == 6 || month == 7 | month == 8 ){
    season = "Verano";
}else if(month == 9 || month == 9 || month == 10 ){
    season = "Otoño";
}else{
    season = "Incorrecto";
}
console.log(season);
