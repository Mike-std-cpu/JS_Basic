
function calcularPrecioDescuento(precioInicial, descuento){
    const descuentoPrecio = 100 - descuento;
    const precioFinalDescuento = (precioInicial * descuentoPrecio) / 100;

    return precioFinalDescuento;
}

console.log(calcularPrecioDescuento(300,30));