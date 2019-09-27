// Valor absoluto: Escribir una funcion en JavaScript que, 
// dado un número real cualquiera, encuentre su valor absoluto 
// y lo retorne. El valor absoluto de un número x es 
// igual a x si x > 0, y a -x si x es menor o igual a 0.


var numerito = parseInt(prompt("Sampe el numero: "));

function valor_absoluto(numero){
    return Math.abs(numero);
}

document.write("El valor absoluto de " + numerito + " es: " + valor_absoluto(numerito));