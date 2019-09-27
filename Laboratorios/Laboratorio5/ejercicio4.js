
// var arreglito = new Array();

// for(i=0; i<20;i++){
//     arreglito[i] = Math.floor(Math.random() * 20);
// }
// var  contWin = 0;
// function wea(numerito,arreglito){

//     arreglito.forEach((a) =>{
 
      
//         if(a==numerito){
//             contWin++;
//         }
     
// });
//     return contWin;
 
// }

// numerito = prompt("sampe el numerito:");
// document.write(wea(numerito,arreglito));
// document.write(arreglito);

// if(contWin > 0){
//     document.write("<br>"+"Awuebo ganaste");
// }else{
//     document.write("<br>"+"perdiste we");

// }




function cuatro(numero){
    valores =[];
    validacion = false;
    var numeroaleatorio;
    typeof(variable);

    for(var i=0; i<20; i++){
        numeroaleatorio=(Math.floor(Math.random()*100)+1);
        valores.push(numeroaleatorio);
    }

    for(var j=0; j<20; j++){
        if(numero===valores[j]){
            document.write("ganaste" + "<br>");
            validacion = true;
            break;
        }
    }

    if(validacion===false){
        document.write("perdiste" + "<br>");
    }
    return valores;
}

var numerito = parseInt(prompt("Ingresa numero we:"));
document.write(cuatro(numerito));
