const precioInicial = 100;
const descuento = 15;

const descuentoPrecio = precioInicial - descuento;
const precioFinalDescuento = (precioInicial * descuento) / 100;

console.log({
precioInicial,
descuento,
descuentoPrecio,
precioFinalDescuento
});