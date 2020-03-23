$(document).ready(function(){
  var sentence= prompt("enter a sentence to encode:");

  var encode = function(myString){
    var myString =  myString.charAt(0).toUpperCase() + myString.substring(1)
    var front = myString.slice(0, myString.length-1)
    var tempString = front  + myString.charAt(myString.length -1).toUpperCase()
    return tempString;
  }

alert(encode(sentence));
  
});