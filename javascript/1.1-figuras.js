// condigo de cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado)
{
    return lado * 4;
};
perimetroCuadrado( );

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
};
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo

console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triaungulo miden: " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ baseTriangulo 
+ "cm" 
);*/

//const alturaTriaungulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriaungulo + "cm");

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base
};
//console.log("El perimetro del triagunlo es: " + perimetroTriangulo +"cm");

function areaTriangulo(base, altura)
{
     return (base * altura) / 2
};
//console.log("El area del triangulo mide: " + areaTriangulo  + "cm^2") 
console.groupEnd

// Codigo del circulo

console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm")

//Diametro

function diametroCirculo (radio)
{
   return 2 * radio
};

//console.log("El diametro del ciruclo es: " + diametroCirculo + "cm")

//PI



//console.log("PI vale; " + PI );

//Circunferencia

function perimetroCirculo(radio){
    const PI = Math.PI;
    const diametro = diametroCirculo(radio) 
   return diametro * PI
};
//console.log("La circunferencia es: " + perimetroCirculo + "cm" )

//Area

function areaCirculo(radio){
    const PI = Math.PI;
    return (radio * radio) * PI
};
//console.log("El area del ciculo es: " + areaCirculo + "cm^2")

console.groupEnd();

//aqui interactuamos con el HTML

//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultPeri = document.getElementById("ResultSquare");
    resultPeri.innerText="El perimetro es: " + perimetro;
   
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const resultArea = document.getElementById("ResultSquare");
    resultArea.innerText="El Area es: " + area;
   
};

//TRIANGULO
function calcularPerimetroTriangulo(){
    const inputSide1 = document.getElementById("InputTrianguloSide1");
    const inputSide2 = document.getElementById("InputTrianguloSide2");
    const inputSide3 = document.getElementById("InputTrianguloSide3");
    const valueOne = Number(inputSide1.value);
    const valueTwo = Number(inputSide2.value);
    const valueThree = Number(inputSide3.value);
    const perimetro = perimetroTriangulo(valueOne, valueTwo, valueThree);
    const resultPeri = document.getElementById("ResultTriangle");
    resultPeri.innerText="El perimetro es: " + perimetro;
   
};

function calcularAreaTriangulo(){
    const inputSide1 = document.getElementById("InputTrianguloSide1");
    const inputSide2 = document.getElementById("InputTrianguloSide2");
    const inputSide3 = document.getElementById("InputTrianguloSide3");
    const valueOne = Number(inputSide1.value);
    const valueTwo = Number(inputSide2.value);
    const valueThree = Number(inputSide3.value);
    const area = areaTriangulo(valueOne, valueTwo, valueThree);
    const resultArea = document.getElementById("ResultTriangle");
    resultArea.innerText="El Area es: " + area;
};
 
//CIRCULO

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    const resultPeri = document.getElementById("ResultCircle");
    resultPeri.innerText="El perimetro es: " + perimetro;
};

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    const resultArea = document.getElementById("ResultCircle");
    resultArea.innerText="El Area es: " + area;
};