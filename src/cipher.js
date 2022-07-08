const cipher = {

  function encode(originalText, offSet){
    if (!originalText)
    return "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offSet = (offSet % 26 + 26) % 26;
    return originalText.replace(/[A-Z]/ig, c => letters[(letters.indexOf(c) + offSet) % 26]);
  }

  function decode (originalText2, offSet){
    if (!originalText2)
    return "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offSet = (offSet % 26 - 26) %26;
    return originalText2.replace(/[A-Z]/ig, c=> letters[(letters.indexOf(c)-offSet)%26]);
}

  // let letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // 
  // (x-65+n)%26+65
  // cipher.encode(3, string)
  // cipher.decode(3, string)
};

export default cipher;
