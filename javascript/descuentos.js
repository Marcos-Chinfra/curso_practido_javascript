//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
    return precioConDescuento
};

function onClickButtonPreciDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount =  document.getElementById("inputDiscount")
    const disconuntValue = inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, disconuntValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son: $" + precioConDescuento
}





/*console.log ({
    precioOriginal,
    descuento,
    porcentajeDelPrecioConDescuento,
    precioConDescuento
}); */
