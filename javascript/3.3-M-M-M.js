
//Creando lista
lista1=[];

function listNumbers()
{
    const number = document.getElementById("inputNumber")
    const value = Number(number.value)
    const listaT = lista1.push(value)
    const resultado = document.getElementById("listView");
    resultado.innerText = lista1
    
}
function delateNumber()
{
    const delate = lista1.pop();
    const resultado = document.getElementById("listView");
    resultado.innerText = lista1
}

//canculando MEDIA

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

function viewMedia()
{
    const mediaValue = calcularMedia(lista1);
    const mediaNumber = document.getElementById("resultMedia");
    mediaNumber.innerText = mediaValue;
};

//canculando MEDIA

//var listaNumeros = [100, 200, 1500, 600, 3650, 1000, 766, 918];

function calcularMediaArit(elementos){
   
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
        const total = calcularMediaArit(numerosMitad(orden));
        return total;
    }
    else
    {
        const orden = list.sort(function(a,b){
            return a - b;
        });    
        const total =  numberMid(orden);
        const number = list[total];
        return number;
    }
    };
    
    function viewMedina()
{
    const medinaValue = thisIsTheEnd(lista1);
    const medinaNumber = document.getElementById("resutlMediana");
    medinaNumber.innerText = parseInt(medinaValue);
};

//calcular MODA
    
function viewModa()
{
    const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento])
        {
            lista1Count[elemento] += 1;
        }
        else
        {
            lista1Count[elemento] = 1;
        }
        
    }
);


const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
       return elementoA[1] - elementoB[1] 
    }
);

const moda = lista1Array[lista1Array.length - 1];



    const modaNumber = document.getElementById("resutlModa");
    modaNumber.innerText = moda;
};
