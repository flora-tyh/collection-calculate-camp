'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    result[i] = 4 * collection[i] + 1;
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
