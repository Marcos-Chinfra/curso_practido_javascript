const lado1 = 5;
const lado2 = 5;
const base = 6;




function alturaTriangulo(lado1,lado2,base)
{
    if (lado1 === lado2)
    {
     const altura = Math.sqrt(Math.pow(lado1,2) - (base/2)**2)
     console.log(altura);
    }
    else 
    {
     console.log("no soy un triangulo isoseles.");
    };
};





/* if (lado1 === lado2)
{
    alert("SI ES UN ISOCELES");
}; */

