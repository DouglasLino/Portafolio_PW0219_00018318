//Realice una función que reciba un
 //arreglo como parámetro y liste los tipos 
 //de datos de sus elementos y cuantos de cada tipo.
 
 var lista = ['A','h','e',5,'F'];
 var cont1=0, cont2=0;
 function wea(a){
     
 
     lista.forEach((a) =>{
  
       
         document.write(typeof a + "<br>");
 
         if(typeof (a) == "string"){
             cont1++;
         }else{
               cont2++;
         }
      
 });
 
 return a;
 }
 
 document.write(wea(lista));
 document.write("<br>"+"Tipo string: "+ cont1 + "<br>");
 document.write("Tipo int: "+ cont2 + "<br>");
 





///////////////////////////////////////////////////////////////////
/**
 *  no se porque me muestra al final "undefined"
var arreglo = ['A',5];
var cont1=0, cont2=0;

function wea(a){
     
     a.forEach(x => 
        document.write(typeof x + "<br>")
        
        );
      
    
}

document.write(wea(arreglo));
 * 
 * 
 * 
 * 
 */


 
 
  
 
