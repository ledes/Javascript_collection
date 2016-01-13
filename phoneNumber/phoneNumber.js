function numberExtractor(phoneNumber) {
  var badNumber = "Bad number"
  var phoneNumberStr= phoneNumber.toString()

  if (phoneNumberStr.length == 10) {
    return phoneNumber;
  } else {
    if (phoneNumberStr.length == 11) {
      if (phoneNumberStr[0] == "1") {
        return phoneNumberStr.substr(1);
      }else{
        return badNumber;
      };
    } else {
      return badNumber;
    };
  };
};

console.log(numberExtractor(1234567890)); // returns 1234567890
console.log(numberExtractor(12234567890)); //returns 2234567890
console.log(numberExtractor(567890)); //returns  bad number
console.log(numberExtractor(567890567890)); // returns bad number
