'use strict';
var number_map_to_word = function(collection){
  var numToLetter = function(number) {
    if (number > 26) {
      var remainder = number % 26;
      var quotient = number / 26;
      return (numToLetter(quotient) + String.fromCharCode(remainder + 64).toLowerCase());
    } 
    else {
      return (String.fromCharCode(number + 64).toLowerCase());
    }
  }
    var result = [];
    for (var i = 0, len = collection.length; i < len; i++) {
      result.push(numToLetter(collection[i]));
    }
    return result;
};

module.exports = number_map_to_word;
