'use strict';
var rank_desc = function(collection){
  if (collection.length <= 1) { 
    return collection; 
  }
  var pivotIndex = Math.floor(collection.length / 2);
  var pivot = collection[pivotIndex];
  var left = [];
  var right = [];
  for (var i = 0; i < collection.length; i++) {
    if (i != pivotIndex) {
      if (collection[i] < pivot) {
        left.push(collection[i]);
      } else {
        right.push(collection[i]);
      }
    }
  }
  return rank_desc(left).concat([pivot], rank_desc(right));
};

module.exports = rank_desc;
