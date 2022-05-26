const lista1 = [
    100,
    200,
    300,
    500
];

let sumaLista1 = 0;
for(let i = 0; i < lista1.length; i++ ){
    sumaLista1 = sumaLista1 + lista1[i];
}; 

const promedioLista1 = sumaLista1 / lista1.length;

function calcularMedia(lista)
{
   /* let sumaLista = 0;
for(let i = 0; i < lista.length; i++ ){
    sumaLista = sumaLista + lista[i];
}; */

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    }
 ); 
 /*Nosotros enviamos como argumento 
una funcion a este metodo y lo que nos permite es ir sumando cada uno de los elementos
vamos a tomar el primero y sumarlo con el segundo y el total sumarlo con el tercero
IMPORTANTE:no necesariamente vamos a sumar los dados, podemos multiplicar, dividir o restar
pero en este caso nos interesa sumar*/ 


const promedioLista = sumaLista / lista.length;

return promedioLista
};