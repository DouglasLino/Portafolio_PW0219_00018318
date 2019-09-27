// Ordenamiento de array: Crear 
// una función en JavaScript que ordene 
// los elementos de un Array en orden ascendente.

var arreglito = [5,4,3,22,64,2,1];

function ordenar(arreglo){

    for(var i=1; i<arreglo.length;i++){
        for(var j=0; j< arreglo.length;j++){
            if(arreglo[j]>arreglo[j+1]){
                num = arreglo[j+1];
                arreglo[j+1]=arreglo[j];
                arreglo[j]=num;
            }
        }
    }
    return arreglo;
}

document.write("Arreglo inicial: <br>" );
document.write(arreglito);

document.write(" <br> Arreglo arregladito: <br>");
document.write(ordenar(arreglito));