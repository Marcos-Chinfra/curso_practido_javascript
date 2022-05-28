const lista = [2, 4, 4, 12, 18];

const multLista = lista.reduce(function(acum= 0, item){
    return acum * item
});

const valorN = lista.length
const mediaGeo = Math.pow(multLista, 1/valorN);
const aprox =  Math.round(mediaGeo);