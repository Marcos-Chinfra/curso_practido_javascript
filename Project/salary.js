//Helpers
function whim(percentage,salary)
{
switch(percentage)
{
    case 25:
        const whim25 = salary * 0.25;
        return whim25;
    break;
    case 30:
        const whim30 = salary * 0.2;
        return whim30;
    break;
    case 35:
        const whim35 = salary * 0.15;
        return  whim35;
    break;
    case 40:
        const whim40 = salary * 0.1;
        return  whim40;
    break;
    default:
        const whim20 = salary * 0.3;
        return  whim20;    
}
};

function saving (percentage,salary)
{
    if(percentage == 25)
{
    const saving25 = salary * 0.25
    return saving25;
}
else if(percentage == 30)
{
    const saving30 = salary * 0.3; 
    return saving30;
}
else if(percentage == 35)
{
    const saving35 = salary * 0.35
    return saving35;
}
else if(percentage == 40)
{
    const saving40 = salary * 0.4
    return saving40;
}
else
{
    const saving20 = salary * 0.2;
        return  saving20;
}
};

// CALCULADORA DE AHORRO Y GASTOS
function firstPass()
{
    const salaryUsser = document.getElementById("inputSalary"); 
    const valueSalary = Number(salaryUsser.value)
    const percentageUsser = document.getElementById("percentageSaving");
    const valuePercentege = Number(percentageUsser.value);
    
    const finish = whim(valuePercentege,valueSalary);  
    const finishim = saving(valuePercentege,valueSalary);  
    

    const resultP = document.getElementById("result");
    resultP.innerText="La cantidad ideal para que gastes es: " + finish + " y la cantidad ideal para que ahorres es: " + finishim
};
