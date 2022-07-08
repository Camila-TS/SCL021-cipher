import cipher from './cipher.js';

console.log(cipher);

function inicio() {
   document.getElementById("texto1").addEventListener("keyup", function() {
      this.value = this.value.toUpperCase();
   }, true);
   document.getElementById("texto2").addEventListener("keyup", function() {
      this.value = this.value.toUpperCase();
   }, true);
}
inicio();



//function configurar(offSet) {
//document.getElementById("aplicar").addEventListener("click");

//const offSet = document.getElementById("número").value;
//}
//configurar();

document.getElementById("cifrar").addEventListener("click",function(){  
   const originalText = document.getElementById("texto1").value;
   
   const offSet = document.getElementById("número").value;    
   //ahí se muestra el texto cifrado           
   document.getElementById("cifrado").value = cipher.encode(originalText, offSet);
},true);


   