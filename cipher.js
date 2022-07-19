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

  
};

export default cipher;
