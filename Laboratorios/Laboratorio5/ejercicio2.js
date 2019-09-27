//Realice una función que reciba un 
//arreglo de datos numéricos, y muestre la 
//suma de todos los elementos del arreglo y su promedio.

 
var numeritos = [10,10,5];



function sumatoria(a){
    var y = 0;
     a.forEach(x => y += x);
     return y;
    
}

function promedio(totArreglo){
    
    return sumatoria(totArreglo)/totArreglo.length;
}

document.write("Arreglo original: " + numeritos + "<br>");
document.write("Sumatoria del arreglo: " + sumatoria(numeritos)+ "<br>");
document.write("El promedio es: " + promedio(numeritos));