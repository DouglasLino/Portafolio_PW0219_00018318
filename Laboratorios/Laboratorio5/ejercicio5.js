var palabra = "ana";

var palindrome = (inStr) =>{
    for(let i=0; i<inStr.length; i+=1){
        if(inStr[i] !== inStr[inStr.length-1 -i]){
            return false;
        }
    }
    return true;
}
document.write("La palabra: " + palabra + "<br>");
document.write(palindrome(palabra));