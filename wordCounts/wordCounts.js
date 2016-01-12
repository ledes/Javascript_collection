function WordCount(str) {
    var R =  /(\w|\s)*\w(?=")|\w+/g;
    var strArray = str.toLowerCase().match(R);
    var strObject = {};
    var finalStr = "";

    for (var i = 0; i < strArray.length; i++){
      word = strArray[i]
      if (strObject[word]){
        strObject[word] =  strObject[word] += 1 ;
      } else {
          strObject[word] = 1;
      };
    };

    for (var key in strObject){
      finalStr += key + ": " + strObject[key] + "\n";
    }
    return finalStr
}

console.log(WordCount("Hello hello world, hello WoRLD"))
