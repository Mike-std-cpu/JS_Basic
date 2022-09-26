
function calcularPrecioDescuento(precioInicial, descuento){
    const descuentoPrecio = 100 - descuento;
    const precioFinalDescuento = (precioInicial * descuentoPrecio) / 100;

    return precioFinalDescuento;
}
console.log(calcularPrecioDescuento(300,30));

function PriceDiscount(){
    const inputPrice = document.getElementById("price");
    const valuePrice = inputPrice.value;
    const inputCupon = document.getElementById("cupon");
    const valueCupon = inputCupon.value;

    let descount;

    switch(valueCupon){
        case cupones[0]:
            descount = 15;
            break;
        case cupones[1]:
            descount = 30;
            break;
        case cupones[2]:
            descount = 25;
            break;
    }
    //calculos

    const precioFinal = calcularPrecioDescuento(valuePrice,descount);

    const mostrar = document.getElementById("showPrice");
    mostrar.innerText = `El descuento es de: ${precioFinal}`
}

// Cupones

const cupones = ["Miguel_es_batman","pero_no_digas_nada","es_secreto"];
