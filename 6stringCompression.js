function stringCompression (str) {
    if (str.length == 0) {
      console.log("Please enter valid string.");
      return;
    }
    let output = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    } 
    document.write(output);
  }
  
  let input = "aaaabbcaabb";
  stringCompression(input); 