const cipher = {

   encode: function (offSet, originalText){
    if (!originalText) {
    let error = new TypeError("No hay texto ingresado")
    return error;
    }
    //if (!originalText) {
     // let error = new TypeError("No es texto")
     // function typeOfText (originalText) {
     // if (typeof originalText === "string"){
     //   return (originalText);
     // } else {
     //   return error;
     // }
     // }
     // typeOfText();
    //}
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offSet = (offSet % 26 + 26) % 26;
    return originalText.replace(/[A-Z]/ig, c => letters[(letters.indexOf(c) + offSet) % 26]);
  },

  decode: function (offSet, originalText2){
    if (!originalText2)
    return "";
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
