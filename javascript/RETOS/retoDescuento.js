

/*var precioOriginal = 150;
var cupon = 10;
var descuento = 8;*/

 /*function precioFinal(precioOriginal, descuento, cupon){
if( cupon > 0)
{
    //const descuentoTotal= descuento + cupon;
    const porcentaje = 100 - (descuento + cupon);
    const precioConDescuentoCupon = (precioOriginal * porcentaje) / 100;
    return precioConDescuentoCupon
    //console.log (precioConDescuentoCupon);
}
else if (cupon == 0)
{ 
    const porcentaje = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentaje) / 100;
    return precioConDescuento
    //console.log (precioConDescuento);
}
}; */





function precioFinal(precioOriginal,descuento,cupon){
    if( Boolean(cupon) == true)
    {
        var descuentoTotal= descuento + cupon;
        var porcentaje = 100 - descuentoTotal;
        var precioConDescuentoCupon = (precioOriginal * porcentaje) / 100;
        return precioConDescuentoCupon
        //console.log (precioConDescuentoCupon);
    }
    else 
    { 
        var porcentaje = 100 - descuento;
        var precioConDescuento = (precioOriginal * porcentaje) / 100;
        return precioConDescuento
        //console.log (precioConDescuento);
    }
    }; 

function botonDeHtml()
{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount =  document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const inputCupon =  document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
    
    const numberA= Number(priceValue)
    const numberB= Number(discountValue)
    const numberC= Number(cuponValue)

    const precioConDescuento = precioFinal(numberA, numberB,numberC);
    console.log(precioConDescuento);
    const resultP = document.getElementById("Resultado");
    resultP.innerText="El precio con descuento es: $ " + precioConDescuento 
};
