'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  for (var i = 0, len = collections.length; i < len; i++) {
    result[i] = 3 * collections[i];
  }
  return result;
};

module.exports = map_to_three_multiples;
