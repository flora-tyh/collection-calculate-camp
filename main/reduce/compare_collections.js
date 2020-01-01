'use strict';

function compare_collections(collection_a, collection_b) {
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
  collection_a = rank_desc(collection_a);
  collection_b = rank_desc(collection_b);
  for (var i = 0, len = collection_b.length; i < len; i++) {
    if (collection_b[i] !== collection_a[i]) {
      return false;
    }
  }
  return true;
}

module.exports = compare_collections;


