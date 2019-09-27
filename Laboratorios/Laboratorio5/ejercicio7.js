// Fibonacci: La serie Fibonacci es una serie matemática 
// muy reconocida, la cual tiene como primeros 
// 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 
// Realice una función en JavaScript que reciba un 
// número n como argumento y muestre la serie hasta 
// el enésimo término.

var a = 0,b = 1, tot = b;

function Fibonacci(numerito){
    for(let i = 1; i < numerito; i++){
        document.write(tot + "<br>");
        tot = a+b;
        a=b;
        b=tot;
    }
     return tot;
}

numero = prompt ("numero we: ");
document.write(Fibonacci(numero));
