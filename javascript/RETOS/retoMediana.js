//lista PAR
var listaNumeros = [100, 200, 1500, 600, 3650, 1000, 766, 918];

function calcularMediana (elementos){
   
    const suma = elementos.reduce ((acum, item) =>  acum + item  , 0);
    
    const promedio = suma / 2;

    return promedio
};

function numerosMitad(Numeros){

    const item1 = Numeros.length / 2;
    const item2 = (Numeros.length / 2) - 1;
    
    const numeroSelect =
     [
        Numeros[item1],
        Numeros[item2]
    ]
    return numeroSelect;
};


/*var orden = listaNumeros.sort(function(a,b){
    return a - b;
});
*/

//calcularMediana(numerosMitad(orden))

// lista IMPAR

//var listNumbers = [100, 200, 1500, 600, 3650, 1000, 766];

function numberMid(elements)
{
    var middle = parseInt(elements.length / 2);
    return middle;
};




function thisIsTheEnd (list) {
    
if (list.length % 2 === 0 )
{
    const orden = list.sort(function(a,b){
        return a - b;
    });
    const total = calcularMediana(numerosMitad(orden));
    return total;
}
else
{
    const orden = list.sort(function(a,b){
        return a - b;
    });    
    const total =  numberMid(list);
    const number = list[total];
    return number;
}
};

//thisIsTheEnd ([100, 200, 1500, 600, 3650, 1000, 766, 918])