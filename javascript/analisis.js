// Helpers
function esPar(numero){
    return (numero % 2 === 0);
};

function calcularMedia(lista)
{
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    }
 ); 
 
const promedioLista = sumaLista / lista.length;
return promedioLista
};

// calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2) ;

    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]
        const mediana = calcularMedia([personaMitad1,personaMitad2]);
        return mediana;
    }
    else
    {
        const personaMitad = lista[mitad];
        return personaMitad;
    };
};

// mediana general de Guatemala
const salariosGT = Guatemala.map(function (persona){
    return persona.salary;
});
const salariosGTOrden = salariosGT.sort(function(salaryA,salaryB){
    return salaryA - salaryB
});

const medianaGeneralGT = medianaSalarios(salariosGTOrden)

// mediana del top 10%

const spliceStar = (salariosGTOrden.length * 90) / 100;
const spliceCount = salariosGTOrden.length - spliceStar;

const salariosTop10GT = salariosGTOrden.splice(spliceStar,spliceCount);

const medianaTop10GT = medianaSalarios(salariosTop10GT);

console.log (
    medianaGeneralGT,
    medianaTop10GT,
)