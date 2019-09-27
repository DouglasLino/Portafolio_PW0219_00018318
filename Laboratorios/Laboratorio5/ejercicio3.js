 
//Realice una función en JS, que dados un número y un arreglo como parámetros, 
//retorne cuantas ocurrencias existen de ese número dentro del arreglo.


var numeritos = [10,10,5,8,5,5];
var elNumero = 5;
var cont=0;

function recurrencia(numerito,arreglo){
    

    arreglo.forEach((a) =>{
 
      
       if(a==numerito){
        cont++;
       }
     
});
    return cont;
 
}
document.write("Arreglo: " + numeritos + "<br>")
document.write("El numero: " + elNumero + " se repite: "+ recurrencia(elNumero,numeritos) + " veces");

 