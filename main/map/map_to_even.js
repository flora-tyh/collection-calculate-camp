'use strict';
function map_to_even(collection){
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    result[i] = 2 * collection[i];
  }
  return result;
}
module.exports = map_to_even;
