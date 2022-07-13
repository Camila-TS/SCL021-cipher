const cipher = {

   encode: function (offSet, originalText){
    if (!originalText) {
    throw new TypeError();
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offSet = (offSet % 26 + 26) % 26;
    /*encontrar el offset
    recorrer el texto ingresado
    puedo tener el elemento de cada posición
    buscar si ese elemento está en mi array de letras
    si está aplicarle la formula
    si no está devolverla tal cual ingresó*/
    return originalText.replace(/[A-Z]/ig, c => letters[(letters.indexOf(c) + offSet) % 26]);
  },

  decode: function (offSet, originalText2){
    if (!originalText2) {
    throw new TypeError();
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offSet = (offSet % 26 - 26) %26;
    return originalText2.replace(/[A-Z]/ig, c=> letters[(letters.indexOf(c)-offSet)%26]);
  },

  //typeOfText: function (originalText) {
    //if(typeof originalText === "string"){
      //return (originalText)
    //} else {
      //return error
    //}
  //},

  //typeOfText2: function (originalText2) {
    //console.log(typeof originalText2, originalText2)
    //if(typeof originalText2 === "string"){
      //console.log(originalText2)
    //} else {
      //console.log("No es texto")
    //}
  //}



};

export default cipher;
