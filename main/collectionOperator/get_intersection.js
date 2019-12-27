'use strict';

function get_intersection(collection_a, collection_b) {
  var collection = collection_a.concat(collection_b);
  var count = {};
  var result = [];
  for (var i = 0, len = collection_a.length; i < len; i++) {
    if (!count[collection_a[i]]) {
      count[collection[i]] = 1;
    }
  }
  for (var i = 0, len = collection_b.length; i < len; i++) {
    if (count[collection_b[i]]) {
      result.push(collection_b[i])
    }
  }
  return result;
}

module.exports = get_intersection;
