
function calcularPrecioDescuento(precioInicial, descuento){
    const descuentoPrecio = 100 - descuento;
    const precioFinalDescuento = (precioInicial * descuentoPrecio) / 100;

    return precioFinalDescuento;
}
console.log(calcularPrecioDescuento(300,30));

function PriceDiscount(){
    const inputPrice = document.getElementById("price");
    const valuePrice = inputPrice.value;
    const inputDiscount = document.getElementById("discount");
    const valueDiscount = inputDiscount.value;

    //calculos

    const precioFinal = calcularPrecioDescuento(valuePrice,valueDiscount);

    const mostrar = document.getElementById("showPrice");
    mostrar.innerText = `El descuento es de: ${precioFinal}`
}
