'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
  for (var i = 0, len = collection_a.length; i < len; i++) {
    for (var j = 0, length = collection_b.length; j < length; j++) {
      if (!(collection_a[i] % collection_b[j])) {
        result.push(collection_a[i])
      }
    } 
  }
  return result
}

module.exports = choose_divisible_integer;
