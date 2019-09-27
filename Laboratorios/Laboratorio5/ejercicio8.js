// Conversor decimal-binario: Crear una función en JavaScript,
//  que reciba como parámetro un entero positivo. La función debe 
//  devolver el valor en binario.




 
var numerito =  parseInt(prompt("sampe el numero: "));

function decimalEnBinario(a){
    return a.toString(2); // A la base 2
}

 document.write("El número decimal "+ numerito + " en binario es " + decimalEnBinario(numerito));

