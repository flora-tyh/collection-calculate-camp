'use strict';

function get_letter_interval(number_a, number_b) {
  var collection_a = ['a', 'b', 'c', 'd', 'e'];
  var collection_sort = [];
  var result = [];
  (function() {
    for (var i = 0, len = collection_a.length; i < len; i++) {
      var collection_letter = collection_a[i].split("");
      var count = 0;
      collection_letter.reverse();
      for (var j = 0; j < collection_letter.length; j++) {
        count += ((collection_letter[j].toUpperCase().charCodeAt() - 64) * Math.pow(26, j));
      }
      collection_sort[count] = collection_a[i];  
    }
  })();
  for (var i = Math.min(number_a, number_b); i <= Math.max(number_a, number_b); i++) {
    if (collection_sort[i]) {
      result.push(collection_sort[i]);
    }
  }
  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}


module.exports = get_letter_interval;
