// Análisis de una circunferencia: Crear una función en JavaScript 
// que pida por el teclado el radio de un circunferencia, y calcule 
// el área de esta y lo retorne, si el radio ingresado es negativo o
//  cero, retornará -1.



var numero_radio = parseInt(prompt("Sampe el radio: "));

 

function calcular_radio(numero){
    if(numero <= 0){
        return -1;
    }else{
        return Math.PI * Math.pow(numero,2);
    }
     
}

document.write("el area es: " + calcular_radio(numero_radio));