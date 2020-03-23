$(document).ready(function(){
  var sentence= prompt("enter a sentence to encode:");

  var encode = function(myString){
    var tempString =  myString.charAt(0).toLocaleUpperCase()
    tempString = tempString.charAt(tempString.length -1).toLocaleUpperCase()
    return tempString
  }

alert(encode(sentence));
  
});