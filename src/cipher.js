const cipher = {

   encode: function (offSet, originalText){
    if (!originalText)
    return "";
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
  }

};

export default cipher;
